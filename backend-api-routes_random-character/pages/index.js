import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("/api/random-character", fetcher);

  if (!data) {
    return;
  }
  return (
    <>
      <h1>{data.name}</h1>
      <p>Twittername: {data.twitterName}</p>
      <p>Geohash: {data.geohash}</p>
    </>
  );
}
