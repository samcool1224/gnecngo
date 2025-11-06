import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://klfuucvlkevjofkyloym.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsZnV1Y3Zsa2V2am9ma3lsb3ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3ODgyNzcsImV4cCI6MjA3MDM2NDI3N30.WrAmIPXpCi0YOcDjdPVxqbZbq71S5XjTiVNcm-YHD2w'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
