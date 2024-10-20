import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-svw h-svh flex flex-col justify-center items-center animate-fadeup">
      <h1>Not Found</h1>
      <h3>Could not find requested resource</h3>
      <Link href="/" className="rounded-lg bg-pink-600 px-3 py-2 text-white">Return Home</Link>
    </div>
  );
}
