'use client'
import Link from 'next/link';
import { FaArrowLeftLong } from "react-icons/fa6";
import { IconContext } from 'react-icons';
import localFont from 'next/font/local'

const backFont = localFont({src: "../styles/fonts/Kalam-Bold.ttf"});

export default function BackButton() {
    return (
        <div className='absolute top-1 left-3'>
            <div className='flex flex-row items-center'>
                <IconContext.Provider value={{ color: "red" }}>
                    <FaArrowLeftLong className='h-14 w-14' />
                </IconContext.Provider>
                <Link href={`/`} className={`self-end text-4xl ml-3 text-red-500 ${backFont.className}`}
                    style={{ textDecoration: "none" }}>
                    BACK
                </Link>
            </div>
        </div>
    )
}