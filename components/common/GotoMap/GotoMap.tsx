'use client';

import { useGotoMap } from '@/global/stateHooks';
import React from 'react';

// shadcn components
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui';
import { MapAreaMenu, MapSectionData } from './data';
import { motion } from 'framer-motion';
import { fonts } from '@/fonts';

export const GotoMap: React.FC = () => {
  const { showGotoMap, toggleShowGotoMap, mapArea, setMapArea } = useGotoMap();

  return (
    <>
      {showGotoMap && (
        <motion.div className="fixed left-[50%] top-[20%] z-[100] flex h-screen w-full -translate-x-1/2 justify-center">
          {MapAreaMenu.filter((menu) => menu.region === mapArea).map((menu, index) => (
            <div key={index}>
              <>
                {menu.links.map((link, index) => (
                  <p key={index} className={`${fonts.funkyVibes.className} text-center text-[48px] text-white`}>
                    {link.label}
                  </p>
                ))}
              </>
            </div>
          ))}
        </motion.div>
      )}

      <Drawer onClose={() => toggleShowGotoMap(false)} shouldScaleBackground>
        <DrawerTrigger
          onClick={() => toggleShowGotoMap(!showGotoMap)}
          className="fixed right-0 top-0 z-50 m-6 cursor-pointer rounded-full bg-black"
        >
          <p className="rounded-full px-4 py-2 text-[12px] uppercase text-white">Menu</p>
        </DrawerTrigger>
        <DrawerContent>
          <div className="grid h-[200px] w-full grid-cols-5 gap-5 p-5">
            {MapSectionData.map((section, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center justify-center rounded-lg bg-gray-200 p-5"
                onClick={() => {
                  setMapArea(section.slug);
                }}
              >
                <p
                  className={`text-sm font-semibold uppercase text-white mix-blend-difference ${section.slug === mapArea && 'underline'}`}
                >
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};
