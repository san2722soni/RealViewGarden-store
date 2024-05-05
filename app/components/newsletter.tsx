"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "react-hot-toast";
import ToolTip from "./ui/tooltip";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  if (!isMounted) {
    return null;
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/subscribers`, values);
        toast.success("Email saved. We will reach out to you soon!");
        router.refresh();
    } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong!");
    }
  }

  return (
    <div className="w-fit px-4">
      <h2 className="title-fonts lg:text-left font-medium text-white tracking-widest text-sm mb-3">
        NEWSLETTER
      </h2>
      <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-center md:justify-start">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid gap2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="w-full bg-transparent rounded border border-gray-300 text-white focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ToolTip content="Please fill whole form to submit!">
              <Button
                type="submit"
                className="w-full cursor-pointer bg-white text-[#202020] hover:bg-gray-400"
              >
                Subscribe
              </Button>
            </ToolTip>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Newsletter;
