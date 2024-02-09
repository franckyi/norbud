import { WhyUsProps } from "@/app/types/why-us-props";

async function WhyUs({ whyUsHeading, whyUsList, whyUsFinalText }: WhyUsProps) {
  return (
    <section id="about-us" className="w-1/3 mx-auto my-16 text-center">
      <h2 className="my-8 text-2xl font-extrabold uppercase">{whyUsHeading}</h2>

      {/* "whyUsGroup1": {
            "heading": "Innowacyjność Od Początku Działalności",
            "desc": "Pomimo młodego wieku firmy, inwestujemy w nowoczesny sprzęt, który staje się coraz bardziej zaawansowany. To nasza odpowiedź na wyzwania współczesnego budownictwa."
        }, */}

      {/* {whyUsList.map((obj, index) => (
        <div key={obj.heading}>
          <span>{index}</span>
          <p>{obj.desc}</p>
        </div>
      ))} */}

      <p>{whyUsFinalText}</p>
    </section>
  );
}

export default WhyUs;
