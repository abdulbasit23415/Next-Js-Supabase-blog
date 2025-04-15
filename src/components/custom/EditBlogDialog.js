import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from '../ui/button'
import EditBlogForm from './EditBlogForm' // Updated to match PascalCase file name
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import DeleteBlogDialog from './DeleteBlogDialog';

function EditBlogDialog({ blogId, getBlogData }) {
  
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
           <Button variant="outline">Edit</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Blog</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <EditBlogForm blogId={blogId} getBlogData={getBlogData} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EditBlogDialog;