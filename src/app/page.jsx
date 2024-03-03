import Image from "next/image";
import styles from "./page.module.css";
import Header from "./ui/header";
import CreateButton from "./ui/create-button";
import NotesTable from "./ui/notes-table";
import { Metadata } from 'next';

export const metadata = {
  title: "Home",
  description: "A simple site about taking notes"
}

export default function Home() {
  return (
    <main>
      <Header/>
      <CreateButton/>

      <NotesTable/>
    </main>
  );
}
