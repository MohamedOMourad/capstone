import { User } from "@prisma/client";

export const userValidation = async (user: User) => {
    const error: { error: string }[] = [];
    const { id, email, firstName, lastName } = user;
    if (!id) error.push({ error: 'Id Is Required!' })
    if (!email) error.push({ error: 'Email Is Required!' })
    if (!firstName) error.push({ error: 'First Name Is Required!' })
    if (!lastName) error.push({ error: 'Last Name Is Required!' })
    return error;
}