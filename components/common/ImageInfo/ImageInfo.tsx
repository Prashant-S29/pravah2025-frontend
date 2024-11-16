'use client';

import { useHandleImageInfo } from '@/global/stateHooks';
import React from 'react';

// shadcn components
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui';

export const ImageInfo: React.FC = () => {
  const { imageInfo } = useHandleImageInfo();

  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <div className="aspect-square min-w-[20px] max-w-[20px] animate-spin cursor-pointer rounded-full border-[2px] border-dashed border-black bg-black bg-transparent p-[4px]">
            <div className="h-full w-full rounded-full bg-black" />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="h-[300px] w-full bg-white px-5">
            <div className="flex gap-5">
              <div className="h-[200px] w-[350px] rounded-lg bg-gray-200"></div>
              <div>
                <p>{imageInfo.imageTitle}</p>
                <p>{imageInfo.imageDescription}</p>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};
