import { WhyUsProps } from "@/app/types/why-us-props";

async function WhyUs({ whyUsHeading, whyUsList, whyUsFinalText }: WhyUsProps) {
  console.log(whyUsList);
  return (
    <section id="about-us" className="w-3/4 mx-auto text-center">
      <h2 className="my-8 text-2xl font-extrabold uppercase">{whyUsHeading}</h2>
      <div className="flex w-full gap-4 mx-8 my-16 text-center">
        {whyUsList.map((obj) => {
          return (
            <article
              className="flex flex-col w-1/4 p-8 text-left border border-1 border-solid border-stone-900 hover:bg-stone-200"
              key={obj.id}
            >
              <h3 className="mb-8 text-2xl font-bold">{obj.heading}</h3>
              <p className="">{obj.desc}</p>
            </article>
          );
        })}
      </div>
      <p>{whyUsFinalText}</p>
    </section>
  );
}

export default WhyUs;
