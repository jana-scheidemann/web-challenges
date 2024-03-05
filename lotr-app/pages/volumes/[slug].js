import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const currentBook = volumes.find(({ slug }) => slug === slug);

  if (!currentBook) {
    return null;
  }

  const { title, description, ordinal, cover } = currentBook;

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        <li>
          {currentBook.books[0].ordinal}: {currentBook.books[0].title}
        </li>
        <li>
          {currentBook.books[1].ordinal}: {currentBook.books[1].title}
        </li>
      </ul>
      <Image src={cover} height={230} width={140} alt={`Cover of ${title}`} />
      <hr />
      <Link href="/volumes/the-two-towers">Volume 2</Link>
      <br />
      <Link href="/volumes/the-return-of-the-king">Volume 3</Link>
    </>
  );
}
