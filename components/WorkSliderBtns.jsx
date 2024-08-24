"use client";

import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const updateButtons = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    // Initial update
    updateButtons();

    // Add event listeners
    swiper.on('slideChange', updateButtons);
    swiper.on('reachBeginning', () => setIsBeginning(true));
    swiper.on('reachEnd', () => setIsEnd(true));
    swiper.on('fromEdge', () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });

    // Cleanup listeners on unmount
    return () => {
      swiper.off('slideChange', updateButtons);
      swiper.off('reachBeginning', () => setIsBeginning(true));
      swiper.off('reachEnd', () => setIsEnd(true));
      swiper.off('fromEdge', () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      });
    };
  }, [swiper]);

  return (
    <div className={containerStyles}>
      <button
        className={`${btnStyles} ${isBeginning ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className={`${btnStyles} ${isEnd ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
