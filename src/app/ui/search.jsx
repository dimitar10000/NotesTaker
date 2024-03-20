'use client';
import { useSearchParams,usePathname,useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Inter } from 'next/font/google';

const inter = Inter({weight: "300", subsets: ["latin"]});

export default function Search({ placeholder }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
  
    const handleSearch = useDebouncedCallback((term) => {
      console.log(`Searching... ${term}`);
      const params = new URLSearchParams();
      params.set("page","1");
  
      if(term) {
        params.set("query",term);
      }
      else {
        params.delete("query");
      }
  
      console.log(params.toString());
  
      replace(`${pathname}?${params.toString()}`);
    },300);
  
    return (
      <div style={{float: "right", marginRight: "20px", marginTop: "20px"}}
      className={`relative flex flex-1 flex-shrink-0 ${inter.className}`}>
        <label style={{marginRight: "10px"}} htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          className="peer block w-64 rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <FaMagnifyingGlass className="absolute left-3 top-3"/>
      </div>
    );
  }