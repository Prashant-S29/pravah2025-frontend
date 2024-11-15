import { MapArea } from '@/types';
import { create } from 'zustand';

export type GotoMapState = {
  showGotoMap: boolean;
  toggleShowGotoMap: (showGotoMap: boolean) => void;
  mapArea: MapArea;
  setMapArea: (mapArea: MapArea) => void;
};

export const useGotoMap = create<GotoMapState>((set) => ({
  showGotoMap: false,
  toggleShowGotoMap: (showGotoMap) => set({ showGotoMap }),
  mapArea: 'north',
  setMapArea: (mapArea) => set({ mapArea }),
}));
