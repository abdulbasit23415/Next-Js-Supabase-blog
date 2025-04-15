"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { supabase } from '@/lib/supabase'
import { toast } from 'react-toastify'

// Define the form schema
const formSchema = z.object({
  Title: z.string().min(1, "Title is required").max(50, "Title must be less than 50 characters"),
  Description: z.string().min(1, "Description is required").max(500, "Description must be less than 500 characters"),
})

function EditBlogForm({ blogId, getBlogData }) {
  // Define the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Title: "",
      Description: "",
    },
  });

  // Define a submit handler
  async function onSubmit(values) {
    console.log("Updating blog with ID:", blogId); // Use blogId here
    const { error } = await supabase
      .from("blogs") // Ensure the table name is correct
      .update({  title: values.Title, description: values.Description })
      .eq("id", blogId); // to identify the blog to update
      
      if (error) {
        toast.error("Update Error:", error);
      } else {
        toast.success("Blog Updated Successfully");
        getBlogData(); // Refresh the blog list after updating
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="Title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter the Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Enter the Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update</Button>
      </form>
    </Form>
  );
}

export default EditBlogForm;