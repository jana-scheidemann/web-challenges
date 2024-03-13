import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

export default function Product() {
  const router = useRouter();
  console.log("Router: ", router);
  const dataId = router.query.id;
  const { data: product } = useSWR(`/api/products/${dataId}`);

  if (!product) {
    return;
  }

  const { id, name, description, price, currency, category } = product;
  return (
    <>
      <div>
        Name: {name} ({category}) <br />
        <p>{description}</p>
        Price: {price} {currency}
      </div>
      <Link href="/products">Back to all products</Link>
    </>
  );
}
