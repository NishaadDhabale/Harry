'use client';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type Variants,
} from 'motion/react';
import useStore from '../components/store';
import {
  sentence,
  containerVariants,
  wordVariants,
} from '@/components/variants';

export default function Story() {
  const [isplaying, setisplaying] = useState(true);
  const [showQuote, setshowQuote] = useState(false);
  const ismute = useStore((state) => state.ismute);
  const [speedplaying, setspeedplaying] = useState(false);

  const firstRef = useRef<HTMLDivElement>(null);
  const patrounousRef = useRef<HTMLDivElement>(null);
  const endingRef = useRef<HTMLVideoElement>(null);
  const speachRef = useRef<HTMLVideoElement>(null);
  const horizantalRef = useRef<HTMLDivElement>(null);
  const lastDivRef = useRef<HTMLDivElement>(null);
  const dumbleref = useRef<HTMLDivElement>(null);
  const Dumbvidref = useRef<HTMLVideoElement>(null);
  const speedref = useRef<HTMLVideoElement>(null);
  const voldermortRef = useRef<HTMLDivElement>(null);
  const startaudioRef = useRef<HTMLAudioElement | null>(null);
  const themeaudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (
      endingRef.current &&
      startaudioRef.current &&
      themeaudioRef.current &&
      speachRef.current
    ) {
      endingRef.current.muted = !ismute;
      speachRef.current.muted = !ismute;
      startaudioRef.current.muted = !ismute;
      themeaudioRef.current.muted = !ismute;
    }
  }, [ismute]);

  useEffect(() => {
    const playvedio = async () => {
      if (endingRef.current && startaudioRef.current && isplaying) {
        await endingRef.current.play();
        await startaudioRef.current.play();
      }
    };
    playvedio();
  }, [isplaying]);

  useEffect(() => {
    if (endingRef.current && startaudioRef.current && !isplaying) {
      endingRef.current.pause();
      startaudioRef.current.pause();
    }
  }, [isplaying]);

  useEffect(() => {
    const playvideo = async () => {
      if (speedref.current && themeaudioRef.current && speedplaying) {
        await themeaudioRef.current.play();
        await speedref.current.play();
      }
    };
    playvideo();
  }, [speedplaying]);

  useEffect(() => {
    if (speedref.current && themeaudioRef.current && !speedplaying) {
      themeaudioRef.current.pause();
      speedref.current.pause();
    }
  }, [speedplaying]);

  const { scrollYProgress: firstScroll } = useScroll({
    target: firstRef,
    offset: ['start start', 'end start'],
  });
  const { scrollYProgress: horizantalScroll } = useScroll({
    target: horizantalRef,
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

  useMotionValueEvent(horizantalScroll, 'change', (latest) => {
    if (speedref.current && themeaudioRef.current) {
      themeaudioRef.current.volume = themevolume.get();
      if (latest >= 0.128 && latest <= 0.36) {
        setspeedplaying(true);
      } else {
        setspeedplaying(false);
      }
    }
  });

  useMotionValueEvent(firstScroll, 'change', (latest) => {
    if (endingRef.current) {
      endingRef.current.volume = volmueControl.get();
      if (latest >= 0.9) {
        setisplaying(false);
      } else {
        setisplaying(true);
      }
    }
  });

  useMotionValueEvent(horizantalScroll, 'change', (latest) => {
    if (latest >= 1) {
      setshowQuote(true);
    } else {
      setshowQuote(false);
    }
  });

  ///

  const alwaystext = useTransform(horizantalScroll, [0.06, 0.1425], [202, -65]);
  const harry1 = useTransform(horizantalScroll, [0.22, 0.3], [-60, 20]);
  const height = useTransform(
    horizantalScroll,
    [0.19, 0.24, 0.27, 0.33],
    ['47%', '18%', '18%', '47%']
  );
  const reserctedText = useTransform(
    horizantalScroll,
    [0.85, 0.92],
    [-120, 50]
  );
  const reserctedText2 = useTransform(
    horizantalScroll,
    [0.85, 0.92],
    [-100, 40]
  );

  const owninigText = useTransform(
    horizantalScroll,
    [0.42, 0.44],
    ['-125%', '0%']
  );
  const owninigText1 = useTransform(
    horizantalScroll,
    [0.42, 0.44],
    ['-125%', '0%']
  );
  const owninigText2 = useTransform(
    horizantalScroll,
    [0.43, 0.44],
    ['-170%', '0%']
  );

  const owninigText4 = useTransform(
    horizantalScroll,
    [0.52, 0.57],
    ['125%', '-80%']
  );

  const slideText = useTransform(horizantalScroll, [0.28, 0.56], [-500, 900]);

  const youvtext = useTransform(horizantalScroll, [0.58, 0.631], [-650, 0]);
  const xTransfrom = useTransform(horizantalScroll, [0, 1], ['0vw', '-800vw']);
  const textY = useTransform(firstScroll, [0, 1], ['100%', '-100%']);
  const opacityfirst = useTransform(
    firstScroll,
    [0, 0.75, 0.88, 1],
    [0, 0.7, 0, 0]
  );

  const videoScroll = useTransform(horizantalScroll, [0.58, 0.82], [0, 1]);
  const dtext1 = useTransform(horizantalScroll, [0.69, 0.75], [-370, -170]);
  const dtext2 = useTransform(horizantalScroll, [0.705, 0.78], [120, -40]);

  useMotionValueEvent(videoScroll, 'change', (latest) => {
    const video = Dumbvidref.current;
    if (video && video.duration) {
      video.pause();

      video.currentTime = video.duration * latest;
    }
  });

  const volmueControl = useTransform(firstScroll, [0, 1], [1, 0]);
  const themevolume = useTransform(
    horizantalScroll,
    [0.128, 0.244, 0.36],
    [0, 1, 0]
  );
  ///

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
        <audio ref={startaudioRef} src="./snape.mp3" loop className="h-8" />

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

        <div className="h-screen sticky top-0 flex items-center overflow-hidden">
          <motion.div style={{ x: xTransfrom }} className="flex">
            <div
              ref={patrounousRef}
              className="h-screen w-screen shrink-0 bg-black flex items-center justify-center relative"
            >
              <img
                src="https://d2k4kblueslspf.cloudfront.net/Patronous.webp"
                alt="voldermortref"
              />
              <motion.div
                className="absolute bottom-20 flex flex-wrap items-center justify-center font-extrabold text-3xl  text-neutral-800"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  amount: 0.1,
                }}
              >
                {sentence.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className="mr-2 word"
                    variants={wordVariants}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <div className="h-screen w-screen shrink-0 bg-black flex items-center justify-center relative">
              <img
                src="https://d2k4kblueslspf.cloudfront.net/SnapeAndLily.webp"
                alt="insonimia"
                className="relative"
              />
              <div className="absolute  h-full w-full flex flex-col justify-center items-center gap-50">
                <motion.h1
                  style={{ y: alwaystext, opacity: 1 }}
                  className="lg:text-6xl z-10 md:text-5xl mr-10 text-rose-900  font-barlow font-bold "
                >
                  Always..
                </motion.h1>
              </div>
              <img
                src="https://d2k4kblueslspf.cloudfront.net/SnapeAndLilymask.webp"
                alt="insominaMask"
                className="absolute"
              />
            </div>

            <div className="h-screen w-screen z-0 shrink-0 bg-black flex items-center justify-center relative overflow-hidden">
              <audio
                ref={themeaudioRef}
                src="./themee.mp3"
                loop
                className="h-8"
              />

              <video
                src="./Speedup.mp4"
                muted
                ref={speedref}
                className=" absolute h-screen"
              ></video>

              <img
                src="https://d2k4kblueslspf.cloudfront.net/harrymask.webp"
                className="absolute z-30"
                alt=""
              />
              <div></div>

              <motion.div
                style={{ height: height }}
                className="w-screeen absolute z-10 inset-0 flex bg-black"
              ></motion.div>

              <motion.div
                style={{ height: height }}
                className="w-full absolute z- bottom-0 flex bg-black"
              ></motion.div>
              <h1 className="absolute z-20 text-8xl font-halfdeath text-bloodRed   top-60 right-20">
                YOU ARE A WIZARD, HARRY
              </h1>

              <motion.div
                className="text-neutral-700 absolute z-20 h-5 w-full text-4xl font-DD scale-x-145 tracking-[8px] inset-0 flex flex-col overflow-visible items-center justify-between py-7"
                style={{ y: harry1 }}
              >
                <h1>THE BOY WHO LIVED</h1>
              </motion.div>
            </div>
            {/*

            <div className="h-screen w-screen z-0 shrink-0 bg-black flex items-center justify-center relative">
              <img
                src="https://d2k4kblueslspf.cloudfront.net/harry.webp"
                alt="reserrected"
              />


             <motion.div  className='text-neutral-700 absolute z-0 h-5 w-full text-4xl font-DD scale-x-145 tracking-[8px] inset-0 flex flex-col overflow-visible items-center justify-between py-7'
             style={{y:harry1}}>
                <h1>THE BOY WHO LIVED</h1>
              </motion.div>
              <h1 className="absolute text-8xl font-halfdeath text-bloodRed  top-60 right-20">
                YOU ARE A WIZARD, HARRY
              </h1>
              <h1 className="absolute text-7xl font-halfdeath text-bloodRed bottom-80 right-32">

                YOU ARE THE CHOSEN ONE
              </h1>
              <img
                src="https://d2k4kblueslspf.cloudfront.net/harrymask.webp"
                alt="reserecctedMask"
                className="absolute z-15"
              />
            </div>

*/}

            <div className="h-screen w-screen shrink-0 overflow-hidden bg-black flex items-center justify-center relative">
              <img
                src="https://d2k4kblueslspf.cloudfront.net/leviosa.webp"
                alt="slide"
              />
              <motion.div
                style={{ x: slideText }}
                className="absolute h-full w-full flex text-8xl overflow-hidden font-grandmaster justify-center items-center"
              >
                {Array(25)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-8xl font-grandmaster px-4">
                      LEVIOSA
                    </span>
                  ))}
              </motion.div>
              <img
                src="https://d2k4kblueslspf.cloudfront.net/leviosamask.webp"
                alt="slideMask"
                className="absolute"
              />
            </div>

            <div className="h-screen w-screen shrink-0 overflow-hidden bg-black flex items-center justify-center relative">
              <img
                src="https://d2k4kblueslspf.cloudfront.net/kiss.webp"
                alt="owning"
              />
              <div className="absolute h-full w-full flex justify-between items-center px-5">
                <div className="flex flex-col items-start text-7xl font-barlow font-bold">
                  <motion.h1 style={{ x: owninigText }}>THE</motion.h1>
                  <motion.h1 style={{ x: owninigText1 }}>Chamber</motion.h1>
                  <motion.h1
                    style={{ x: owninigText2 }}
                    className="font-fightclub text-bloodRed"
                  >
                    Of
                  </motion.h1>
                </div>
                <div className="flex flex-col items-end text-8xl font-barlow font-bold">
                  <motion.h1
                    style={{ x: owninigText4 }}
                    className=" font-odachi font-bold tracking-[8px] text-bloodRed"
                  >
                    Love
                  </motion.h1>
                </div>

                <motion.div className="text-neutral-900 absolute h-full w-full text-3xl font-semibold  tracking-[px]  flex flex-col-reverse overflow-visible items-center justify-between py-8">
                  <h1 className="pr-15">Spearmint Toothpaste</h1>
                </motion.div>
              </div>
            </div>

            <div className="h-screen w-screen shrink-0 bg-black flex items-center justify-center relative">
              <img
                src="https://d2k4kblueslspf.cloudfront.net/Unbreakablevow.webp"
                alt="dual"
              />
              {/*<div className="absolute h-full w-full flex flex-col items-end py-24 text-5xl font-barlow font-bold">
                <motion.div style={{ x: sittingText }} className="flex gap-2">
                  <h1>Will you,</h1>
                  <h1 className="text-bloodRed">Severus....</h1>
                </motion.div>
                <motion.div style={{ x: sittingText1 }} className="flex gap-4 tracking-[3px]">
                  <h1> I</h1>
                  <h1 className="text-bloodRed">Will..</h1>
                </motion.div>
              </div>*/}
              <motion.div
                className="z-10 absolute flex items-center font-lacto text-5xl negative-text tracking-[3px]   font-bold"
                style={{ x: youvtext }}
              >
                <h1 className="translate-y-9">Unbreakable-Vow</h1>
              </motion.div>
              <img
                src="https://d2k4kblueslspf.cloudfront.net/Unbreakablevowmask.webp"
                alt="dualMask"
                className="absolute"
              />
            </div>

            <div
              ref={dumbleref}
              className="h-screen w-screen shrink-0 bg-black flex items-center justify-center relative"
            >
              <video
                src="https://d2k4kblueslspf.cloudfront.net/Dumbslideintra.mp4"
                ref={Dumbvidref}
                preload="auto"
                className="object-cover h-screen"
              />

              <motion.div
                style={{ y: dtext1 }}
                className="absolute h-full w-full text-orange-200  negative-text font-barlow font-bold text-5xl flex flex-col justify-center left-50 px-5"
              >
                <h1>The Greatest Sorcerer in the world</h1>
              </motion.div>
              <motion.div
                style={{
                  y: dtext2,
                }}
                className="absolute   text-orange-100  negative-text font-barlow font-bold text-5xl bottom-40 right-70"
              >
                <h1 className="negative text">Albus Dumbledore</h1>
              </motion.div>
            </div>

            <div
              ref={voldermortRef}
              className="h-screen w-screen shrink-0 bg-black flex items-center justify-center relative"
            >
              <img
                src="https://d2k4kblueslspf.cloudfront.net/voldermort.webp"
                alt="voldermort"
              />
              <div className="absolute h-full w-full flex items-center justify-center">
                <motion.h1
                  style={{ x: reserctedText }}
                  className="text-9xl z-10 translate-y-60 translate-x-40 font-grandmaster absolute text-bloodRed "
                >
                  RESURRECTED
                </motion.h1>
                <motion.h1
                  style={{ x: reserctedText2 }}
                  className="text-[84px] font-barlow font-bold"
                >
                  The One Who Shall SHall Not be Named
                </motion.h1>
              </div>

              <img
                src="https://d2k4kblueslspf.cloudfront.net/voldermortmask.webp"
                alt="voldermortmask"
                className="absolute"
              />
            </div>
          </motion.div>
        </div>
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
