import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Fellowship() {
  const vol1 = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>Volume 1: The Fellowship of the Ring</h1>
      <p>{vol1.description}</p>
      <ul>
        <li>
          {vol1.books[0].ordinal}: {vol1.books[0].title}{" "}
        </li>
        <li>
          {vol1.books[1].ordinal}: {vol1.books[1].title}{" "}
        </li>
      </ul>
      <Image
        src="/images/the-fellowship-of-the-ring.png"
        height={230}
        width={140}
        alt="Cover of The Return of the King"
      />
      <hr />
      <Link href="/volumes/the-two-towers">Volume 2</Link>
      <br />
      <Link href="/volumes/the-return-of-the-king">Volume 3</Link>
    </>
  );
}
