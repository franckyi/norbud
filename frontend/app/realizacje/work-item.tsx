"use client";
import {
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  CurrencyEuroIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import ImageCarousel from "../ui/common/image-carousel";
import getContentFromHtml from "../lib/get-content-from-html";
import getFormattedDate from "../lib/get-formatted-date";
import { PortfolioItemProps } from "../types/portfolio-item-props";
import { useState } from "react";

const ColLeftClasses =
  "lg:w-2/4 p-8 text-left border border-1 border-solid border-stone-900 rounded";

function WorkItem({
  item,
  index,
}: {
  item: PortfolioItemProps;
  index: number;
}) {
  const [isEven, setIsEven] = useState(index % 2 !== 0);
  const bgClass = isEven ? "bg-stone-800" : "bg-stone-300";

  return (
    <li
      key={item.id}
      className="first:mt-0 my-8 p-8 lg:py-24 text-left even:bg-green-700 even:text-white dark:even:bg-green-700 dark:even:text-white"
    >
      <h2 className="lg:px-40 mb-2 text-2xl font-semibold">{item.acf.title}</h2>
      <div className="lg:px-40 lg:flex gap-4">
        {/* start left col */}
        <div className={`${ColLeftClasses} ${bgClass}`} key={item.id}>
          {item.acf.galleryId && (
            <div className="mb-4 text-sm text-stone-400">
              #{item.acf.galleryId}
            </div>
          )}
          {item.acf.investor && (
            <div className="flex justify-between mb-4">
              <h3 className="text-sm">
                <CurrencyEuroIcon className="h-5 w-5 text-stone-400 inline mr-2" />
                Inwestor:{" "}
              </h3>
              <p className="uppercase font-semibold">{item.acf.investor}</p>
            </div>
          )}

          {item.acf.contractor && (
            <div className="flex justify-between mb-4">
              <h3 className="text-sm">
                <UserCircleIcon className="h-5 w-5 text-stone-400 inline mr-2" />
                Generalny wykonawca:{" "}
              </h3>
              <p className="uppercase font-semibold">{item.acf.contractor}</p>
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

          {item.acf.taskList && (
            <div className="flex gap-4">
              <h3 className="text-sm basis-1/4">
                <ClipboardDocumentListIcon className="h-5 w-5 text-stone-400 inline mr-2" />
                Zakres prac:{" "}
              </h3>
              {getContentFromHtml(item.acf.taskList)}
            </div>
          )}
        </div>
        {/* end left col */}

        <div className="max-md:mt-4 lg:w-2/4">
          <ImageCarousel galleryId={item.acf.galleryId} />
        </div>
        {/* end right col */}
      </div>
    </li>
  );
}

export default WorkItem;
