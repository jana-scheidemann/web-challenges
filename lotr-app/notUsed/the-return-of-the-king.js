import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function King() {
  const vol3 = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>Volume 3: The Return of the King</h1>
      <p>{vol3.description}</p>
      <ul>
        <li>
          {vol3.books[0].ordinal}: {vol3.books[0].title}{" "}
        </li>
        <li>
          {vol3.books[1].ordinal}: {vol3.books[1].title}{" "}
        </li>
      </ul>
      <Image
        src="/images/the-return-of-the-king.png"
        height={230}
        width={140}
        alt="Cover of The Return of the King"
      />
      <hr />
      <Link href="/volumes/the-fellowship-of-the-ring">Volume 1</Link>
      <br />
      <Link href="/volumes/the-two-towers">Volume 2</Link>
    </>
  );
}
