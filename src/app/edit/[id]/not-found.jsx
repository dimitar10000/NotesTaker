import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center mt-40 gap-2"
        style={{color: 'black', fontSize: 32}}>
      <h1> 404</h1>
      <h2>The requested page could not be found.</h2>
      <Link
        href="/"
      >
        Return
      </Link>
    </div>
  );
}