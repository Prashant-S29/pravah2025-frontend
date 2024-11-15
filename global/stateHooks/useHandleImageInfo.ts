import { create } from 'zustand';
import { ImageInfoPropsType } from '@/types';

export type HandleImageInfoState = {
  showImageInfo: boolean;
  setShowImageInfo: (showImageInfo: boolean) => void;
  imageInfo: ImageInfoPropsType;
  setImageInfo: (imageInfo: ImageInfoPropsType) => void;
};

export const useHandleImageInfo = create<HandleImageInfoState>((set) => ({
  showImageInfo: false,
  setShowImageInfo: (showImageInfo) => set({ showImageInfo }),
  imageInfo: {
    imageTitle: '',
    imageDescription: '',
  },
  setImageInfo: (imageInfo) => set({ imageInfo }),
}));
