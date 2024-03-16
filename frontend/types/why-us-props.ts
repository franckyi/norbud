type WhyUsGroup = {
  id: number;
  heading: string;
  desc: string;
};

export type WhyUsProps = {
  whyUsHeading: string;
  whyUsList: WhyUsGroup[];
  whyUsFinalText: string;
};
