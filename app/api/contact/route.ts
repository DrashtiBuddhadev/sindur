import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function autoReplyHtml(heading: string, message: string) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f1eb; padding: 40px 16px; font-family: Arial, Helvetica, sans-serif;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 520px; background-color: #ffffff;">
            <tr>
              <td style="background-color: #111111; padding: 22px 32px;">
                <span style="font-size: 14px; font-weight: bold; letter-spacing: 2px; color: #ffffff; text-transform: uppercase;">Sindur Group</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 40px 32px 24px;">
                <h1 style="margin: 0 0 16px; font-size: 22px; line-height: 1.3; color: #111111; font-weight: 600;">${heading}</h1>
                <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #555555;">${message}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 32px 36px;">
                <a href="tel:+917788833307" style="display: inline-block; background-color: #1d5a8c; color: #ffffff; text-decoration: none; padding: 12px 24px; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; text-transform: uppercase;">Call Us: +91 77888 33307</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 32px; border-top: 1px solid #eeeeee;">
                <p style="margin: 0; font-size: 12px; color: #999999; line-height: 1.6;">
                  Sindur Group &middot; Naranpura, Ahmedabad, Gujarat
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const designation = formData.get("designation")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const resume = formData.get("resume");

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const isCareers = designation !== undefined && designation !== "";
    const subject = isCareers
      ? `New Careers Application from ${name}`
      : `New Contact Form Submission from ${name}`;

    // Each form is fully handled by its own Google Workspace mailbox - that
    // account both receives the internal notification and sends the auto-reply.
    const mailbox = isCareers
      ? {
          user: process.env.CAREERS_EMAIL_USER,
          pass: process.env.CAREERS_EMAIL_PASS,
          fromName: "Sindur Group Careers",
          autoReplySubject: "Thank you for your interest in a career at Sindur Group",
          autoReplyMessage:
            "Thank you for your interest in a career at Sindur Group. Our team will review your application and get in touch with you very soon.",
        }
      : {
          user: process.env.SALES_EMAIL_USER,
          pass: process.env.SALES_EMAIL_PASS,
          fromName: "Sindur Group",
          autoReplySubject: "Thank you for contacting Sindur Group",
          autoReplyMessage: "Thank you for contacting Sindur Group, we'll get in touch with you very soon.",
        };

    if (!mailbox.user || !mailbox.pass) {
      console.error(`Missing mailbox credentials for ${isCareers ? "careers" : "contact"} form`);
      return NextResponse.json(
        { error: "Email is not configured" },
        { status: 500 }
      );
    }

    const detailRows = [
      `<p><strong>Name:</strong> ${name}</p>`,
      `<p><strong>Email:</strong> ${email}</p>`,
      phone ? `<p><strong>Phone:</strong> ${phone}</p>` : "",
      designation ? `<p><strong>Designation:</strong> ${designation}</p>` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const attachments = [];
    if (resume instanceof File && resume.size > 0) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({
        filename: resume.name,
        content: buffer,
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: mailbox.user, pass: mailbox.pass },
    });

    // Internal notification, delivered straight into the mailbox itself.
    await transporter.sendMail({
      from: `"${mailbox.fromName}" <${mailbox.user}>`,
      to: mailbox.user,
      replyTo: email,
      subject,
      html: `
        <h2>${subject}</h2>
        ${detailRows}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      attachments,
    });

    // Auto-reply to whoever submitted the form. Failure here never blocks
    // the main submission - the team notification above already went through.
    try {
      await transporter.sendMail({
        from: `"${mailbox.fromName}" <${mailbox.user}>`,
        to: email,
        subject: mailbox.autoReplySubject,
        text: `${mailbox.autoReplyMessage}\n\nCall us: +91 77888 33307\nSindur Group, Naranpura, Ahmedabad, Gujarat`,
        html: autoReplyHtml(mailbox.autoReplySubject, mailbox.autoReplyMessage),
      });
    } catch (autoReplyError) {
      console.error("Auto-reply email error:", autoReplyError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
