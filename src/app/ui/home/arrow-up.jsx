import { MdArrowDropUp } from "react-icons/md";

export function ArrowUp({field,requestFunc}) {
    return (
        <MdArrowDropUp className={`absolute h-7 w-7 right-1 top-0 hover:cursor-pointer`}
        onClick={() => { requestFunc(field) }}/>
    )
}