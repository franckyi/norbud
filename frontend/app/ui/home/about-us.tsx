import { AboutUsProps } from "@/app/types/about-us-props";

async function AboutUs({ aboutUsText }: AboutUsProps) {
  return (
    <section id="about-us" className="w-full">
      <h2>O Firmie</h2>
      <p>{aboutUsText}</p>
    </section>
  );
}

export default AboutUs;
