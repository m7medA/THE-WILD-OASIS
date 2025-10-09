import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vtdyhzqnfrunwhxvlfjb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0ZHloenFuZnJ1bndoeHZsZmpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNjk3MTAsImV4cCI6MjA2OTY0NTcxMH0.T8pTODEDtIq496S2ORZBlAUvuDkN4m3EliRoVMXRP0U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
