import { create } from "zustand";

interface UserState {
  isLogin: boolean;
  setLogin: () => void;
  setLogout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  isLogin: false,
  setLogin: () => set({ isLogin: true}),
  setLogout: () => set({ isLogin: false})
}))