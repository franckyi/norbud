import { AboutUsProps } from "@/app/types/about-us-props";

async function AboutUs({ aboutUsText }: AboutUsProps) {
  return (
    <section id="ofirmie" className="w-1/3 mx-auto my-16 text-center">
      <h2 className="my-8 text-2xl font-extrabold uppercase">O Firmie</h2>
      <p>{aboutUsText}</p>
    </section>
  );
}

export default AboutUs;
