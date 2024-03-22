'use client';

import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { convertDate, shortenContent,getNoteNumber } from "../../lib/utils";
import DeleteButton from "./delete-button";
import { EditButton } from "./edit-button";
import { useMemo, useState } from "react";
import { ArrowDown } from "./arrow-down";
import { ArrowUp } from "./arrow-up";
import { FavouritesStar } from "./favourites-star";

import localFont from 'next/font/local'

const noteFont = localFont({src: "../../styles/fonts/NotoSansMono.ttf", weight: "350"});

const useSortableData = (items) => {
    const [sortConfig, setSortConfig] = useState({field:null, direction:null});

    const sortedItems = useMemo(() => {
        let sortableItems = [...items];

        if(sortConfig.field === 'length') {
            sortableItems.sort((note1,note2) => {
                if(note1.content.length < note2.content.length) {
                    return (sortConfig.direction === 'ascending') ? -1 : 1;
                }
                if(note1.content.length > note2.content.length) {
                    return (sortConfig.direction === 'ascending') ? 1 : -1;
                }
                return 0;
            })
        }
        else if(sortConfig.field === 'date') {
            sortableItems.sort((note1,note2) => {
                const diff = new Date(note2.date) - new Date(note1.date);

                if(diff < 0) {
                    return (sortConfig.direction === 'ascending') ? 1 : -1;
                }
                if(diff > 0) {
                    return (sortConfig.direction === 'ascending') ? -1 : 1;
                }

                return 0;
            })
        }

        return sortableItems;
    }, [items,sortConfig]);

    const requestSort = (field) => {
        console.log("calling");

        let direction = 'ascending';
    
        if(field === sortConfig.field && sortConfig.direction === "ascending") {
            direction = 'descending';
        }

        setSortConfig({field,direction});
    }

    return [sortedItems, requestSort, sortConfig];
}

export default function NotesTable({notes,currentPage}) {    

    const [items,requestSort,sortConfig] = useSortableData(notes);


    return (
        <Table className={noteFont.className} variant="light" bordered size="sm"
        style={{border: "solid red 1px", width: "97%", marginLeft: "auto",marginRight: "auto", marginTop: "50px"}}>
            <thead style={{ textAlign: "center" }}>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th className="relative">
                        <span>Length</span>
                        {sortConfig.direction === "ascending"
                        ? <ArrowUp field="length" requestFunc={requestSort}/>
                        : <ArrowDown field="length" requestFunc={requestSort}/>}
                    </th>
                    <th className="relative">
                        <span>Created/Last Modified</span>
                        {sortConfig.direction === "ascending"
                        ? <ArrowUp field="date" requestFunc={requestSort}/>
                        : <ArrowDown field="date" requestFunc={requestSort}/>}
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items?.map((note, i) => {
                    const date = convertDate(note.date);
                    const content = shortenContent(note.content);
                    const noteNumber = getNoteNumber(i,currentPage);
                    
                    return (
                        <tr key={i} style={{ textAlign: "center", verticalAlign: "middle" }}>
                            <td> {noteNumber} </td>
                            <td > {note.title} </td>
                            <td> {content} </td>
                            <td> {note.content.length} </td>
                            <td> {date} </td>
                            <td>
                                <div className="flex flex-row items-center justify-evenly mt-1 mb-1">
                                    <FavouritesStar noteId={note.id} starredValue={note.starred}/>
                                    <EditButton noteId={note.id}/>
                                    <DeleteButton noteId={note.id}/>
                                </div>
                            </td>
                        </tr>)
                }
                )}

            </tbody>
        </Table>
    );
}