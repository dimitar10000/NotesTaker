import Image from "next/image"

export default function NoNotesImage() {
    return (
        <>
            <h3 style={{ textAlign: "center", marginTop: "50px",
        marginBottom: "20px" }}>
                No notes yet added. Please use the button to add new ones!
            </h3>

            <div style={{textAlign: "center"}}>
                <Image width={500} height={300} src={"/table_placeholder.jpg"}
                alt="Placeholder image of an empty table element"/>
            </div>
        </>
    )
}