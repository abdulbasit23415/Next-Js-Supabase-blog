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
import AddBlogForm from './AddBlogForm'
  
function AddDialog({getBlogData}) {
  return (
    <Dialog>
  <DialogTrigger asChild>
    <Button> Add Blog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Blog</DialogTitle>
      <DialogDescription> </DialogDescription>
    </DialogHeader>
    <AddBlogForm getBlogData={getBlogData} />
  </DialogContent>
</Dialog>

  )
}

export default AddDialog
