import getData from "@/lib/get-data";
import { wynajemRequest } from "@/lib/rent-request";
import { RentItemProps } from "@/types/rent-item-props";
import RentItem from "./rent-item";

async function Rent() {
  const heading = "Wynajem maszyn oraz usługi";
  const data = await getData(wynajemRequest.URL);
  const rentItems = data;

  return (
    <section id="wynajem" className="p-8 lg:px-24 mx-auto text-center">
      <h2 className="my-8 lg:mt-16 lg:mb-8 text-center text-2xl font-extrabold uppercase">
        {heading}
      </h2>
      {rentItems.length > 0 &&
        rentItems.map((item: RentItemProps) => (
          <RentItem item={item} key={item.id} />
        ))}
    </section>
  );
}

export default Rent;
