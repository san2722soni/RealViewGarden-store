"use client";

import * as z from "zod";
import axios from "axios";
import * as React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../api/uploadthing/core";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "./ui/image-upload";
import ToolTip from "./ui/tooltip";

export function Feedback() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="w-full flex justify-center">
            <Button variant="default" size="lg">
              Write a review!
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Write a review!</DialogTitle>
            <DialogDescription>
              Share your experience with our service.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="w-full flex justify-center">
          <Button variant="default" size="lg" className="text-md">
            Write a review!
          </Button>
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Write a review!</DrawerTitle>
          <DrawerDescription>
            Share your experience with our service.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" setOpen={setOpen} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

interface ProfileFormProps {
  className?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UploadedFile {
  url: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ className, setOpen }) => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [file, setFile] = React.useState<UploadedFile[] | null>(null);

  const formSchema = z.object({
    name: z.string().min(3, {
      message: "Username must be at least 3 characters",
    }),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
      .email("This is not a valid email."),
    image: z.object({ url: z.string() }).array(),
    occupation: z.string().min(3, {
      message: "Tell your occupation (e.g., UI DEVELOPER)",
    }),
    description: z
      .string()
      .min(30, {
        message: "Description atleast should be 30 characters.",
      })
      .max(150, {
        message: "Too long description!",
      })
      .refine((value) => /\S/.test(value), {
        message: "Description must not be empty",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      image: [],
      occupation: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!file) return toast.error("Please fill form correctly.");

    if (file && file.length > 0) {
      const fileUrl = file[0].url;
      values.image.push({ url: fileUrl });
    }

    // return;
    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
      maxContentLength: 1024,
      maxBodyLength: 1024,
    };

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/reviews`,
        values,
        axiosConfig
      );
      setOpen(false);
      toast.success("Thanks for your feedback! Review added successfully");
      router.refresh();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className={cn("grid items-start gap-4", className)}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="grid gap2">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid gap2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormDescription>
                    This will be used to fetch your google account profile.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="occupation"
              render={({ field }) => (
                <FormItem className="grid gap2">
                  <FormLabel>Occupation</FormLabel>
                  <FormControl>
                    <Input placeholder="Occupation (eg: DESIGNER)" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display occupation.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Your experience will be shared with other users
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <UploadButton<OurFileRouter, "imageUploader">
                      endpoint="imageUploader"
                      {...field}
                      onClientUploadComplete={(res: any) => {
                        console.log("Files: ", res);
                        setFile(res);
                        toast.success("Image uploaded succesfully!");
                        setLoading(!loading);
                      }}
                      onUploadError={(error: Error) => {
                        alert(`ERROR! ${error.message}`);
                      }}
                    />
                  </FormControl>
                  <FormDescription>Upload your profile image</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ToolTip content="Please fill whole form to submit!">
              <Button type="submit" className="cursor-pointer" disabled={!loading}>
                Submit
              </Button>
            </ToolTip>
          </form>
        </Form>
      </div>
    </>
  );
};
