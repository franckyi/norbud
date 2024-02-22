import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import ImageCarousel from "../ui/image-carousel";
import { RentItemProps } from "../types/rent-item-props";

function RentItem({ item }: { item: RentItemProps }) {
  return (
    <article key={item.id} className="w-full my-24 text-left">
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
      <a
        href="tel:+48500123456"
        title="Zadzwoń do nas"
        className="block mt-2 mb-8 py-2 text-xl text-center bg-stone-300 hover:bg-green-700 text-stone-900 hover:text-white rounded-full uppercase"
      >
        Wynajmuj
      </a>
    </article>
  );
}

export default RentItem;
