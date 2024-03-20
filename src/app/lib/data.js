'use server'
import prisma from "./prisma";

export async function fetchNotes() {
    
    try {
        const notes = await prisma.note.findMany();

        return notes;
} catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch notes.');
}
}

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredNotes(query, currentPage) {
    const offset = ITEMS_PER_PAGE * (currentPage - 1);
    const dateObj = new Date(query);
    const dateToCheck = isNaN(dateObj.valueOf()) ? new Date() : dateObj;

    try {
            const notes = await prisma.note.findMany({
                where: {
                    OR: [
                        {title: {contains: query}},
                        {content: {contains: query}},
                        {date: {gte: dateToCheck}}
                    ]
                },
            orderBy: [
                {
                    date: "desc"
                }
            ],
            skip: offset,
            take: ITEMS_PER_PAGE
        });

        return notes;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch notes.');
    }
}

export async function fetchNotesPages(query) {
    try {
        const dateObj = new Date(query);
        const dateToCheck = isNaN(dateObj.valueOf()) ? new Date() : dateObj;

        const rows = await prisma.note.count({
            where: {
                OR: [
                    {title: {contains: query}},
                        {content: {contains: query}},
                        {date: {gte: dateToCheck}}
                ]
            }
        });

        const pages = Math.ceil(Number(rows)/ITEMS_PER_PAGE);

        return pages;
    } catch (error) {

        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of pages.');
      }
}

export async function fetchNoteById(noteId) {
    const note = await prisma.note.findUnique({
        where: {
            id: Number(noteId)
        }
    })

    return note;
}

export async function updateStarred(noteId,boolValue) {
    try {
        await prisma.note.update({
            where: {
                id: noteId
            },
            data: {
                starred: boolValue
            }
        });

} catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update starred state.');
}
}