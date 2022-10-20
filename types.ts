import { FormikErrors } from "formik";

export interface Formik {
    values: {
        title: string;
        brand: string;
        description: string;
        price: string;
        imgUrl: string[];
        location: string;
        phoneNumber: string;
        categoryId: number;
        userId: string;
    };
    initialErrors: FormikErrors<unknown>;
    submitCount: number;
}