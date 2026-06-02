import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  current_streak: number;
  courses_completed: number;
  hours_learned: number;
  github: string | null;
  linkedin: string | null;
}

export async function getUserData() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.from("users").select("*").returns<UserData[]>();
  if (error) {
    console.error("Supabase error fetching user profile:", error);
    throw new Error("Failed to fetch data: " + error.message);
  }
  return data;
}
