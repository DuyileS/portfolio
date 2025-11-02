import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!process.env.SMTP_PASSWORD || !process.env.SENDER_EMAIL) {
      return NextResponse.json({ message: 'Email configuration missing.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Define the email content
    await transporter.sendMail({
      from: `"${name}" <${process.env.SENDER_EMAIL}>`, 
      replyTo: email, 
      to: "davidmomodu.psd@gmail.com", 
      subject: `New Message from Portfolio Site from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    
    return NextResponse.json({ message: 'Email sent successfully!' });
  } 
  catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An unexpected server error occurred.' }, { status: 500 });
  }
}