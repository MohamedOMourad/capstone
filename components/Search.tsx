import { useAppDispatch } from "../redux/app/hooks";
import { filterProducts } from "../redux/product/product";

export const Search = () => {
    const dispatch = useAppDispatch();
    return (
        <div className=" flex justify-center items-center px-1 py-1 relative">
            <input
                onKeyUp={(e: any) => { dispatch(filterProducts(e.target.value)) }}
                className="text-sm leading-none text-gray-600 px-4 py-3 w-full border rounded border-gray-300  outline-none"
                type="text"
                placeholder="Search"
            />
            <svg
                className="absolute right-3 z-10 cursor-pointer"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                    stroke="#4B5563"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M21 21L15 15"
                    stroke="#4B5563"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );
}

export default Search;