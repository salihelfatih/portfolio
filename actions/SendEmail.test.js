import { sendEmail } from "./SendEmail";

// Mock Resend
jest.mock("resend", () => ({
  Resend: jest.fn().mockImplementation(() => ({
    emails: {
      send: jest.fn().mockResolvedValue({
        data: { id: "test-email-id" },
        error: null,
      }),
    },
  })),
}));

describe("sendEmail", () => {
  const validFormData = {
    firstName: "John",
    email: "john@example.com",
    service: "Web Development",
    message: "Hello, I need a website.",
  };

  beforeEach(() => {
    process.env.RESEND_API_KEY = "test-api-key";
    process.env.RESEND_FROM_EMAIL = "noreply@example.com";
    process.env.RESEND_TO_EMAIL = "contact@example.com";
  });

  it("should send email successfully with valid data", async () => {
    const result = await sendEmail(validFormData);
    expect(result.success).toBe(true);
    expect(result.message).toBe("Email sent successfully");
  });

  it("should reject invalid first name", async () => {
    const result = await sendEmail({ ...validFormData, firstName: "" });
    expect(result.error).toContain("First name");
  });

  it("should reject invalid email", async () => {
    const result = await sendEmail({ ...validFormData, email: "invalid" });
    expect(result.error).toContain("Invalid email");
  });

  it("should reject invalid service", async () => {
    const result = await sendEmail({ ...validFormData, service: "" });
    expect(result.error).toContain("Service");
  });

  it("should reject invalid message", async () => {
    const result = await sendEmail({ ...validFormData, message: "" });
    expect(result.error).toContain("Message");
  });
});
