import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function getCoursesData() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.from("courses").select("*");


  if (error) {
    console.error("Supabase error fetching courses:", error);
    throw new Error("Failed to fetch data: " + error.message);
  }
  return data;
}
