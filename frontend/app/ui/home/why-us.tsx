import { WhyUsProps } from "@/app/types/why-us-props";

async function WhyUs({ whyUsHeading, whyUsList, whyUsFinalText }: WhyUsProps) {
  return (
    <section id="about-us" className="my-16 mx-auto text-center">
      <h2 className="my-8 text-2xl font-extrabold uppercase">{whyUsHeading}</h2>
      <div className="flex w-3/4 gap-4 mx-8 my-16 mx-auto text-center">
        {whyUsList.map((obj) => {
          return (
            <article
              className="w-1/2 p-8 text-left border border-1 border-solid border-stone-900 hover:bg-stone-100 hover:border-green-700 border-t-8 border-t-green-700"
              key={obj.id}
            >
              <div className="font-extrabold text-8xl text-stone-200">
                {obj.id}
              </div>
              <h3 className="mb-8 text-2xl font-bold">{obj.heading}</h3>
              <p>{obj.desc}</p>
            </article>
          );
        })}
      </div>
      <p className="py-16 px-40 text-xl bg-green-700 text-white">
        {whyUsFinalText}
      </p>
    </section>
  );
}

export default WhyUs;
