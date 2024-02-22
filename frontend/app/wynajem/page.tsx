import getData from "../lib/get-data";
import { wynajemRequest } from "../lib/rent-request";
import ImageCarousel from "../ui/image-carousel";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { RentItemProps } from "../types/rent-item-props";

async function Rent() {
  const data = await getData(wynajemRequest.URL);
  const rentItems = data;
  const heading = "Wynajem maszyn oraz usługi";

  return (
    <section id="wynajem" className="px-24 mx-auto text-center">
      <h2 className="mt-16 mb-8 text-center text-2xl font-extrabold uppercase">
        {heading}
      </h2>
      {rentItems.length > 0 &&
        rentItems.map((item: RentItemProps) => (
          <article key={item.id} className="w-full my-16 text-left">
            <h2 className="p-2 mb-2 text-xl font-semibold bg-green-700 text-white">
              {item.acf.title}
            </h2>

            <div className="flex gap-4">
              <div
                className="w-2/4 p-8 text-left border border-1 border-solid border-stone-900"
                key={item.id}
              >
                {item.acf.galleryId && (
                  <div className="mb-4 text-sm text-stone-400">
                    #{item.acf.galleryId}
                  </div>
                )}
                {item.acf.desc && (
                  <div className="flex justify-between mb-4">
                    <p>
                      <ShoppingCartIcon className="h-5 w-5 text-stone-400 inline mr-2" />
                      {item.acf.desc}
                    </p>
                  </div>
                )}
              </div>
              {/* end left col */}

              <div className="w-2/4">
                <ImageCarousel galleryId={item.acf.galleryId} />
              </div>
              {/* end right col */}
            </div>
          </article>
        ))}
    </section>
  );
}

export default Rent;
