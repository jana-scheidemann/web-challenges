import useSWR from "swr";
import Link from "next/link";

export default function Homepage() {
  const { data: products } = useSWR("/api/products");
  if (!products) {
    return;
  }
  console.log(products);

  const implicit = () => true;
  const explicit = () => {
    return true;
  };

  return (
    <>
      <h1>All Products:</h1>

      <ul>
        {products.map(
          ({ id, name, description, price, currency, category }) => (
            <li key={id}>
              Name: {name} ({category}) <br />
              <p>{description}</p>
              Price: {price} {currency}
              <Link href={`/products/${id}`}>
                click here to see only this product
              </Link>
              <hr />
            </li>
          )
        )}
      </ul>
    </>
  );
}
