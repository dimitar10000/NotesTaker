import {HomepageHeader} from "./ui/headers";
import CreateButton from "./ui/home/create-button";
import NotesTable from "./ui/home/notes-table";
import Search from "./ui/home/search";
import Pagination from "./ui/home/pagination";
import { fetchNotes, fetchNotesPages, fetchFilteredNotes } from "./lib/data";
import NoNotesImage from "./ui/home/no-notes-image";

export const metadata = {
  title: "Home",
  description: "A simple site about taking notes"
}

export default async function Home(props) {
  const searchParams = await props.searchParams;

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchNotesPages(query);
  const allNotes = await fetchNotes();
  const notes = await fetchFilteredNotes(query, currentPage);

  return (
    <main>

      <HomepageHeader />
      <div className="d-flex flex-row justify-content-between">
        <CreateButton />
        <Search placeholder={"Search for note by details..."} />
      </div>

      {allNotes.length > 0
        ? <NotesTable currentPage={currentPage} notes={notes} />
        : <NoNotesImage />}      

      <div className="mt-5 flex w-full justify-center">
        {allNotes.length > 0
        ? <Pagination totalPages={totalPages} />
        : null}
      </div>
    </main>
  );
}