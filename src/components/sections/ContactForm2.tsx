// This example uses `@web3forms/react` plugin and tailwindcss for css styling

'use client';

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFormStatus } from 'react-dom';
import useWeb3Forms from "@web3forms/react";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';


function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">
      {pending ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : 'Send Message'}
    </Button>
  );
}

export default function ContactForm2() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string>("");

  // Please update the Access Key in the .env
  const apiKey = process.env.PUBLIC_ACCESS_KEY || "2145389e-b0b1-4c92-b94c-dd601306ccb6";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Jays Solutions Website",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                type="checkbox"
                id=""
                className="hidden"
                style={{ display: "none" }}
                {...register("botcheck")}></input>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            type="text"
                            placeholder="Full Name"
                            autoComplete="false"
                            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                            errors.name
                                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                            }`}
                            {...register("name", {
                            required: "Full name is required",
                            maxLength: 80,
                            })}
                        />
                        {errors.name && (
                            <div className="mt-1 text-red-600">
                            <small>{typeof errors.name?.message === "string" ? errors.name.message : ""}</small>
                            </div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email_address">
                            Email Address
                        </Label>
                        <Input
                            id="email_address"
                            type="email"
                            placeholder="Email Address"
                            autoComplete="false"
                            className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                            errors.email
                                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                                : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                            }`}
                            {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Please enter a valid email",
                            },
                            })}
                        />
                        {errors.email && (
                            <div className="mt-1 text-red-600">
                            <small>{typeof errors.email?.message === "string" ? errors.email.message : ""}</small>
                            </div>
                        )}
                    </div>
                </div>
                {/* <div className="space-y-2">
                    <Label htmlFor="phone">
                        Phone (Optional)
                    </Label>
                    <Input id="phone"
                        type="tel"
                        placeholder="Phone Number"
                        autoComplete="false"
                        className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                        errors.phone
                            ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                            : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                        }`}
                        {...register("phone", {
                        pattern: {
                            value: /^(?:0|\(?\+44\)?\s?|0044\s?)1-9{11}$/,
                            message: "Please enter a valid phone number",
                        },
                        })}
                    />
                    {errors.phone && (
                        <div className="mt-1 text-red-600">
                        <small>{typeof errors.phone?.message === "string" ? errors.phone.message : ""}</small>
                        </div>
                    )}
                </div> */}

                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        id="message" 
                        placeholder="Tell us about your moving needs..."
                        className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
                        errors.message
                            ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                            : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                        }`}
                        {...register("message", {
                        required: "Message is required",
                        })}
                    />
                    {errors.message && (
                        <div className="mt-1 text-red-600">
                        {" "}
                        <small>{typeof errors.message?.message === "string" ? errors.message.message : ""}</small>
                        </div>
                    )}
                </div>

                <SubmitButton />
            </form>
            </div>

        {isSubmitSuccessful && isSuccess && (
            <div className="mt-3 text-sm text-center text-green-500">
            {message || "Success. Message sent successfully"}
            </div>
        )}
        {isSubmitSuccessful && !isSuccess && (
            <div className="mt-3 text-sm text-center text-red-500">
            {message || "Something went wrong. Please try later."}
            </div>
        )}
        </div>
    </section>
  );
}
