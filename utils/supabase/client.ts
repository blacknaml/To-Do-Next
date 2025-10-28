import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
    return createBrowserClient(
        process.env.ENV_PUBLIC_SUPABASE_URL!,
        process.env.ENV_PUBLIC_SUPABASE_ANON_KEY!,
    );
}