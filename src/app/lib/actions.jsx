'use server';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from "./prisma";



const FormSchema = z.object({
    id: z.coerce.number(),
    title: z.string(),
    content: z.string(),
    date: z.string()
})

const CreateNote = FormSchema.omit({date: true, id: true});

export async function createNote(prevState, formData) {

    const validatedFields = CreateNote.safeParse({
        title: formData.get("noteTitle"),
        content: formData.get("noteContent"),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'An error occurred with the note fields.',
        };
    }

    const { title, content } = validatedFields.data;

    try {

        await prisma.note.create({
            data: {
                title: title,
                content: content
            }
        });
    }
    catch (error) {
        console.log(error);

        return {
            message: "Failed to create note in DB"
        }
    }

    revalidatePath('/');
    redirect('/');
}

const UpdateNote = FormSchema.omit({date: true,id: true});

export async function updateNote(noteId,prevState, formData) {
    const validatedFields = UpdateNote.safeParse({
        title: formData.get("noteTitle"),
        content: formData.get("noteContent")
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'An error occurred with the note fields.',
        };
    }

    const { title, content } = validatedFields.data;
    const date = new Date();

    try {

        await prisma.note.update({
            where: {
                id: noteId
            },
            data: {
                title: title,
                content: content,
                date: date
            }
        });
    }
    catch (error) {
        console.log(error);

        return {
            message: "Failed to update note in DB"
        }
    }

    revalidatePath('/');
    redirect('/');
}

export async function deleteNote(noteId) {

    try {

        await prisma.note.delete({
            where: {
                id: noteId
            }
        });
    }
    catch (error) {
        console.log(error);

        return {
            message: "Failed to delete note in DB"
        }
    }

    revalidatePath('/');
    redirect('/');
}