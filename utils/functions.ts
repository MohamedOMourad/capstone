import { Product } from "@prisma/client";

export const switchFunction = (key: string, products: Product[], setFilteredProduct: Function) => {
    switch (key) {
        case 'Vehicles':
            const vehicles = products?.filter((product) => product.categoryId === 1)
            setFilteredProduct(vehicles);
            break;
        case 'Properties':
            const Properties = products?.filter((product) => product.categoryId === 3)
            setFilteredProduct(Properties);
            break;
        case 'Mobile Phones':
            const MobilePhones = products?.filter((product) => product.categoryId === 2)
            setFilteredProduct(MobilePhones);
            break;
        default:
            setFilteredProduct(products);
    }
}