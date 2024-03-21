'use client';
import { Button } from "react-bootstrap";
import { GiCancel } from "react-icons/gi";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import ConfirmDialog from "./confirm-dialog";
import { confirmDeletion } from "../lib/utils";

export default function DeleteButton({noteId}) {
    const [show,setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => setShow(false);

    return (
        <div>
            <ConfirmDialog show={show} deleteFunc={() => {confirmDeletion(noteId); handleClose();}} hideFunc={handleClose} />

            <Button
            className="btn btn-danger btn-sm w-20 h-8"
            onClick={handleShow}>
                <div className="flex flex-row flex-nowrap justify-evenly items-center">
                    <span><GiCancel className="h-4 w-4 mr-0.5"/> </span>
                    <span className="">Delete</span>
                </div>
            </Button>
        </div>
    );
}