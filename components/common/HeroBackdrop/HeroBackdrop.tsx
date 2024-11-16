'use client';

import Image from 'next/image';
import React, { useLayoutEffect, useRef } from 'react';

// Gsap
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Assets
import { mountain_one, mountain_three, sky } from '@/public';
import { fonts } from '@/fonts';
import { ImageInfo } from '../ImageInfo';
import { useHandleImageInfo } from '@/global/stateHooks';

export const HeroBackdrop: React.FC = () => {
  const { setShowImageInfo, setImageInfo } = useHandleImageInfo();
  const container = useRef<HTMLDivElement>(null);

  // imageRefs
  const sky_ref = useRef<HTMLImageElement>(null);
  const mountain_one_ref = useRef<HTMLImageElement>(null);
  const mountain_two_ref = useRef<HTMLImageElement>(null);
  const mountain_three_ref = useRef<HTMLImageElement>(null);
  const pravah_ref = useRef<HTMLDivElement>(null);

  // register scrollTrigger and create timeline
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: 'top top',
        end: 'bottom top',
        // markers: true,
      },
    });
    timeline
      .fromTo(mountain_one_ref.current, { y: 200 }, { y: -100 })
      .fromTo(pravah_ref.current, { y: 0 }, { y: -200 }, '0')
      .fromTo(mountain_two_ref.current, { y: 100, ease: 'power1.inOut' }, { y: -100 }, '0')
      .fromTo(mountain_three_ref.current, { y: 0, ease: 'power1.inOut' }, { y: -150 }, '0')
      .fromTo(sky_ref.current, { y: 0, ease: 'power1.inOut' }, { y: -100 }, '0');
  }, []);

  return (
    <>
      <div ref={container} className="relative h-screen w-full items-center justify-center overflow-hidden">
        {/* <ImageAppearAnimation imageContainerRef={container} /> */}
        <Image
          src={sky}
          ref={sky_ref}
          alt="sky"
          width={2000}
          height={2000}
          unoptimized
          className="absolute left-0 top-0 w-full object-cover"
        />

        <div
          className="absolute bottom-8 right-[10%] z-50"
          onClick={() => {
            setShowImageInfo(true);
            setImageInfo({
              imageTitle: 'hero backdrop',
              imageDescription: 'hello',
            });
          }}
        >
          <ImageInfo />
        </div>

        <div
          ref={pravah_ref}
          className="absolute left-[50%] top-[100px] w-[500px] -translate-x-1/2 leading-none text-[#476b7f]"
        >
          <p className={`text-center ${fonts.funkyVibes.className} text-[120px]`}>Pravah</p>
          <p className={`text-center ${fonts.funkyVibes.className} -mt-3 text-[60px]`}>2025</p>
        </div>
        <Image
          src={mountain_one}
          ref={mountain_one_ref}
          alt="mountain_one"
          width={2000}
          height={2000}
          unoptimized
          className="absolute left-0 top-[80px] z-30"
        />
        <Image
          src={mountain_three}
          ref={mountain_three_ref}
          alt="mountain_three"
          width={2000}
          height={2000}
          unoptimized
          className="absolute right-0 top-[362px] w-full"
        />
      </div>
    </>
  );
};
