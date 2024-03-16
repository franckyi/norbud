import { ServiceProps } from "@/types/services-props";

const heading = {
  classes: "mt-16 mb-8 text-center text-2xl font-extrabold uppercase",
  text: "Usługi",
};

const numberClasses =
  "p-2 lg:p-4 max-md:w-32 max-md:h-32 w-40 h-40 flex justify-center items-center font-bold border border-2 border-solid border-green-700 hover:bg-green-700 hover:text-white";

type ServicesProps = ServiceProps[];

function OurServices({ services }: { services: ServicesProps }) {
  return (
    <>
      <h2 className={heading.classes}>{heading.text}</h2>
      <section
        id="service"
        className="lg:w-2/5 max-md:p-4 mx-auto my-16 text-center"
      >
        <div className="mx-auto flex flex-wrap gap-4 justify-center text-center">
          {services.map((service: ServiceProps) => (
            <p className={numberClasses} key={service.id}>
              {service.title.rendered}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}

export default OurServices;
