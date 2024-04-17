"use client";
import JobList from "@/components/kariera/JobList";
import getData from "@/lib/get-data";
import { jobOffersRequest } from "@/lib/job-offers-request";
import { useEffect, useState } from "react";

function NoResultsMessage() {
  return (
    <p className="my-16 text-3xl">Na tą chwilę nie mamy otwarte pozycje.</p>
  );
}

export default function Career() {
  const [jobOffers, setJobOffers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData(jobOffersRequest.URL).then((response) => {
      setJobOffers(response);
      console.log(response);
    });
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <p className="my-16 text-3xl">Ładuję oferty pracy...</p>
  ) : !isLoading && jobOffers.length < 1 ? (
    <NoResultsMessage />
  ) : (
    <JobList jobs={jobOffers} />
  );
}
