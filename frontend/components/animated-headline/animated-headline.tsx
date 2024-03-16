"use client";
import { useState, useEffect } from "react";
import { tektur } from "../common/fonts";
import "./animated-headline.css";

const interval = 2000;
const words = ["Solidność", "Innowacyjność", "Doświadczenie", "Nowoczesność"];

function AnimatedHeadline() {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fading-text text-4xl lg:my-8 lg:text-9xl">
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
}

export default AnimatedHeadline;
