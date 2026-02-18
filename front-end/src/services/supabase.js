
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://duolnnzshiogctkfstnv.supabase.co'
const supabaseKey = "sb_publishable_u52WpCiwRJRgWQWKGSgjpw_YlLSNhrg"
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase