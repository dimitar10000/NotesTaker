import 'bootstrap/dist/css/bootstrap.css';
import localFont from 'next/font/local'

const homepageHeaderFont = localFont({src: "../styles/fonts/Handlee-Regular.ttf"});
const createHeaderFont = localFont({src: "../styles/fonts/NotoSansMono.ttf", weight: "350"});

export function HomepageHeader({title}) {
    return (
        <h1 className={`mt-4 mb-5 text-5xl ${homepageHeaderFont.className}`} style={{textAlign: "center"}}>{title ? title : "Notes Taker"}</h1>
    );
}

export function CreatePageHeader({title}) {
    return (
        <h1 className={`mt-4 mb-5 ${createHeaderFont.className}`} style={{textAlign: "center" }}>{title ? title : "Create Note"}</h1>
    );
}

export function EditPageHeader({title,id}) {
    return (
        <h1 className={`mt-4 mb-5 ${createHeaderFont.className}`} style={{textAlign: "center" }}>{title ? title : `Edit Note #${id}`}</h1>
    );
}