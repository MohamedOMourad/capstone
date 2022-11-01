import { Product } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: { products: Product[], filteredProducts: Product[] } = {
    products: [],
    filteredProducts: []
}

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
            state.filteredProducts = action.payload
        },
        filterProducts: (state, action: PayloadAction<string>) => {
            switch (action.payload) {
                case 'All':
                    state.filteredProducts = state.products
                    break;
                case 'Vehicles':
                    const vehicles = state.products?.filter((product) => product.categoryId === 1);
                    state.filteredProducts = vehicles;
                    break;
                case 'Properties':
                    const Properties = state.products?.filter((product) => product.categoryId === 3)
                    state.filteredProducts = Properties;
                    break;
                case 'Mobile Phones':
                    const MobilePhones = state.products?.filter((product) => product.categoryId === 2)
                    state.filteredProducts = MobilePhones;
                    break;
                default:
                    const searchedProducts = state.products.filter((product) => product.brand?.toLowerCase().indexOf(action.payload.toLowerCase())! >= 0 ||
                        product.description?.toLowerCase().indexOf(action.payload.toLowerCase())! >= 0)
                    state.filteredProducts = searchedProducts;
            }
        }
    }
})
export const { setProducts, filterProducts } = productSlice.actions;
export default productSlice.reducer;