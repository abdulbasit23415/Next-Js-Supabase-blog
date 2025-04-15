import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { supabase } from "@/lib/supabase";
import { toast } from "react-toastify";

function DeleteBlogDialog({ blogId, getBlogData}) {
  // Function to handle blog deletion
  async function handleDelete(values) {
    console.log("Deleting blog with ID:", blogId); // Debugging log
    const { error } = await supabase
          .from("blogs") // Ensure the table name is correct
          .delete({  title: values.Title, description: values.Description })
          .eq("id", blogId); // to identify the blog to update
          
    if (error) {
      toast.error("Error deleting blog:", error);
    } else {
      toast.success("Blog deleted successfully");
      getBlogData(); 
       // Refresh the blog list after deletion
    }
  }

  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this blog?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete your Blog.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default DeleteBlogDialog;
