import Header from "./ui/header";
import CreateButton from "./ui/create-button";
import NotesTable from "./ui/notes-table";
import { Metadata } from 'next';
import Search from "./ui/search";
import Pagination from "./ui/pagination";
import { fetchNotes, fetchNotesPages, fetchFilteredNotes } from "./lib/data";
import NoNotesImage from "./ui/no-notes-image";
import Background from "./styles/background/background";

export const metadata = {
  title: "Home",
  description: "A simple site about taking notes"
}

export default async function Home({ searchParams = { query, page } }) {

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchNotesPages(query);
  const allNotes = await fetchNotes();
  const notes = await fetchFilteredNotes(query, currentPage);

  return (
    <main className="w-full" style={{ position: "absolute"}}>

      <Header />
      <CreateButton />
      <Search placeholder={"Search for note by details..."} />

      {allNotes.length > 0
        ? <NotesTable currentPage={currentPage} notes={notes} />
        : <NoNotesImage />}

      <div className="mt-5 flex w-full justify-center">
        {<Pagination totalPages={totalPages} />}
      </div>
      <Background />
    </main>
  );
}