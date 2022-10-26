import { User } from "@prisma/client"
import axios from "axios"
import { SupabaseClient } from '@supabase/auth-helpers-react';
type Ad = {
    title?: string;
    brand?: string;
    description?: string;
    price?: string;
    location?: string;
    phoneNumber?: string;
    userId?: string | undefined;
    images?: string[],
    type?: string,
    area?: string,
    bedrooms?: string,
    bathrooms?: string,
    level?: string,
}
export const createUSer = async (user: User, supabaseClient: SupabaseClient<any, "public", any>) => {
    const supabaseAuthRes = await supabaseClient.auth.signUp({ email: user.email, password: user.password })
    const res = await axios.post('/api/user', { ...user, id: supabaseAuthRes?.data?.user?.id })
}

export const createVehicleAD = async (ad: Ad) => {

    const res = await axios.post('api/product/vehicle', { ...ad })
    const product = await res.data;
}
export const createPhoneAD = async (ad: Ad) => {

    const res = await axios.post('api/product/phone', { ...ad })
    const product = await res.data;
}
export const createApartmentAD = async (ad: Ad) => {
    const res = await axios.post('api/product/apartment', {
        ...ad, area: ad?.area?.toString(), bedrooms: ad?.bedrooms?.toString(),
        bathrooms: ad?.bathrooms?.toString(), level: ad?.level?.toString()
    })
    const product = await res.data;
}
export const createChat = async (chat: any) => {
    const res = await axios.post('http://localhost:3000/api/conversation/chat', { ...chat })
    const createdChat = await res.data;
    return createdChat;
}
export const createMessage = async (message: any) => {
    const res = await axios.post('http://localhost:3000/api/conversation/message', { ...message })
    const createdMessage = await res.data;
    return createdMessage.message
}