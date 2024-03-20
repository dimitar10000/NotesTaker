import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { CloseButton } from 'react-bootstrap';

export default function ConfirmDialog({show, hideFunc, deleteFunc}) {

    return (
    <Modal show={show} deleteFunc={deleteFunc} hideFunc={hideFunc}>
        <Modal.Header>
          <Modal.Title>Delete Confirmation</Modal.Title>
          <CloseButton onClick={hideFunc}/>
        </Modal.Header>
        <Modal.Body>
        Are you sure you want to proceed?
        This will permanently delete the note.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideFunc}>
            Close
          </Button>
          <Button variant="success" onClick={deleteFunc}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    );
}