import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h1> 404</h1>
      <h2>The requested page could not be found.</h2>
      <Link
        href="/"
      >
        Return
      </Link>
    </main>
  );
}