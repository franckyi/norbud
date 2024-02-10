import getFormattedDate from "../lib/get-formatted-date";
import getData from "../lib/get-data";
import { realizacjeRequest } from "../lib/realizacje-request";
import { PortfolioItemProps } from "../types/portfolio-item-props";
import CalendarDaysIcon from "@heroicons/react/24/outline/CalendarDaysIcon";
import getContentFromHtml from "../lib/get-content-from-html";
import {
  ClipboardDocumentListIcon,
  CurrencyEuroIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

async function Portfolio() {
  let data = await getData(realizacjeRequest.URL);
  const realizacje = data;
  const heading = "Nasze realizacje";

  return (
    <section id="realizacje" className="px-96 mx-auto text-center">
      <h2 className="mt-16 mb-8 text-center text-2xl font-extrabold uppercase">
        {heading}
      </h2>
      {realizacje.length > 0 &&
        realizacje.map((realizacja: PortfolioItemProps) => (
          <article key={realizacja.id} className="my-16 text-left">
            <h2 className="mb-2 text-xl font-semibold">
              {realizacja.acf.title}
            </h2>

            <div className="flex gap-4">
              <div
                className="w-2/3 p-8 text-left border border-1 border-solid border-stone-900"
                key={realizacja.id}
              >
                {realizacja.acf.investor && (
                  <div className="flex justify-between mb-4">
                    <h3 className="text-sm">
                      <CurrencyEuroIcon className="h-5 w-5 text-stone-400 inline mr-2" />
                      Inwestor:{" "}
                    </h3>
                    <p className="uppercase font-semibold">
                      {realizacja.acf.investor}
                    </p>
                  </div>
                )}

                {realizacja.acf.contractor && (
                  <div className="flex justify-between mb-4">
                    <h3 className="text-sm">
                      <UserCircleIcon className="h-5 w-5 text-stone-400 inline mr-2" />
                      Generalny wykonawca:{" "}
                    </h3>
                    <p className="uppercase font-semibold">
                      {realizacja.acf.contractor}
                    </p>
                  </div>
                )}

                {(realizacja.acf.dateStart || realizacja.acf.dateEnd) && (
                  <div className="flex justify-between mb-4">
                    <h3 className="text-sm">
                      <CalendarDaysIcon className="h-5 w-5 text-stone-400 inline mr-2" />
                      Termin realizacji:{" "}
                    </h3>
                    <p className="uppercase font-semibold">
                      {realizacja.acf.dateStart &&
                        getFormattedDate(realizacja.acf.dateStart) + " - "}{" "}
                      {getFormattedDate(realizacja.acf.dateEnd)}
                    </p>
                  </div>
                )}

                {/* {isMounted && realizacja.acf.taskList && ( */}
                {realizacja.acf.taskList && (
                  <div className="flex">
                    <h3 className="text-sm basis-1/4">
                      <ClipboardDocumentListIcon className="h-5 w-5 text-stone-400 inline mr-2" />
                      Zakres prac:{" "}
                    </h3>
                    {getContentFromHtml(realizacja.acf.taskList)}
                  </div>
                )}
              </div>

              <div className="w-1/3 border border-1 border-solid border-stone-900">
                carousel here
              </div>
            </div>
          </article>
        ))}
    </section>
  );
}

export default Portfolio;
