'use client'
import { MdOutlineStarOutline } from "react-icons/md";
import { MdStar } from "react-icons/md";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { updateStarred } from "../lib/data";

export function FavouritesStar({ noteId,starredValue}) {
    const [starred,setStarred] = useState(starredValue);

    useEffect(() => {
        console.log(`calling effect for note ${noteId}`);

        const updateFunc = async () => {

        if (starred) {
            await updateStarred(noteId, true);
        }
        else {
            await updateStarred(noteId, false);
        }
    }

    updateFunc();
    }, [starred]);

    if (starred) {
        return (
            <IconContext.Provider value={{ color: "yellow" }}>
                <MdStar className={'mt-0 h-9 w-9 hover:cursor-pointer'}
                    onClick={() => {setStarred(false);}} />
            </IconContext.Provider>
        );
    }

    return (
        <IconContext.Provider value={{ color: "yellow" }}>
            <MdOutlineStarOutline className={'mt-0 h-9 w-9 hover:cursor-pointer'}
                onClick={() => {setStarred(true);}} />
        </IconContext.Provider>
    )
}