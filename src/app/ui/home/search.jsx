'use client';
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Inter } from 'next/font/google';

const inter = Inter({ weight: "300", subsets: ["latin"] });

export default function Search({ placeholder }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams();
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    }
    else {
      params.delete("query");
    }

    console.log(params.toString());

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div>
      <label style={{ marginRight: "10px" }} htmlFor="search" className="sr-only">
        Search
      </label>
      <div className={`d-flex flex-row align-items-baseline mr-12 ${inter.className}`}>
        <div className="relative">
          <input
            className="relative peer block w-80 h-12 rounded-md border border-gray-200 py-[9px] pl-10 text-md outline-2 placeholder:text-gray-500"
            placeholder={placeholder}
            onChange={(e) => {
              handleSearch(e.target.value)
            }}
            defaultValue={searchParams.get("query")?.toString()}
          />
          <FaMagnifyingGlass className="h-5 w-5 absolute top-3 left-3" />
        </div>
      </div>
    </div>
  );
}