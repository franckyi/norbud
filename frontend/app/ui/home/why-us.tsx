import { AboutUsProps } from "@/app/types/about-us-props";
import { WhyUsProps } from "@/app/types/why-us-props";

async function WhyUs({ whyUsHeading, whyUsList, whyUsFinalText }: WhyUsProps) {
  return (
    <section id="about-us" className="w-1/3 mx-auto my-16 text-center">
      <h2 className="my-8 text-2xl font-extrabold uppercase">{whyUsHeading}</h2>
      <p>{whyUsList}</p>
      {/* TODO: separate list in 4-8 fields in ACF */}
      <p>{whyUsFinalText}</p>
    </section>
  );
}

export default WhyUs;
