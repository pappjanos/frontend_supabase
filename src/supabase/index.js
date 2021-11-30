import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://ihbroqbyekfpztjcapac.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNTc5Njg0MywiZXhwIjoxOTUxMzcyODQzfQ.QHU1z_zPQIOhUgvLyVzUhZnnhoG4V_9qqWyMxoWsVEo"
);

export default supabase;
