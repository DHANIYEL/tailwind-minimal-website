import PopularProductCard from "../Components/PopularProductCard";
import { products } from "../Constants";

const PopularProduct = () => {
  return (
    <section id="products" className=" max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin text-4xl  font-bold">
          Our<span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Crafted with a lightweight and breathable mesh upper, the Nike ensures
          maximum comfort and ventilation during intense workouts or casual
          outings.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;
