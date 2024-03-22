import CreateForm from "../ui/create/create-form";
import React from 'react';
import { Metadata } from "next";
import { CreatePageHeader } from "../ui/headers";
import BackButton from "../ui/back-button";

export const metadata = {
    title: "Create new note",
    description: "A page about creating new notes"
}

export default function Create() {
    return (
      <main>
        <BackButton/>
        <CreatePageHeader/>
        <CreateForm/>
      </main>
    );
  }