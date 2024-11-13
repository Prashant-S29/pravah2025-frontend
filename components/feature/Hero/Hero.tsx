'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import React, { useLayoutEffect, useRef } from 'react';

import { mountain_one, mountain_three, sky } from '@/public';

export const Hero: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  const sky_ref = useRef<HTMLImageElement>(null);
  const mountain_one_ref = useRef<HTMLImageElement>(null);
  const mountain_two_ref = useRef<HTMLImageElement>(null);
  const mountain_three_ref = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: 'top top',
        end: 'bottom top',
        markers: true,
      },
    });
    timeline
      .fromTo(mountain_one_ref.current, { y: 200 }, { y: -100 })
      .fromTo(mountain_two_ref.current, { y: 100, ease: 'power1.inOut' }, { y: -100 }, '0')
      .fromTo(mountain_three_ref.current, { y: 0, ease: 'power1.inOut' }, { y: -150 }, '0')
      .fromTo(sky_ref.current, { y: 0, ease: 'power1.inOut' }, { y: -100 }, '0');
  }, []);

  return (
    <>
      <div ref={container} className="relative h-screen w-full items-center justify-center overflow-hidden">
        <Image
          src={sky}
          ref={sky_ref}
          alt="sky"
          width={2000}
          height={2000}
          unoptimized
          className="fixed left-0 top-0 w-full object-cover"
        />
        <Image
          src={mountain_one}
          ref={mountain_one_ref}
          alt="mountain_one"
          width={2000}
          height={2000}
          unoptimized
          className="fixed left-0 top-[80px] z-30"
        />
        <Image
          src={mountain_three}
          ref={mountain_three_ref}
          alt="mountain_three"
          width={2000}
          height={2000}
          unoptimized
          className="fixed right-0 top-[362px] w-full"
        />
      </div>
      <div className="relative z-40 h-screen w-full bg-pink-400"></div>
    </>
  );
};
