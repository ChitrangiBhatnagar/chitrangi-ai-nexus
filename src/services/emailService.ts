import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_portfolio'; // User will need to provide this
const EMAILJS_TEMPLATE_ID = 'template_contact'; // User will need to provide this  
const EMAILJS_PUBLIC_KEY = 'your_public_key_here'; // User will need to provide this

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const initEmailJS = () => {
  const publicKey = localStorage.getItem('emailjs_public_key') || EMAILJS_PUBLIC_KEY;
  emailjs.init(publicKey);
};

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Get keys from localStorage (user can input them)
    const serviceId = localStorage.getItem('emailjs_service_id') || EMAILJS_SERVICE_ID;
    const templateId = localStorage.getItem('emailjs_template_id') || EMAILJS_TEMPLATE_ID;
    const publicKey = localStorage.getItem('emailjs_public_key') || EMAILJS_PUBLIC_KEY;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Chitrangi Bhatnagar',
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    return response.status === 200;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};