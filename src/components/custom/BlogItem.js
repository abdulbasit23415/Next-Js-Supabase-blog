'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import EditBlogDialog from "./EditBlogDialog"
import DeleteBlogDialog from "./DeleteBlogDialog"
import Data from "@/app/components/Data";
import React, { useEffect, useState } from 'react';

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
function blogitem({title,description,blogId,getBlogData}) { // this is param
  
  
  return (
   

      
         
      <Card className="w-[300px] h-[280px]">
        <CardHeader>
          <CardTitle className="mb-4">{title}</CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          
        </CardContent>
        <CardFooter className="flex space-x-10">
          <EditBlogDialog blogId={blogId} getBlogData={getBlogData}>
          <Button variant="outline">Edit</Button>
          </EditBlogDialog>
          <DeleteBlogDialog blogId={blogId} getBlogData={getBlogData}>
          <Button variant="destructive">Delete</Button>
          </DeleteBlogDialog>
        </CardFooter>
      </Card>

    
   

  );
}

export default blogitem;
