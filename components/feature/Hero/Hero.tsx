'use client';

import React from 'react';
import Image from 'next/image';

// Fonts
import { fonts } from '@/fonts';

// Assets
import { cultural_photos } from '@/public';

// Components
import { HeroBackdrop, ImageInfo } from '@/components/common';

import { cubicBezier, motion } from 'framer-motion';
import { ImagePopupAnimationVariants } from '@/animation';
import { useHandleImageInfo } from '@/global/stateHooks';

export const Hero: React.FC = () => {
  const { setImageInfo, setShowImageInfo } = useHandleImageInfo();

  return (
    <>
      <HeroBackdrop />
      <div className="relative z-40 min-h-[500vh] w-full bg-[#fffff7] px-[200px] pt-[50px]">
        <section className="leading-none">
          <p className={`text-center ${fonts.funkyVibes.className} text-2xl`}>Welcome to</p>
          <p className={`text-center ${fonts.funkyVibes.className} -mt-2 text-[48px]`}>North India</p>
        </section>

        <section className="flex justify-evenly">
          <motion.div
            variants={ImagePopupAnimationVariants}
            initial="initial"
            whileInView={{
              rotate: 10,
              scale: 1,
            }}
            exit="exit"
            transition={{ duration: 0.5, ease: cubicBezier(0.5, 0, 0.5, 1) }}
            viewport={{ once: true }}
            className="relative w-fit"
          >
            <Image
              src={cultural_photos.four}
              unoptimized
              alt="cultural_photo"
              width={800}
              height={800}
              className="mt-3 w-[400px]"
            />
            <div
              className="absolute bottom-[100px] right-0 z-50"
              onClick={() => {
                setShowImageInfo(true);
                setImageInfo({
                  imageTitle: 'hero',
                  imageDescription: 'hello',
                });
              }}
            >
              <ImageInfo />
            </div>
          </motion.div>
        </section>
      </div>
    </>
  );
};
