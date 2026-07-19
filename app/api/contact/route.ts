import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
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

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
