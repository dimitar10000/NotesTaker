import 'bootstrap/dist/css/bootstrap.css';

export default function Header({title}) {
    return (
        <h1 className="mt-2 mb-5" style={{textAlign: "center"}}>{title ? title : "Notes Taker"}</h1>
    );
}