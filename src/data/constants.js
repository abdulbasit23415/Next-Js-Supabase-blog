import { supabase } from "@/lib/supabase";

export async function getBlogData() {
    
    const{data,error}=await supabase.from('blogs').select('*');
    if(error){
      alert("Something went wrong")
    }
    else{
      console.log(`data: ${JSON.stringify(data)}`)
      return data;
      
    }


  }