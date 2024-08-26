import { createClient } from "@supabase/supabase-js"

const URL = "https://slmcisgxfqzbuwiyfkxc.supabase.co"

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbWNpc2d4ZnF6YnV3aXlma3hjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1NjAxOTgsImV4cCI6MjA0MDEzNjE5OH0.WlPndxBOGEWLdmVafzJXQBJjtFAwISc5nQxaD8vYgyw"

export const supabase = createClient(URL, API_KEY)
