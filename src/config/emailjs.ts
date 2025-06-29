// EmailJS Configuration
// You need to replace these with your actual EmailJS credentials
// Get them from: https://dashboard.emailjs.com/

export const emailJSConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};

// Template parameters that will be sent to EmailJS
export interface EmailTemplateParams extends Record<string, unknown> {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_email: string;
}
