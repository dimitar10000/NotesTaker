import Image from "next/image"
import { Inter } from 'next/font/google';

const inter = Inter({weight: "500", subsets: ["latin"]});

export default function NoNotesImage() {
    return (
        <>
            <h3 className={inter.className}
            style={{ textAlign: "center", marginTop: "20px",
        marginBottom: "20px" }}>
                No notes yet added. Please use the button to add new ones!
            </h3>

            <div className="flex flex-column items-center">
                <Image width={400} height={200} src={"/table_placeholder_image.jpg"}
                alt="Placeholder image of an empty table element"/>

                <a style={{color: "black", textDecoration: "none"}} href="http://www.freepik.com">Designed by rawpixel.com / Freepik</a>
            </div>
        </>
    )
}