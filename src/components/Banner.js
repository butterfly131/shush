import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "./Banner.css";
import Cake from "./Cake";
import BeeAnimation from "./BeeAnimation";
import ButterflyAnimation from "./ButterflyAnimation";
import Arrow from "./Arrow";

const Banner = () => {
  // const [showArrow, setShowArrow] = useState(false);
  const eventDate = new Date(`${new Date().getFullYear()}-09-05`);
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  function calculateTimeRemaining() {
    const currentTime = new Date();
    const timeDiff = eventDate - currentTime;

    if (timeDiff < 0) {
      // Event date has passed, return remaining time as 0
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  function formatNumber(value) {
    return value.toString().padStart(2, "0");
  }

  function renderCountdown() {
    return (
      <div className="countdown">
        <div
          className={`countdown-item ${
            timeRemaining.days === 0 ? "blink" : ""
          }`}
        >
          <span className="countdown-value">
            {formatNumber(timeRemaining.days)}
          </span>
          <span className="countdown-label">Days</span>
        </div>
        <div
          className={`countdown-item ${
            timeRemaining.hours === 0 ? "blink" : ""
          }`}
        >
          <span className="countdown-value">
            {formatNumber(timeRemaining.hours)}
          </span>
          <span className="countdown-label">Hours</span>
        </div>
        <div
          className={`countdown-item ${
            timeRemaining.minutes === 0 ? "blink" : ""
          }`}
        >
          <span className="countdown-value">
            {formatNumber(timeRemaining.minutes)}
          </span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div
          className={`countdown-item ${
            timeRemaining.seconds === 0 ? "blink" : ""
          }`}
        >
          <span className="countdown-value">
            {formatNumber(timeRemaining.seconds)}
          </span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
    );
  }

  // Just testing git---- 


  return (
    <div className="body-banner">
      <div className="overlay">
        <section className="banner">
          <div className="beee">
            <BeeAnimation />
            <div className="butterfly">
            <ButterflyAnimation/>
            </div>
          </div>
          {/* <section className={`banner ${showArrow ? 'show-arrow' : ''}`}></section> */}
          <div className="arrow">
            <Arrow />
            {/* {showArrow && <Arrow />} */}
          </div>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            colors={["#FFC107", "#FF5722", "#FFEB3B", "#FF9800"]}
          />
          <div className="banner-content">
            {renderCountdown()}
            <h1 className="banner-title">
              Happy Birthday, <strong>Busy Bee!</strong>
            </h1>
            <p className="banner-message">
              Wishing you a day filled with joy and laughter!
            </p>
          </div>
          <Cake />
        </section>
      </div>
    </div>
  );
};

export default Banner;
