import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <Link href={"/products"}>to all products</Link>
    </div>
  );
}
