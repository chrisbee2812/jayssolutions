'use client';

import { useFormStatus } from 'react-dom';
import { useEffect, useRef, useActionState } from 'react';
import { handleContactForm, type ContactFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

const initialState: ContactFormState = {
  message: '',
  success: false,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">
      {pending ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : 'Send Message'}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(handleContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Message Sent!",
          description: state.message,
        });
        formRef.current?.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Oops!",
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="w-full py-8 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Get in Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions or ready to book your move? Drop us a line and we'll get back to you shortly.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-lg space-y-4 pt-12">
          <form ref={formRef} action={formAction} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required aria-describedby="name-error" />
                    {state.errors?.name && <p id="name-error" className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" placeholder="john@example.com" type="email" required aria-describedby="email-error" />
                    {state.errors?.email && <p id="email-error" className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
                </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input id="phone" name="phone" placeholder="(123) 456-7890" type="tel" aria-describedby="phone-error" />
              {state.errors?.phone && <p id="phone-error" className="text-sm font-medium text-destructive">{state.errors.phone[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Tell us about your moving needs..." required className="min-h-[120px]" aria-describedby="message-error" />
              {state.errors?.message && <p id="message-error" className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
    </section>
  );
}
