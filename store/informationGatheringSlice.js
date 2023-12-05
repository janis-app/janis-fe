import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

const useInfoStore = create(
  persist(
    devtools((set) => ({
      infomations: [],
      saveUserInformation: (informations) => set({informations})
    })),
    {
      name: "infoStore",
    }
  )
);

export default useInfoStore;