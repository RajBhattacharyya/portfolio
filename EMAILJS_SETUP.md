# EmailJS Setup for Contact Form

This contact form uses EmailJS to send emails directly from the client-side without needing a backend server.

## Setup Instructions

1. **Create an EmailJS Account**

   - Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
   - Sign up for a free account

2. **Create an Email Service**

   - In the EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions to connect your email account

3. **Create an Email Template**

   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - Use this template structure:

   ```
   Subject: {{subject}} - Portfolio Contact Form

   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}

   Message:
   {{message}}

   ---
   This message was sent through your portfolio contact form.
   ```

4. **Get Your Credentials**

   - Service ID: Found in your Email Services section
   - Template ID: Found in your Email Templates section
   - Public Key: Found in Account > API Keys

5. **Configure Environment Variables**

   - Copy `.env.example` to `.env`
   - Replace the placeholder values with your actual EmailJS credentials:

   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```

6. **Test the Contact Form**
   - Start your development server
   - Fill out and submit the contact form
   - Check your email for the message

## Template Variables

The following variables are available in your EmailJS template:

- `{{from_name}}` - The sender's name
- `{{from_email}}` - The sender's email address
- `{{subject}}` - The subject line
- `{{message}}` - The message content
- `{{to_email}}` - Your email address (hardcoded as rajbhattacharyya18110@gmail.com)

## Troubleshooting

- Make sure your email service is properly connected and verified
- Check that your template variables match the ones being sent
- Verify your public key is correct (not the private key)
- Check the browser console for any error messages
- Test with EmailJS's test feature in their dashboard first
