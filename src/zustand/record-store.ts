import create from "zustand";

export type RecordItem = {
  description: string;
  rate: number;
  quantity: number;
};

type RecordState = {
  items: RecordItem[];
  addItem: (item: RecordItem) => void;
  removeItem: (description: string) => void;
  reorderItems: (items: RecordItem[]) => void;
};

const useRecordStore = create<RecordState>((set) => ({
  items: [],

  addItem: (item: RecordItem) =>
    set((state) => ({
      items: [...state.items, item],
    })),

  removeItem: (description: string) =>
    set((state) => ({
      items: state.items.filter((item) => item.description !== description),
    })),

  reorderItems: (items: RecordItem[]) => set({ items }),
}));

export default useRecordStore;
