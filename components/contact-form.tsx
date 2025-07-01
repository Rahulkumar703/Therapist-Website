"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  User,
  Phone,
  Mail,
  Clock2,
  SendHorizontal,
  CheckCircle,
  Home,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";

const formSchema = z
  .object({
    name: z
      .string()
      .min(1, { message: "Name is required" })
      .min(3, { message: "Name must be at least 3 characters" }),
    phone: z.string().min(1, { message: "Phone number is required" }),
    email: z
      .string()
      .email({ message: "Invalid email address" })
      .min(1, { message: "Email is required" }),
    message: z.string().min(1, { message: "Message is required" }).min(10, {
      message: "Message must be at least 10 characters",
    }),
    time: z.string().min(1, { message: "Please enter a time for call back" }),
    agreement: z.boolean(),
  })
  .refine((data) => data.agreement === true, {
    message: "You must agree before submitting.",
    path: ["agreement"],
  });

export default function ContactForm({ className }: { className?: string }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      time: "",
      agreement: false,
    },
  });

  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  function onReset() {
    form.reset();
    form.clearErrors();
  }

  return isSubmitted ? (
    <Card
      className={`w-full max-w-full md:max-w-md bg-sidebar/60 flex items-center text-center md:mb-0 mb-auto ${className}`}
    >
      <CheckCircle className="size-16 text-chart-1 mb-4" strokeWidth={2} />
      <CardContent>
        <CardTitle className="text-lg font-bold">
          Thank you{" "}
          <span className="text-primary">
            {form.getValues().name.split(" ")[0]}
          </span>{" "}
          for contacting us!
        </CardTitle>
        <CardDescription className="text-muted-foreground mt-2">
          We will get back to you shortly.
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          className="cursor-pointer"
          variant="secondary"
          onClick={() => {
            setIsSubmitted(false);
            onReset();
            router.push("/");
          }}
        >
          <Home className="size-4" strokeWidth={2} />
          Go to Home
        </Button>
      </CardFooter>
    </Card>
  ) : (
    <Card
      className={`w-full max-w-full lg:max-w-xl lg:ml-auto bg-sidebar/60 ${className}`}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          onReset={onReset}
          className="flex flex-col gap-6"
        >
          <CardContent className="flex flex-col gap-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 items-start">
                  <FormLabel>Name</FormLabel>
                  <div className="relative w-full">
                    <Input
                      placeholder="Name"
                      type="text"
                      autoComplete="name"
                      id="name"
                      className="ps-9"
                      {...field}
                    />
                    <div className="text-muted-foreground pointer-events-none absolute inset-y-0 flex items-center justify-center ps-3">
                      <User className="size-4" strokeWidth={2} />
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 items-start">
                  <FormLabel>Phone</FormLabel>
                  <div className="relative w-full">
                    <Input
                      placeholder="(555) 234-5678"
                      type="tel"
                      autoComplete="tel"
                      id="phone"
                      className="ps-9"
                      {...field}
                    />
                    <div className="text-muted-foreground pointer-events-none absolute inset-y-0 flex items-center justify-center ps-3">
                      <Phone className="size-4" strokeWidth={2} />
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 items-start">
                  <FormLabel>Email</FormLabel>
                  <div className="relative w-full">
                    <Input
                      placeholder="you@example.com"
                      type="email"
                      autoComplete="email"
                      id="email"
                      className="ps-9"
                      {...field}
                    />
                    <div className="text-muted-foreground pointer-events-none absolute inset-y-0 flex items-center justify-center ps-3">
                      <Mail className="size-4" strokeWidth={2} />
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message Field */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 items-start">
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    className="resize-none h-32"
                    rows={6}
                    id="message"
                    autoComplete="off"
                    placeholder="What brings you here?"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Time Field */}
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 items-start">
                  <FormLabel>Preferred Time</FormLabel>
                  <div className="relative w-full">
                    <Input
                      placeholder="e.g: Mornings, Afternoons, Evenings, Weekends"
                      type="text"
                      id="time"
                      autoComplete="off"
                      className="ps-9"
                      {...field}
                    />
                    <div className="text-muted-foreground pointer-events-none absolute inset-y-0 flex items-center justify-center ps-3">
                      <Clock2 className="size-4" strokeWidth={2} />
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Agreement Checkbox */}
            <FormField
              control={form.control}
              name="agreement"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2 items-start">
                  <div className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        id="agreement"
                        checked={field.value}
                        onCheckedChange={(checked) =>
                          field.onChange(checked === true)
                        }
                      />
                    </FormControl>
                    <FormLabel htmlFor="agreement">
                      I agree to be contacted.
                    </FormLabel>
                  </div>
                  <FormDescription className="text-xs">
                    By submitting this form, you agree to be contacted by our
                    team regarding your inquiry.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            {/* Submit Button */}
            <Button
              id="submit"
              name="submit"
              className="w-full flex items-center gap-2"
              type="submit"
              variant="default"
            >
              <SendHorizontal className="size-4" strokeWidth="2" />
              Submit
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
