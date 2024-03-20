import 'bootstrap/dist/css/bootstrap.css';
import localFont from 'next/font/local'

const headerFont = localFont({src: "../styles/fonts/Handlee-Regular.ttf"});

export default function Header({title}) {
    return (
        <h1 className={`mt-4 mb-5 text-5xl ${headerFont.className}`} style={{textAlign: "center"}}>{title ? title : "Notes Taker"}</h1>
    );
}