'use server';

import { z } from 'zod';

// Define validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  service: z.string().min(1, { message: "Please select a service." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;

export async function submitContactForm(data: ContactFormValues) {
  // Validate form data
  const result = ContactFormSchema.safeParse(data);
  
  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  try {
    // In a real implementation, we would:
    // 1. Send the data to an email service (e.g., NodeMailer, SendGrid)
    // 2. Log the inquiry to a database
    
    // For now, we'll just simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return { 
      success: true, 
      message: "Your inquiry has been submitted successfully. We'll get back to you soon!"
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { 
      success: false, 
      message: "There was an error submitting your inquiry. Please try again or contact us directly."
    };
  }
}