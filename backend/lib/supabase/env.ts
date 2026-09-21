
export class SupabaseConfigError extends Error {}


const publicSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const publicSupabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new SupabaseConfigError(
      `Missing ${name}. Copy .env.example to .env.local and fill in your Supabase ` +
        `project's values (Supabase Dashboard → Project Settings → API). See SETUP.md.`,
    )
  }
  return value
}

export function supabaseUrl() {
  return required('NEXT_PUBLIC_SUPABASE_URL', publicSupabaseUrl)
}

export function supabaseAnonKey() {
  return required('NEXT_PUBLIC_SUPABASE_ANON_KEY', publicSupabaseAnonKey)
}

/** True when both public env vars are present — used to render a helpful setup screen instead of crashing. */
export function isSupabaseConfigured() {
  return Boolean(publicSupabaseUrl && publicSupabaseAnonKey)
}
