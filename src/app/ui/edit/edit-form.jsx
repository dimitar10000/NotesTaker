'use client'

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { useFormState } from 'react-dom';
import { updateNote } from "../../lib/actions";

export default function EditForm({ note }) {

    const updateNoteById = updateNote.bind(null, note.id);
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(updateNoteById, initialState);

    return (
        <Form action={dispatch}
        className="mt-5 mx-auto card-body d-flex flex-column p-3 bg-dark justify-content-center rounded"
        style={{ width: "70%","--bs-bg-opacity": "0.8" }}>
            <Form.Group className="mb-3 mt-3 mx-auto border border-danger rounded"
                    style={{ width: "70%" }} controlId="noteTitle">
                <Form.Control name="noteTitle"
                    type="text" placeholder="Enter title"
                    defaultValue={note.title} />
            </Form.Group>

            <Form.Group className="mb-3 mt-3 mx-auto border border-danger rounded"
                    style={{ width: "90%" }} controlId="noteContent">
                <Form.Control name="noteContent" as="textarea" rows={10}
                    placeholder="Enter note"
                    defaultValue={note.content} />
            </Form.Group>

            <Form.Group className="mt-2 mb-1 mr-10 align-self-end" controlId="formButton">
                <Button type="submit">
                    Update
                </Button>
            </Form.Group>

        </Form>
    );
}