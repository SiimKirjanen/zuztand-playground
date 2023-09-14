import { create } from 'zustand';

// Define the store state type
type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

// Create a store using Zustand
const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;