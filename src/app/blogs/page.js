'use client'
import AddDialog from '@/components/custom/AddDialog';
import BlogItem from '@/components/custom/BlogItem'; // Updated import
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { useEffect, useState } from 'react';


function Page() {
  const [blogs, setBlogs] = useState([]);
      useEffect(() => {
        getBlogs();
      } , []);
    async function getBlogs() {
    
        const{data,error}=await supabase.from('blogs').select('*');
        if(error){
          alert("Something went wrong")
        }
        else{
         setBlogs(data);
        }
    
    
      }
       
  return (
    <div className="min-h-screen p-10">
      <AddDialog getBlogData={getBlogs}   />
      <div className='mt-10'>
      {/* // this is argument */}
      <div className="grid grid-cols-4 gap-x-12 gap-3">

      {blogs.map((blog,index) => (
        
        <BlogItem key={index} getBlogData={getBlogs} blogId={blog.id}
        title={blog.title}
        description={blog.description}
        />
      ))}
      </div>
      </div>
    </div>
  );
}

export default Page;
