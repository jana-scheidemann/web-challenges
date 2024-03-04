import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Towers() {
  const vol2 = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>Volume 2: The Two Towers</h1>
      <p>{vol2.description}</p>
      <ul>
        <li>
          {vol2.books[0].ordinal}: {vol2.books[0].title}{" "}
        </li>
        <li>
          {vol2.books[1].ordinal}: {vol2.books[1].title}{" "}
        </li>
      </ul>
      <Image
        src="/images/the-two-towers.png"
        height={230}
        width={140}
        alt="Cover of The two towers"
      />
      <hr />
      <Link href="/volumes/the-fellowship-of-the-ring">Volume 1</Link>
      <br />
      <Link href="/volumes/the-return-of-the-king">Volume 3</Link>
    </>
  );
}
