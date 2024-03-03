import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

export default function NotesTable() {
    return (
        <Table bordered size="sm" style={{width: "97%", marginLeft: "auto",
        marginRight: "auto", marginTop: "50px"}}>
            <thead style={{textAlign: "center"}}>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Length</th>
                    <th>Created/Last Modified</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </Table>
    );
}