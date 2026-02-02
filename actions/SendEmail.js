"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function validateString(str, minLength, maxLength) {
  return (
    str &&
    typeof str === "string" &&
    str.length >= minLength &&
    str.length <= maxLength
  );
}

function validateEmail(email) {
  return (
    email &&
    typeof email === "string" &&
    email.includes("@") &&
    email.includes(".")
  );
}

export async function sendEmail(formData) {
  const { firstName, email, service, message } = formData;

  // Validations
  if (!validateString(firstName, 1, 50)) {
    return { error: "First name should be between 1 and 50 characters" };
  }
  if (!validateEmail(email)) {
    return { error: "Invalid email address" };
  }
  if (!validateString(service, 1, 100)) {
    return { error: "Service should be between 1 and 100 characters" };
  }
  if (!validateString(message, 1, 5000)) {
    return { error: "Message should be between 1 and 5000 characters" };
  }

  const htmlContent = `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${firstName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail = process.env.RESEND_TO_EMAIL;

  if (!fromEmail) {
    return { error: "RESEND_FROM_EMAIL is not set" };
  }

  if (!toEmail) {
    return { error: "RESEND_TO_EMAIL is not set" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Contact: ${service}`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      return {
        success: false,
        error: "Failed to send email",
        details: error.message,
      };
    }

    return { success: true, message: "Email sent successfully", data };
  } catch (error) {
    return {
      success: false,
      error: "Failed to send email",
      details: error.message,
    };
  }
}
