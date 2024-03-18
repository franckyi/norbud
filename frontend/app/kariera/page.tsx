"use client";
import getData from "@/lib/get-data";
import { jobOffersRequest } from "@/lib/job-offers-request";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

const headingClasses =
  "my-16 text-center text-2xl font-extrabold uppercase dark:text-stone-200";

interface Job {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

function JobList({ jobs }: { jobs: Job[] }) {
  return (
    <>
      <h3 className={headingClasses}>Obecnie poszukujemy</h3>
      {jobs.map((job) => (
        <div className="my-8 mx-auto lg:px-40" key={job.id}>
          <h4 className="my-4 text-3xl">{job.title.rendered}</h4>
          <div className="p-8 bg-stone-200 dark:bg-stone-800 rounded-xl text-left">
            {parse(job.content.rendered)}
          </div>
        </div>
      ))}
    </>
  );
}

export default function Career() {
  const [jobOffers, setJobOffers] = useState<any[]>([]);
  useEffect(() => {
    getData(jobOffersRequest.URL).then((response) => {
      setJobOffers(response);
      console.log(response);
    });
  }, []);

  return jobOffers.length < 1 ? (
    <p className="my-16 text-3xl">Na tą chwilę nie mamy otwarte pozycje.</p>
  ) : (
    <JobList jobs={jobOffers} />
  );
}
