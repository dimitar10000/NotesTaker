import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { CloseButton } from 'react-bootstrap';

export default function ConfirmDialog({show, hidefunc, deletefunc}) {

    return (
    <Modal show={show} deletefunc={deletefunc} hidefunc={hidefunc}>
        <Modal.Header>
          <Modal.Title>Delete Confirmation</Modal.Title>
          <CloseButton onClick={hidefunc}/>
        </Modal.Header>
        <Modal.Body>
        Are you sure you want to proceed?
        This will permanently delete the note.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hidefunc}>
            Close
          </Button>
          <Button variant="success" onClick={() => {deletefunc();hidefunc();}}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    );
}