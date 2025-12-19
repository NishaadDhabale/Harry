'use client';
import { use, useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type Variants,
} from 'motion/react';

import useStore from '../components/store';

export default function Story() {
  const [isplaying, setisplaying] = useState(true);
  const [showQuote, setshowQuote] = useState(false);

  const firstRef = useRef<HTMLDivElement>(null);
  const endingRef = useRef<HTMLVideoElement>(null);
  const speachRef = useRef<HTMLVideoElement>(null);
  const horizantalRef = useRef<HTMLDivElement>(null);
  const lastDivRef = useRef<HTMLDivElement>(null);

  const ismute = useStore((state) => state.ismute);

  useEffect(() => {
    if (endingRef.current && speachRef.current) {
      endingRef.current.muted = !ismute;
      speachRef.current.muted = !ismute;
    }
  }, [ismute]);

  useEffect(() => {
    const playvedio = async () => {
      if (endingRef.current && isplaying) {
        await endingRef.current.play();
      }
    };
    playvedio();
  }, [isplaying]);

  useEffect(() => {
    if (endingRef.current && !isplaying) {
      endingRef.current.pause();
    }
  }, [isplaying]);

  const { scrollYProgress: firstScroll } = useScroll({
    target: firstRef,
    offset: ['start start', 'end start'],
  });
  const { scrollYProgress: lastDiv } = useScroll({
    target: lastDivRef,
    offset: ['start end', 'start start'],
  });

  useMotionValueEvent(lastDiv, 'change', (latest) => {
    if (speachRef.current) {
      if (latest >= 0.6) {
        speachRef.current.play();
      } else {
        speachRef.current.pause();
      }
    }
  });

  const textY = useTransform(firstScroll, [0, 1], ['100%', '-100%']);
  const opacityfirst = useTransform(
    firstScroll,
    [0, 0.75, 0.88, 1],
    [0, 0.7, 0, 0]
  );

  return (
    <div className="h-auto flex flex-col">
      <div ref={firstRef} className="h-screen">
        <div className="absolute flex overflow-hidden justify-center items-end h-screen w-full bg-linear-to-b from-transparent from-90% to-black ">
          <motion.h1
            style={{ y: textY, opacity: opacityfirst, filter: 'blur(10px)' }}
            animate={{ filter: 'blur(0px)' }}
            className="font-tt lg:text-7xl md:text-6xl"
          >
            These are Dark Times
          </motion.h1>
        </div>
        <video
          src="https://d2k4kblueslspf.cloudfront.net/startref.mp4"
          ref={endingRef}
          loop
          className="object-cover h-screen"
        />
      </div>

      <div ref={horizantalRef} className="h-[500vh] relative">
        <motion.div
          style={{ opacity: 0, filter: 'blur(10px)' }}
          animate={showQuote ? { opacity: 1, filter: 'blur(0px)' } : {}}
          className="absolute bottom-0 h-screen w-full flex justify-center items-center"
        >
          <h1 className="font-lacto text-4xl">
            "Greatness inspires envy, envy engenders spite, spite spawns lies."
          </h1>
        </motion.div>

        <div className="h-screen sticky top-0 flex items-center overflow-hidden"></div>
      </div>

      <motion.div
        ref={lastDivRef}
        className="h-screen w-full  flex items-center justify-center"
      >
        <div className="px-10">
          <video
            ref={speachRef}
            src="https://d2k4kblueslspf.cloudfront.net/speech.mp4"
            loop
            className=" rounded-3xl"
          />
        </div>
      </motion.div>
    </div>
  );
}
