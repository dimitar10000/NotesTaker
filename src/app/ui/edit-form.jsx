'use client'

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import { useFormState } from 'react-dom';
import { updateNote } from "../lib/actions";

export default function EditForm({note}) {

    const updateNoteById = updateNote.bind(null,note.id);
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(updateNoteById, initialState);

    return (
        <Form action={dispatch}
        className="mt-5" style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>
            <Form.Group className="mb-3 mt-3" controlId="noteTitle">
                <Form.Control name="noteTitle" style={{
                    textAlign: "center", width: "70%",
                    marginLeft: "auto", marginRight: "auto"
                }}
                    type="text" placeholder="Enter title"
                    defaultValue={note.title}/>
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="noteContent">
                <Form.Control name="noteContent" as="textarea" rows={10}
                    style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
                    placeholder="Enter note"
                    defaultValue={note.content}/>
            </Form.Group>

            <Form.Group className="float-end mt-3" controlId="formButton">
                <Button type="submit" style={{ marginRight: "150px" }}>
                    Update
                </Button>
            </Form.Group>

        </Form>
    );
}