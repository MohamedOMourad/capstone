import { User } from "@prisma/client"
import axios from "axios"
import { SupabaseClient } from '@supabase/auth-helpers-react';

export const createUSer = async (user: User, supabaseClient: SupabaseClient<any, "public", any>) => {
    const supabaseAuthRes = await supabaseClient.auth.signUp({ email: user.email, password: user.password })
    console.log(supabaseAuthRes?.data?.user?.id)
    const res = await axios.post('/api/user', { ...user, id: supabaseAuthRes?.data?.user?.id })
    console.log(res)
}