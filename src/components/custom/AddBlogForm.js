"use client"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { get, useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { toast } from 'react-toastify';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { supabase } from '@/lib/supabase'

const formSchema = z.object({
  Title: z.string().min(1).max(50),
  Description: z.string().min(1).max(500),
})

function AddBlogForm({getBlogData}) {
      // 1. Define your form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Title: "",
      Description: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { error } = await supabase
    .from('blogs')
    .insert({
      title: values.Title,
      description: values.Description,
    });
    
    // window.location.reload();
    // refreshBlogs();
    if(error){
      toast.error("something went wrong")
    }
    else{
      getBlogData()
      toast.success('Blog Added Successfully')
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
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  
)
}

export default AddBlogForm
