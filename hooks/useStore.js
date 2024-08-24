import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      selectedService: "",
      setSelectedService: (service) => set({ selectedService: service }),
    }),
    {
      name: "service-storage",
    }
  )
);

export default useStore;
