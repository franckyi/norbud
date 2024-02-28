import { AboutUsProps } from "@/app/types/about-us-props";

const sectionClasses = "max-md:p-8 lg:w-1/3 mx-auto lg:my-16 text-center";
const heading = {
  classes: "my-8 text-2xl font-extrabold uppercase",
  text: "O Firmie",
};

async function AboutUs({ aboutUsText }: AboutUsProps) {
  return (
    <section id="ofirmie" className={sectionClasses}>
      <h2 className={heading.classes}>{heading.text}</h2>
      <p>{aboutUsText}</p>
    </section>
  );
}

export default AboutUs;
