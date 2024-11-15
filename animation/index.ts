import { Variants } from 'framer-motion';

export const GotoMapAnimationVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const OpenGotoMapAnimationVariants: Variants = {
  initial: {
    scale: 1,
    overflow: 'auto',
    borderRadius: '0px',
  },
  animate: {
    scale: 0.93,
    overflow: 'hidden',
    borderRadius: '40px',
  },
  exit: {
    scale: 1,
    overflow: 'auto',
    borderRadius: '0px',
  },
};

export const LoaderExitAnimationVariants: Variants = {
  initial: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: '-100%',
    opacity: 0,
  },
};

export const ImagePopupAnimationVariants: Variants = {
  initial: {
    rotate: 0,
    scale: 0,
  },
  animate: {
    rotate: 10,
    scale: 1,
  },
  exit: {
    rotate: 0,
    scale: 0,
  },
};

export const ImageInfoAnimationVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 20,
  },
};

export const MapAreaMenuAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};
