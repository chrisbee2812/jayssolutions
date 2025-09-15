'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        phone?: string[];
        message?: string[];
    };
    success: boolean;
};


export async function handleContactForm(
    prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const validatedFields = contactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            message: 'Failed to submit form. Please check the errors below.',
            errors: validatedFields.error.flatten().fieldErrors,
            success: false,
        };
    }

    const { name, email, phone, message } = validatedFields.data;
    
    // Here you would typically send an email.
    // For this example, we'll just log to the console.
    // The recipient email could be pulled from process.env.CONTACT_EMAIL
    console.log('New contact form submission:');
    console.log({ name, email, phone, message });

    return {
        message: 'Thank you for your message! We will get back to you soon.',
        success: true,
        errors: {},
    };
}
