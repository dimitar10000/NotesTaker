'use client'

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

export default function CreateForm() {
    return (
        <Form className="mt-5" style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}>
            <Form.Group className="mb-3 mt-3" controlId="formTitle">
                <Form.Control style={{
                    textAlign: "center", width: "70%",
                    marginLeft: "auto", marginRight: "auto"
                }}
                    type="text" placeholder="Enter title" />
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="formNote">
                <Form.Control as="textarea" rows={10}
                    style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
                    placeholder="Enter note" />
            </Form.Group>

            <Form.Group className="float-end mt-3" controlId="formButton">
                <Button type="submit" style={{ marginRight: "150px" }}>
                    Save
                </Button>
            </Form.Group>

        </Form>
    );
}