import { create } from "zustand";
import { persist } from "zustand/middleware";
import { devtools } from "zustand/middleware";

const userStore = create(
  persist(
    devtools((set) => ({
      user_profile: [],
      saveUserProfile: (user_profile) => set({ user_profile }),
    })),
    {
      name: "userStore",
    }
  )
);

export default userStore;
