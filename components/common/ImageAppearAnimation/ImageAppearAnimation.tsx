'use client';

import React, { RefObject, useEffect, useState, useCallback, useMemo } from 'react';
import { AnimatePresence, cubicBezier, motion } from 'framer-motion';
import Image from 'next/image';
import { ImagePopupAnimationVariants } from '@/animation';

// Type
interface DivCoordinate {
  id: number;
  x: number;
  y: number;
  imageUrl: string;
}

/**
 * Checks if the mouse has clicked at least 200 pixels in either x or y direction
 * since the last position.
 * @param lastPos - The last recorded mouse position.
 * @param newPos - The new mouse position.
 * @returns A boolean indicating whether the mouse has clicked 200 pixels.
 */
const clickedSignificantDistance = (
  lastPos: { x: number; y: number } | null,
  newPos: { x: number; y: number },
): boolean => {
  if (!lastPos) return true;
  return Math.abs(newPos.x - lastPos.x) >= 200 || Math.abs(newPos.y - lastPos.y) >= 200;
};

/**
 * Adds a new div to the list of divs with a unique ID, position, and the next image URL.
 * @param setDivs - The state setter for divs.
 * @param position - The position where the new div should be created.
 * @param images - The list of image URLs to choose from.
 * @param currentIndex - The current index of the image to be displayed.
 * @param setCurrentIndex - The state setter for the current image index.
 */
const addNewDiv = (
  setDivs: React.Dispatch<React.SetStateAction<DivCoordinate[]>>,
  position: { x: number; y: number },
  images: string[],
  currentIndex: number,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
) => {
  const id = Date.now();
  const imageUrl = images[currentIndex];
  setDivs((prevDivs) => [...prevDivs, { id, x: position.x, y: position.y, imageUrl }]);

  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

  setTimeout(() => {
    setDivs((prevDivs) => prevDivs.filter((div) => div.id !== id));
  }, 1200);
};

/**
 * Handles mouse move events to add a new div if significant distance is clicked.
 * @param event - The mouse move event.
 * @param imageContainerRef - The reference to the image container element.
 * @param lastPosition - The last recorded mouse position.
 * @param setLastPosition - The state setter for the last position.
 * @param setDivs - The state setter for divs.
 * @param images - The list of image URLs.
 * @param currentImageIndex - The current image index.
 * @param setCurrentImageIndex - The state setter for the current image index.
 */
const handleMouseClick = (
  event: MouseEvent,
  imageContainerRef: RefObject<HTMLDivElement>,
  lastPosition: { x: number; y: number } | null,
  setLastPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number } | null>>,
  setDivs: React.Dispatch<React.SetStateAction<DivCoordinate[]>>,
  images: string[],
  currentImageIndex: number,
  setCurrentImageIndex: React.Dispatch<React.SetStateAction<number>>,
) => {
  if (imageContainerRef.current && imageContainerRef.current.contains(event.target as Node)) {
    const newPosition = { x: event.clientX - 70, y: event.clientY - 60 };

    if (clickedSignificantDistance(lastPosition, newPosition)) {
      addNewDiv(setDivs, newPosition, images, currentImageIndex, setCurrentImageIndex);
      setLastPosition(newPosition);
    }
  }
};

export const ImageAppearAnimation = ({ imageContainerRef }: { imageContainerRef: RefObject<HTMLDivElement> }) => {
  const [divs, setDivs] = useState<DivCoordinate[]>([]);
  const [lastPosition, setLastPosition] = useState<{ x: number; y: number } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(
    () => [
      'https://picsum.photos/700/800?random=21',
      'https://picsum.photos/700/800?random=22',
      'https://picsum.photos/700/800?random=23',
      'https://picsum.photos/700/800?random=24',
      'https://picsum.photos/700/800?random=25',
      'https://picsum.photos/700/800?random=26',
      'https://picsum.photos/700/800?random=27',
      'https://picsum.photos/700/800?random=28',
      'https://picsum.photos/700/800?random=41',
      'https://picsum.photos/700/800?random=42',
      'https://picsum.photos/700/800?random=43',
      'https://picsum.photos/700/800?random=44',
      'https://picsum.photos/700/800?random=45',
      'https://picsum.photos/700/800?random=46',
      'https://picsum.photos/700/800?random=47',
      'https://picsum.photos/700/800?random=48',
    ],
    [],
  );

  // Use useCallback to memoize the event handler function
  const memoizedHandleMouseClick = useCallback(
    (event: MouseEvent) =>
      handleMouseClick(
        event,
        imageContainerRef,
        lastPosition,
        setLastPosition,
        setDivs,
        images,
        currentImageIndex,
        setCurrentImageIndex,
      ),
    [imageContainerRef, lastPosition, currentImageIndex, images],
  );

  useEffect(() => {
    window.addEventListener('click', memoizedHandleMouseClick);

    return () => {
      window.removeEventListener('click', memoizedHandleMouseClick);
    };
  }, [memoizedHandleMouseClick]);

  return (
    <AnimatePresence>
      {divs.map((div) => (
        <motion.div
          key={div.id}
          variants={ImagePopupAnimationVariants}
          initial="initial"
          animate={{
            rotate: Math.floor(Math.random() * 61) - 30,
            scale: 1,
          }}
          exit="exit"
          style={{ left: div.x, top: div.y }}
          transition={{ type: 'keyframes', ease: cubicBezier(0.7, 0.1, 0.01, 1), duration: 1 }}
          className="pointer-events-none fixed z-50 h-[200px] w-[170px] bg-[#808080]"
        >
          <div className="relative h-full w-full">
            <Image src={div.imageUrl} alt="image" fill draggable={false} className="object-cover" />
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};
