import { notFound } from 'next/navigation';
import React from 'react';
import { Metadata } from "next";
import EditForm from '@/app/ui/edit/edit-form';
import { fetchNoteById } from '@/app/lib/data';
import { EditPageHeader } from '@/app/ui/headers';
import BackButton from '@/app/ui/back-button';

export const metadata = {
    title: "Edit note",
    description: "A page about editing an existing note"
}

export default async function Page({params}) {
    console.log(params);

    const id = params.id;
    const note = await fetchNoteById(id);

    if (!note) {
      notFound();
    }

  return (
    <main>
        <BackButton/>
        <EditPageHeader id={id}/>
        <EditForm note={note}/>
    </main>
  );
}