import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      selectedService: "",
      setSelectedService: (service) => set({ selectedService: service }),
      animationsEnabled: true,
      setAnimationsEnabled: (enabled) => set({ animationsEnabled: enabled }),
    }),
    {
      name: "portfolio-storage",
    }
  )
);

export default useStore;
