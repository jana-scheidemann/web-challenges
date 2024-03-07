import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>welcome to the Cities App</h1>

      <Link href={"/cities"}>go to all Cities</Link>
    </div>
  );
}
