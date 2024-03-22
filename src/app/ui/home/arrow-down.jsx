import { MdArrowDropDown } from "react-icons/md";

export function ArrowDown({field,requestFunc}) {
    return (
        <MdArrowDropDown className={`absolute h-7 w-7 right-1 top-0 hover:cursor-pointer`}
        onClick={() => { requestFunc(field) }}/>
    )
}