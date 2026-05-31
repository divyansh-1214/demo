import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://xjoxpxqrlunmjmtmqxtb.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_5cxZ6RSkEZzi-iTs-BpQhw_2PaPrvrE";

export function createSupabaseServerClient() {
  return createClient(supabaseUrl, supabaseKey);
}