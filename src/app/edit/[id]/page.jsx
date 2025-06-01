import { notFound } from 'next/navigation';
import EditForm from '@/app/ui/edit/edit-form';
import { fetchNoteById } from '@/app/lib/data';
import { EditPageHeader } from '@/app/ui/headers';
import BackButton from '@/app/ui/back-button';

export const metadata = {
    title: "Edit note",
    description: "A page about editing an existing note"
}

export default async function Page(props) {
  const params = await props.params;
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