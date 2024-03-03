import 'bootstrap/dist/css/bootstrap.css';
import {Button} from "react-bootstrap"
import { Inter } from 'next/font/google';

const inter = Inter({weight: "300", subsets: ["latin"]});

export default function CreateButton() {
    return (
        <Button className={inter.className}
        style={{marginLeft: "2%"}} variant="primary" color="primary" size="lg" href="./create">
            + Add new note
        </Button>
    );
}