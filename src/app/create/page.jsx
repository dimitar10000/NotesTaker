import CreateForm from "../ui/create-form";
import React from 'react';
import { Metadata } from "next";

export const metadata = {
    title: "Create new note",
    description: "A page about creating new notes"
}

export default function Create() {
    return (
      <main>
        <CreateForm/>
      </main>
    );
  }