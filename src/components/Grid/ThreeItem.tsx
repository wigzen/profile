import { Link } from "react-router-dom";
import { GridTileImage } from "../Grid/tile";
import { Product } from "../../types/main";

function ThreeItemGridItem({
  item,
  size,
}: {
  item: Product;
  size: "full" | "half";
  priority?: boolean;
}) {
  return (
    <div
      className={
        size === "full"
          ? "md:col-span-4 md:row-span-2"
          : "md:col-span-2 md:row-span-1"
      }
    >
      <Link
        className="relative block aspect-square h-full w-full"
        to={`/product/${item.id}`}
      >
        <GridTileImage
          src={item.image}
          sizes={
            size === "full"
              ? "(min-width: 768px) 66vw, 100vw"
              : "(min-width: 768px) 33vw, 100vw"
          }
          alt={item.title}
          label={{
            position: size === "full" ? "center" : "bottom",
            title: item.title,
            amount: item.price,
            currencyCode: "USD",
          }}
        />
      </Link>
    </div>
  );
}

export function ThreeItemGrid(props: { data: Product[] }) {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = props.data;
  console.log(homepageItems);

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
      <ThreeItemGridItem size="full" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}
