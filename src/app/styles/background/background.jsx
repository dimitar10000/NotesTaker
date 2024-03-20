import Image from 'next/image'
import notebook from "./notebook.jpg"

export default function Background() {
  return (
    <Image
      alt="Notes background"
      src={notebook}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        opacity: "0.5",
        zIndex: "-1"
      }}
    />
  )
}