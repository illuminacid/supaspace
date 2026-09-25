import { createClient } from '@supabase/supabase-js'

import { Database } from './database.types'

// Placeholder fallbacks (not unset): createClient validates eagerly at module
// load and would otherwise crash every page importing this when this
// secondary project isn't configured.
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_MISC_USE_URL || 'http://localhost:54321',
  process.env.NEXT_PUBLIC_MISC_USE_ANON_KEY || 'placeholder-anon-key'
)

export type SupabaseClient = typeof supabase

export default supabase
