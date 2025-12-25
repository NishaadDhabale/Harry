'use client';
import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Server,
  Database,
  Layers,
  ChevronRight,

} from 'lucide-react';

import { useRouter } from "next/navigation";

const Home = () => {

  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const profileData = {
    name: 'Nishaad Dhabale',
    title: 'FULLSTACK WEB DEVELOPER',
    location: 'Based in Pune',
    description:
      'Architecting digital products with a focus on precision, performance, and minimalist aesthetics. I bridge the gap between complex backend logic and intuitive frontend experiences.',
    services: [
      {
        icon: <Layers size={20} />,
        title: 'Frontend Architecture',
        details: 'React, Next.js, TypeScript, Tailwind CSS, Framer Motion',
      },
      {
        icon: <Server size={20} />,
        title: 'Backend Engineering',
        details: 'Node.js, Typescript, MongoDB, REST APIs, WebSockets, Mongoose, Java, Express.js, PostgreSQL, Prisma ORM,',
      },
      {
        icon: <Database size={20} />,
        title: 'Dev-Tools',
        details: 'Git, GitHub, Vercel, Postman, LeetCode, Vim, Visual Studio, IntelliJ, Hostinger',
      },
    ],
    contact: {
      email: 'nishaad.d.official@gmail.com',
      github: 'https://github.com/NishaadDhabale',
      linkedin: 'https://www.linkedin.com/in/nishaad-dhabale-7a6466298/',
    },
  };

  return (
    <div className="min-h-screen bg-black text-neutral-300 font-sans selection:bg-white selection:text-black">
      {/* Dynamic Background Grain Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 flex justify-between items-center px-6 py-8 md:px-12 mix-blend-difference">
         <span onClick={()=>{
          router.push('/')
        }}className="text-xl font-black cursor-pointer tracking-tighter text-white">
          Home
        </span>
        <div className="hidden md:flex gap-12 text-[14px] tracking-[0.3em] uppercase font-bold text-neutral-500">
          <a
            href="#contact"
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>
        <button className="md:hidden text-white">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <span className="inline-block text-[10px] tracking-[0.5em] uppercase text-neutral-500 mb-6 font-bold">
                  {profileData.location}
                </span>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.9] mb-8">
                  {profileData.name}
                </h1>
                <p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed mb-10 font-light">
                  <span className="text-white font-medium">
                    {profileData.title}.
                  </span>{' '}
                  {profileData.description}
                </p>
                <div className="flex flex-wrap gap-6">
                  <a
                    href="#contact"
                    className="group flex items-center gap-3 py-2 border-b-2 border-white text-white font-bold tracking-widest text-xs uppercase hover:gap-6 transition-all"
                  >
                    Start a project
                  </a>
                  <div className="flex gap-6 items-center border-l border-neutral-800 pl-6">
                    <Github
                    onClick={()=>{
                      window.open('https://github.com/NishaadDhabale')
                    }}
                      size={18}
                      className="hover:text-white cursor-pointer transition-colors"
                    />
                    <Linkedin
                    onClick={()=>{
                      window.open('https://www.linkedin.com/in/nishaad-dhabale-7a6466298/')
                    }}
                      size={18}
                      className="hover:text-white cursor-pointer transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Geometric Mask Image */}
              <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative group">
                  {/* Outer Frame */}
                  <div className="absolute -inset-4 border border-neutral-900 -z-10 group-hover:inset-0 transition-all duration-700"></div>

                  {/* The Mask */}
                  <div
                    className="w-64 h-80 md:w-80 md:h-112.5 bg-neutral-900 overflow-hidden grayscale contrast-125 transition-all duration-700 group-hover:grayscale-0 group-hover:contrast-100"
                    style={{
                      clipPath: 'polygon(10% 0, 100% 0%, 90% 100%, 0% 100%)',
                    }}
                  >
                    <img
                      src="./pfp3.jpeg"
                      alt="Portrait"
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0  bg-linear-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Aesthetic Label */}
                  <div className="absolute -bottom-6 -right-6 bg-white text-black p-4 hidden md:block">
                    <p className="text-[10px] font-black tracking-widest leading-none">
                      EST. 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="about" className="py-32 px-6 md:px-12 lg:px-24 border-y border-neutral-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-4 flex items-center">

                <h3 className="text-4xl md:text-5xl font-black tracking-tighter  text-white leading-tight uppercase">
                  Tech Stack<br /><br />
                </h3>
              </div>
              <div className="lg:col-span-8 space-y-px bg-neutral-900">
                {profileData.services.map((service, idx) => (
                  <div key={idx} className="bg-black p-10 group hover:bg-neutral-950 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex gap-8 items-start">
                      <span className="text-neutral-700 text-sm font-bold mt-1">0{idx + 1}</span>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">{service.title}</h4>
                        <p className="text-neutral-500 text-sm">{service.details}</p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xs tracking-[0.5em] uppercase text-neutral-500 font-bold mb-12">
              Get in touch
            </h2>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="text-3xl md:text-6xl lg:text-[3.4rem] font-black tracking-tighter text-white hover:text-neutral-500 transition-colors  wrap-break-word uppercase"
            >
              {profileData.contact.email}
            </a>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="border-t border-neutral-900 pt-8">
                <p className="text-[10px] tracking-widest text-neutral-500 uppercase font-bold mb-4">
                  Availability
                </p>
                <p className="text-white text-sm">
                  Open for full-time Internship opportunities.
                </p>
              </div>
              <div className="border-t border-neutral-900 pt-8">
                <p className="text-[10px] tracking-widest text-neutral-500 uppercase font-bold mb-4">
                  Social
                </p>
                <div className="flex gap-8 text-white text-sm font-bold tracking-widest uppercase">
                  <a
                    target="blank"
                    href="https://github.com/NishaadDhabale"
                    className="hover:line-through"
                  >
                    GitHub
                  </a>
                  <a
                    target="blank"
                    href="https://www.linkedin.com/in/nishaad-dhabale-7a6466298/"
                    className="hover:line-through"
                  >
                    LinkedIn
                  </a>
                  <a
                    target="blank"
                    href="https://x.com/trynabegeekie"
                    className="hover:line-through"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] tracking-widest text-neutral-700 font-bold uppercase">
          © 2024 Alex Rivera / All Rights Reserved
        </p>
        <div className="flex gap-8">
          <span className="text-[10px] tracking-widest text-neutral-700 font-bold uppercase cursor-pointer hover:text-white transition-colors">
            Privacy
          </span>
          <span className="text-[10px] tracking-widest text-neutral-700 font-bold uppercase cursor-pointer hover:text-white transition-colors">
            Terms
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
