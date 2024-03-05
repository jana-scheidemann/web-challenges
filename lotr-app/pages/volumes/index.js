import Link from "next/link";
import { volumes } from "@/lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  function getRandomVolume(volumes) {
    return volumes[Math.floor(Math.random() * volumes.length)];
  }

  const router = useRouter();

  function handleSubmit() {
    const randomVolume = getRandomVolume(volumes);
    router.push(`/volumes/${randomVolume.slug}`);
  }

  return (
    <>
      <Link href="/">to Homepage</Link>
      <h2>Overview:</h2>
      <ul>
        {volumes.map(({ slug, title }) => {
          return (
            <li key={slug}>
              <Link href={`/volumes/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      <button onClick={handleSubmit}>go to random Volume</button>
    </>
  );
}
