"use client";
import React, { useState, useEffect } from "react";
import "./fading-headline.css";
import { tektur } from "../common/fonts";
import { FadingHeadlineProps } from "@/app/types/fading-headline-props";

const FadingHeadline: React.FC<FadingHeadlineProps> = ({
  words,
  interval = 300,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <div className="fading-text text-4xl max-md:my-8 lg:text-9xl">
      {words.map((word, index) => (
        <span
          className={`${tektur.className} ${
            index === currentWordIndex ? "visible" : "hidden"
          }`}
          key={index}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default FadingHeadline;
