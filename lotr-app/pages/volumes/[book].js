import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function VolumeDetail() {
  const router = useRouter();
  const book = router.query.book;

  const currentBook = volumes.find((volume) => volume.slug === book);

  if (!currentBook) {
    return null;
  }

  const { title, description, cover } = currentBook;
  const currentBookSlug = currentBook.slug;
  const currentBookIndex = volumes.findIndex(
    (volume) => volume.slug === currentBookSlug
  );
  const prevVolume = currentBookIndex > 0;
  const nextVolume = currentBookIndex < volumes.length - 1;

  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {currentBook.books.map(({ title, ordinal }) => {
          return (
            <li key={title}>
              {ordinal}: {title}
            </li>
          );
        })}
      </ul>
      <Image src={cover} height={230} width={140} alt={`Cover of ${title}`} />
      <hr />
      {prevVolume && (
        <Link href={`${volumes[currentBookIndex - 1].slug}`}>
          Previous Volume
        </Link>
      )}
      <br />
      {nextVolume && (
        <Link href={`${volumes[currentBookIndex + 1].slug}`}>Next Volume</Link>
      )}
    </>
  );
}
