import getFormattedDate from "../lib/get-formatted-date";
import getData from "../lib/get-data";
import { portfolioRequest } from "../lib/portfolio-request";
import { PortfolioItemProps } from "../types/portfolio-item-props";
import getContentFromHtml from "../lib/get-content-from-html";
import {
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  CurrencyEuroIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import ImageCarousel from "../ui/image-carousel";

async function Portfolio() {
  const data = await getData(portfolioRequest.URL);
  const portfolioItems = data;
  const heading = "Nasze realizacje";

  return (
    <section id="realizacje" className="px-24 mx-auto text-center">
      <h2 className="mt-16 mb-8 text-center text-2xl font-extrabold uppercase">
        {heading}
      </h2>
      <ol>
        {portfolioItems.length > 0 &&
          portfolioItems.map((item: PortfolioItemProps) => (
            <li
              key={item.id}
              className="w-full my-28 text-left even:bg-green-700"
            >
              <h2 className="mb-2 text-xl font-semibold">{item.acf.title}</h2>

              <div className="flex gap-4">
                <div
                  className="w-2/4 p-8 text-left border border-1 border-solid border-stone-900"
                  key={item.id}
                >
                  {item.acf.galleryId && (
                    <div className="mb-4 text-sm text-neutral-400">
                      #{item.acf.galleryId}
                    </div>
                  )}
                  {item.acf.investor && (
                    <div className="flex justify-between mb-4">
                      <h3 className="text-sm">
                        <CurrencyEuroIcon className="h-5 w-5 text-stone-400 inline mr-2" />
                        Inwestor:{" "}
                      </h3>
                      <p className="uppercase font-semibold">
                        {item.acf.investor}
                      </p>
                    </div>
                  )}

                  {item.acf.contractor && (
                    <div className="flex justify-between mb-4">
                      <h3 className="text-sm">
                        <UserCircleIcon className="h-5 w-5 text-stone-400 inline mr-2" />
                        Generalny wykonawca:{" "}
                      </h3>
                      <p className="uppercase font-semibold">
                        {item.acf.contractor}
                      </p>
                    </div>
                  )}

                  {(item.acf.dateStart || item.acf.dateEnd) && (
                    <div className="flex justify-between mb-4">
                      <h3 className="text-sm">
                        <CalendarDaysIcon className="h-5 w-5 text-stone-400 inline mr-2" />
                        Termin realizacji:{" "}
                      </h3>
                      <p className="uppercase font-semibold">
                        {item.acf.dateStart &&
                          getFormattedDate(item.acf.dateStart) + " - "}{" "}
                        {getFormattedDate(item.acf.dateEnd)}
                      </p>
                    </div>
                  )}

                  {/* {isMounted && item.acf.taskList && ( */}
                  {item.acf.taskList && (
                    <div className="flex">
                      <h3 className="text-sm basis-1/4">
                        <ClipboardDocumentListIcon className="h-5 w-5 text-stone-400 inline mr-2" />
                        Zakres prac:{" "}
                      </h3>
                      {getContentFromHtml(item.acf.taskList)}
                    </div>
                  )}
                </div>
                {/* end left col */}

                <div className="w-2/4">
                  <ImageCarousel galleryId={item.acf.galleryId} />
                </div>
                {/* end right col */}
              </div>
            </li>
          ))}
      </ol>
    </section>
  );
}

export default Portfolio;
