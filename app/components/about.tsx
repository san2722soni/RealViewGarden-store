"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { Headphones, HelpingHand, Sprout, Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
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
import ScrollTrigger from "react-scroll-trigger";

const About = () => {
  const router = useRouter();
  const [counterOn, setCounterOn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

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

  useEffect(()=>{
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/subscribers`,
        values
      );
      toast.success("Email saved. We will reach out to you soon!");
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <>
      <section className="text-gray-400 body-font">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-xl lg:w-full md:w-1/2 w-[100%] mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/about-bg-2.jpg"
              width={1000}
              height={1000}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#202020]">
              ABOUT US
            </h1>
            <p className="mb-8 leading-relaxed text-[#202020] tracking-wider">
              {`Ranchi's top spot for premium indoor and outdoor plants. Elevate your space with our curated selection, expertly nurtured for any environment. Choose from our rental plant options for a greener, healthier atmosphere. With our innovative Greenify plans, enjoy unbeatable prices and doorstep delivery. Join us in our mission to Greenify India and nurture nature.`}
            </p>
            <div className="flex w-fit md:justify-start justify-center items-end">
              <div className="relative mr-4 w-full ">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex w-full justify-between items-end"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="hidden lg:visible md:visible">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Email"
                              {...field}
                              className="w-full bg-tranparent rounded border focus:ring-[#202020] text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <ToolTip content="Please fill field to submit!">
                      <Button
                        type="submit"
                        className="w-full ml-5 cursor-pointer bg-[#202020] text-white hover:bg-black"
                      >
                        Submit
                      </Button>
                    </ToolTip>
                  </form>
                </Form>
              </div>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Stay in the loop! Connect with us for the latest updates.
            </p>
          </div>
        </div>
        <div
          id="join-community"
          className="container px-5 pb-10 mx-auto text-[#202020]"
        >
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
              Join Our Community
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base tracking-wide">
              Discover exclusive offers and monthly coupons! Follow us for
              expert tips and innovative gardening ideas on social media.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-[1px] border-gray-700 px-4 py-6 rounded-lg">
                <Sprout className="text-green-500 m-auto" size={64} />
                <h2 className="title-font font-medium text-3xl my-2">
                    {/* @ts-ignore */}
                  <ScrollTrigger onEnter={() => setCounterOn(true)} >
                    {counterOn && <CountUp start={0} end={2700} duration={2} delay={0} />}+
                  </ScrollTrigger>
                </h2>
                <p className="leading-relaxed">Planted Plants</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-[1px] border-gray-700 px-4 py-6 rounded-lg">
                <Users className="text-green-500 m-auto" size={64} />
                <h2 className="title-font font-medium text-3xl my-2">
                    {/* @ts-ignore */}
                    <ScrollTrigger onEnter={() => setCounterOn(true)} >
                    {counterOn && <CountUp start={0} end={1300} duration={2} delay={0} />}+
                  </ScrollTrigger>
                </h2>
                <p className="leading-relaxed">Engaged clients</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-[1px] border-gray-700 px-4 py-6 rounded-lg">
                <Headphones className="text-green-500 m-auto" size={64} />
                <h2 className="title-font font-medium text-3xl my-2">
                    {/* @ts-ignore */}
                    <ScrollTrigger onEnter={() => setCounterOn(true)} >
                    {counterOn && <CountUp start={0} end={74} duration={2} delay={0} />}+
                  </ScrollTrigger>
                </h2>
                <p className="leading-relaxed">Helped people</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-[1px] border-gray-700 px-4 py-6 rounded-lg">
                <HelpingHand className="text-green-500 m-auto" size={64} />
                <h2 className="title-font font-medium text-3xl my-2">
                    {/* @ts-ignore */}
                    <ScrollTrigger onEnter={() => setCounterOn(true)} >
                    {counterOn && <CountUp start={0} end={46} duration={2} delay={0} />}+
                  </ScrollTrigger>
                </h2>
                <p className="leading-relaxed">Staisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .animate-count {
          animation: count-up 1.5s ease-in-out;
        }

        @keyframes count-up {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default About;
