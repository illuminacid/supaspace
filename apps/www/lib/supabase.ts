import { createClient } from '@supabase/supabase-js'

import { Database } from './database.types'

// Placeholder values (not '') when unset: createClient validates the URL/key
// eagerly at module load and throws on an empty string, which would crash
// every page that imports this — including ones with no Supabase dependency
// — on a fork not connected to a Supabase project. Real calls just fail at
// request time instead, same as any other network error.
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:54321',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key',
  {
    realtime: {
      params: {
        eventsPerSecond: 1000,
      },
    },
  }
)

export type SupabaseClient = typeof supabase

export default supabase
