import { User } from "@prisma/client"
import axios from "axios"
import { SupabaseClient } from '@supabase/auth-helpers-react';

export const createUSer = async (user: User, supabaseClient: SupabaseClient<any, "public", any>) => {
    const supabaseAuthRes = await supabaseClient.auth.signUp({ email: user.email, password: user.password })
    console.log(supabaseAuthRes?.data?.user?.id)
    const res = await axios.post('/api/user', { ...user, id: supabaseAuthRes?.data?.user?.id })
    console.log(res)
}
type Ad = {
    title: string;
    brand: string;
    description: string;
    price: string;
    location: string;
    phoneNumber: string;
    userId: string | undefined;
    images: string[]
}
// title, brand, description, images, price, location, userId
export const createAD = async (prod: Ad) => {

    const res = await axios.post('api/product/vehicle', { ...prod })
    const product = await res.data;
    console.log(product)
}