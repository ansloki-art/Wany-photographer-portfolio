import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://buktbkqydhrjjbtpvkeh.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_RVqPAuOea6PuMPfnJcMQsw_dDUCNs7M";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);