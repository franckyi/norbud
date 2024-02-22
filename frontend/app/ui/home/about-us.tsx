import { AboutUsProps } from "@/app/types/about-us-props";

const heading = "O Firmie";

async function AboutUs({ aboutUsText }: AboutUsProps) {
  return (
    <section
      id="ofirmie"
      className="max-md:p-8 lg:w-1/3 mx-auto lg:my-16 text-center"
    >
      <h2 className="my-8 text-2xl font-extrabold uppercase">{heading}</h2>
      <p>{aboutUsText}</p>
    </section>
  );
}

export default AboutUs;
