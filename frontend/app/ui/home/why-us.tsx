import { WhyUsProps } from "@/app/types/why-us-props";
import { UserGroupIcon } from "@heroicons/react/24/outline";

async function WhyUs({ whyUsHeading, whyUsList, whyUsFinalText }: WhyUsProps) {
  return (
    <section id="about-us" className="my-16 mx-auto text-center">
      <h2 className="my-8 text-2xl font-extrabold uppercase">{whyUsHeading}</h2>
      <div className="flex flex-col lg:flex-row w-3/4 gap-4 mx-8 mx-auto text-center">
        {whyUsList.map((item) => {
          return (
            <article
              className="lg:w-1/2 p-8 text-left border border-1 border-solid border-stone-900 hover:bg-stone-100 hover:border-green-700 border-t-8 border-t-green-700"
              key={item.id}
            >
              <div className="font-extrabold text-8xl text-stone-200">
                {item.id}
              </div>
              <h3 className="mb-8 text-2xl font-bold">{item.heading}</h3>
              <p>{item.desc}</p>
            </article>
          );
        })}
      </div>
      <div className="mt-24 text-5xl lg:text-9xl text-green-700 font-extrabold text-center">
        <p>Budujemy</p>
        <p>świat wokół Ciebie</p>
      </div>
      <div className="min-h-screen mt-8 bg-no-repeat bg-img-boisko"></div>
      <p className="mb-16 py-16 max-md:px-8 lg:px-40 text-xl bg-green-700 text-white">
        <UserGroupIcon className="h-16 w-16 mb-8 mx-auto" />
        {whyUsFinalText}
      </p>
    </section>
  );
}

export default WhyUs;
