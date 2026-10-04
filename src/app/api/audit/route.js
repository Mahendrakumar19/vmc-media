import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Validate environment variables
const requiredEnvVars = ['EMAIL_HOST', 'EMAIL_PORT', 'EMAIL_USER', 'EMAIL_PASS'];
const missingEnvVars = requiredEnvVars.filter(
  (envVar) => !process.env[envVar]
);

if (missingEnvVars.length > 0) {
  console.error(
    `Missing environment variables: ${missingEnvVars.join(', ')}`
  );
}

// Create transporter using GoDaddy SMTP
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtpout.secureserver.net',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // TLS (set to false for port 587)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 5000,
  socketTimeout: 5000,
});

// Verify transporter connection (optional, for debugging)
// transporter.verify((error, success) => {
//   if (error) {
//     console.error('SMTP Connection Error:', error);
//   } else {
//     console.log('SMTP Connection Ready');
//   }
// });

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { fullName, email, phone, service, company, industry, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 20px; border-radius: 8px;">
        <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #333; border-bottom: 3px solid #0066cc; padding-bottom: 10px; margin-bottom: 20px;">
            🎯 New Free Audit Request Received
          </h2>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #0066cc;">Full Name:</strong>
            <p style="margin: 5px 0 15px 0; color: #555;">${escapeHtml(fullName)}</p>
          </div>

          <div style="margin-bottom: 15px;">
            <strong style="color: #0066cc;">Email Address:</strong>
            <p style="margin: 5px 0 15px 0; color: #555;">
              <a href="mailto:${escapeHtml(email)}" style="color: #0066cc; text-decoration: none;">${escapeHtml(email)}</a>
            </p>
          </div>

          ${
            phone
              ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #0066cc;">Phone Number:</strong>
            <p style="margin: 5px 0 15px 0; color: #555;">
              <a href="tel:${escapeHtml(phone)}" style="color: #0066cc; text-decoration: none;">${escapeHtml(phone)}</a>
            </p>
          </div>
          `
              : ''
          }

          ${
            company
              ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #0066cc;">Company:</strong>
            <p style="margin: 5px 0 15px 0; color: #555;">${escapeHtml(company)}</p>
          </div>
          `
              : ''
          }

          ${
            industry
              ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #0066cc;">Industry:</strong>
            <p style="margin: 5px 0 15px 0; color: #555;">${escapeHtml(industry)}</p>
          </div>
          `
              : ''
          }

          ${
            service
              ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #0066cc;">Interested In:</strong>
            <p style="margin: 5px 0 15px 0; color: #555;">${escapeHtml(service)}</p>
          </div>
          `
              : ''
          }

          <div style="margin-bottom: 15px;">
            <strong style="color: #0066cc;">Project Details:</strong>
            <p style="margin: 5px 0 15px 0; color: #555; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">

          <div style="background: #f0f7ff; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <p style="margin: 0; color: #666; font-size: 12px;">
              <strong>📧 Submission Details:</strong><br>
              Submitted on: ${new Date().toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
              })} IST<br>
              Reply-To: ${escapeHtml(email)}
            </p>
          </div>

          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd; text-align: center;">
            <p style="color: #999; font-size: 12px; margin: 0;">
              This is an automated message from your website contact form. Please reply directly to the client's email address.
            </p>
          </div>
        </div>
      </div>
    `;

    // Plain text version
    const textContent = `
New Free Audit Request Received

Full Name: ${fullName}
Email Address: ${email}
${phone ? `Phone Number: ${phone}` : ''}
${service ? `Interested In: ${service}` : ''}

Project Details:
${message}

---
Submitted on: ${new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })} IST

Reply-To: ${email}
    `;

    // Send email
    const mailOptions = {
      from: `VMC Media Website <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Free Audit Request from ${fullName}`,
      text: textContent,
      html: htmlContent,
      headers: {
        'X-Priority': '1',
        'Importance': 'high',
      },
    };

    const result = await transporter.sendMail(mailOptions);

    console.log('Email sent successfully:', result.messageId);

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        messageId: result.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);

    // Don't expose sensitive error details to client
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send email. Please try again later.',
        // Uncomment for development debugging only:
        // details: error.message
      },
      { status: 500 }
    );
  }
}

// Helper function to escape HTML characters
function escapeHtml(text) {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// OPTIONS handler for CORS preflight (if needed)
export async function OPTIONS(request) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_APP_URL || '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
