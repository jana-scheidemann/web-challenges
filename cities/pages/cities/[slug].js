import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import Link from "next/link";

export default function CityPage() {
  const router = useRouter();
  const slug = router.query.slug;

  const thisCity = cities.find((city) => city.slug === slug);

  const { name, country, population, description } = thisCity;

  return (
    <>
      <h1>{name}</h1>
      <h2>Country: {country}</h2>
      <h3>Population: {population} people live here.</h3>
      <p>Want to get more information about {name}? Here they are:</p>
      <p>{description}</p>

      <button>
        <Link href={"/cities"}>back to all cities</Link>
      </button>
    </>
  );
}
