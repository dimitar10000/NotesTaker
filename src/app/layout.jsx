import { Inter } from "next/font/google";
import "./ui/globals.css";
import Background from "./styles/background/background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NotesTakes",
  description: "A simple app about creating and editing notes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <Background />
      </body>
    </html>
  );
}
