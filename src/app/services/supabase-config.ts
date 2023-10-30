
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jyxfrscpqvisubsoflyl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5eGZyc2NwcXZpc3Vic29mbHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxMDMyNjMsImV4cCI6MjAxMzY3OTI2M30.QzkoVqITCKW7meTrpZV3N1afr_L8EfmEWzEb-joBIuk';

export const supabase = createClient(supabaseUrl, supabaseKey);