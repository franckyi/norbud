import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import ImageCarousel from "../ui/common/image-carousel";
import { RentItemProps } from "../types/rent-item-props";

function RentItem({ item }: { item: RentItemProps }) {
  return (
    <article key={item.id} className="w-full my-8 lg:my-24 lg:text-left">
      <h2 className="py-2 px-8 mb-2 text-xl font-semibold bg-green-700 text-stone-100 rounded-t-full">
        {item.acf.title}
      </h2>

      {/* start left col */}
      <div className="lg:flex gap-4">
        <div
          className="lg:w-2/4 p-8 text-left border border-1 border-solid border-stone-900 dark:border-stone-700"
          key={item.id}
        >
          {item.acf.galleryId && (
            <div className="mb-4 text-sm text-stone-600">
              #{item.acf.galleryId}
            </div>
          )}
          {item.acf.desc && (
            <div className="flex justify-between mb-4">
              <p>
                <ShoppingCartIcon className="h-5 w-5 text-stone-600 inline mr-2" />
                {item.acf.desc}
              </p>
            </div>
          )}
        </div>
        {/* end left col */}

        <div className="lg:w-2/4 max-md:my-4">
          <ImageCarousel galleryId={item.acf.galleryId} />
        </div>
        {/* end right col */}
      </div>
      <a
        href="mailto:biuro@nor-bud.com"
        title="Zadzwoń do nas"
        className="block mt-2 mb-8 py-2 text-xl text-center bg-stone-300 dark:bg-stone-700 hover:bg-green-700 text-stone-900 hover:text-white rounded-b-full uppercase"
      >
        Wynajmij
      </a>
    </article>
  );
}

export default RentItem;
