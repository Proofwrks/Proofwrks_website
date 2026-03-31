import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Configure transporter
    // Uses environment variables — set these in .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email to cs@proofwrks.com
    await transporter.sendMail({
      from: `"Proofwrks Website" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: "cs@proofwrks.com",
      replyTo: email,
      subject: subject
        ? `[Website Contact] ${subject}`
        : `[Website Contact] Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #0a0a0a; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 100px;">Name</td>
              <td style="padding: 8px 0; color: #0a0a0a; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #0a0a0a;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Subject</td>
              <td style="padding: 8px 0; color: #0a0a0a;">${subject || "N/A"}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
            <p style="color: #666; margin: 0 0 8px; font-size: 13px;">Message</p>
            <p style="color: #0a0a0a; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #999;">
            Sent from proofwrks.com contact form
          </p>
        </div>
      `,
    });

    // Send confirmation email to the sender
    await transporter.sendMail({
      from: `"Proofwrks" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your message — Proofwrks",
      text: `Hi ${name},\n\nThank you for reaching out. We've received your message and will get back to you shortly.\n\nBest regards,\nProofwrks Team`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #0a0a0a;">Thank you for reaching out</h2>
          <p style="color: #666; line-height: 1.6;">
            Hi ${name},<br><br>
            We've received your message and will get back to you shortly.
          </p>
          <p style="color: #666; line-height: 1.6;">
            Best regards,<br>
            <strong style="color: #0a0a0a;">Proofwrks Team</strong>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again or email us directly at cs@proofwrks.com." },
      { status: 500 }
    );
  }
}
