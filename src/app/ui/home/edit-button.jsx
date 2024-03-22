import Link from 'next/link';
import { MdModeEdit } from "react-icons/md";

export function EditButton({noteId}) {
    return (
        <Link href={`/edit/${noteId}`}
        className={'btn btn-primary btn-sm w-16 h-8'}>
            <div className='flex flex-row flex-nowrap justify-between items-center'>
                <span> <MdModeEdit/> </span>
                <span> Edit</span>
            </div>
        </Link>
    )
}