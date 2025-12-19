'use client'
import {  useEffect, useState } from 'react';
import Story from '../pages/Story';
import useStore from '@/components/store';


export default function Home() {
  const [Showpopup, setShowpopup] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const setmuted = useStore((state) => state.setmuted);


  useEffect(() => {
    if (!sessionStorage.getItem('loadingScreen')) {
      setisLoading(true);
    }
  }, []);

  useEffect(() => {
    const checkScreensize = () => {
      setShowpopup(window.innerWidth < 640);
    };

    checkScreensize();

    window.addEventListener('resize', checkScreensize);

    return () => window.removeEventListener('resize', checkScreensize);
  }, []);

   if (Showpopup) {
    return (
      <div className=" h-screen w-full flex items-center justify-center">
        <div className="flex flex-col justify-center items-center h-50 w-full px-5 gap-2 ">
          {
            //ixon
          }
          <h1 className="text-bloodRed font-barlow font-bold">
            BEST EXPRIENCE ON LARGER SCREEN{' '}
          </h1>
          <p className="w-80 text-center font-barlow">
            This webiste is optimised for bigger screen. Please open it in a
            PC/Tablet for best exprience, Thank you.
          </p>
        </div>
      </div>
    );
  }


  return isLoading ? (
    <div className="h-screen w-full relative">
      <img
        src="https://d2k4kblueslspf.cloudfront.net/time.webp"
        alt="loaderScreen"
        className="absolute bottom-0"
      />
      <div className=" h-full w-full z-10 absolute flex justify-center font-barlow font-bold">
        <div className="w-full flex flex-col items-center m-8 ">
          <div className="lg:text-2xl text-neutral-200">
            For the best experience, please switch to full-screen mode by
            pressing F11 on Windows or the green maximize button on Mac.
          </div>
          <div className="flex flex-col gap-5 text-xl text-neutral-200">
            And also I have added some background audio to enhance your
            experience. I would recommend you to continue unmuted.
            <div className="flex justify-end gap-5 px-10 text-sm">
              <button
                onClick={() => {
                  sessionStorage.setItem('loadingScreen', 'true');
                  setisLoading(false);
                  setmuted(false);
                }}
                className="px-4 py-1 rounded-2xl transition-all duration-250  cursor-pointer hover:text-black hover:bg-neutral-500"
              >
                {' '}
                Muted
              </button>
              <button
                onClick={() => {
                  sessionStorage.setItem('loadingScreen', 'true');
                  setisLoading(false);
                  setmuted(true);
                }}
                className="px-4 py-1 rounded-2xl transition-all duration-250 text-bloodRed cursor-pointer hover:bg-bloodRed hover:text-black"
              >
                {' '}
                Unmuted
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Story />
  );
};

