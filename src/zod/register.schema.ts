import { z } from "zod";
const messages = {
  required: "This field is required",
  email: "This field must be a valid email address",
  password_min: "This field must be at least 8 characters",
  password_match: "Passwords don't match",
  password_regex: "Passwords don't match",
  only_letters: "Only letters (a-z) are allowed",
  password_only_letters:
    "Use at least 8 character one uppercase letter one lowercase letter and one number in password",
};

export const registerSchema = z
  .object({
    email: z.string().min(1, { message: messages.required }).email({ message: messages.email }),
    firstName: z
      .string()
      .trim()
      .min(1, { message: messages.required })
      .regex(new RegExp(/^[a-z]+$/i), messages.only_letters),
    lastName: z
      .string()
      .trim()
      .min(1, { message: messages.required })
      .regex(new RegExp(/^[a-z]+$/i), messages.only_letters),
    password: z
      .string()
      .trim()
      .min(1, { message: messages.required })
      .min(8, { message: messages.password_min })
      .regex(
        new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/),
        messages.password_only_letters
      ),
    confirmPassword: z
      .string()
      .trim()
      .min(1, { message: messages.required })
      .min(8, { message: messages.password_min })
      .regex(
        new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/),
        messages.password_only_letters
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: messages.password_match,
  });
