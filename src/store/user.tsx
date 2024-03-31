import { create } from "zustand";

import { User } from "firebase/auth";

interface UserStore {
  userDetails: User | undefined;
  setUserDetails: (input: User | undefined) => void;
}

const useUserStore = create<UserStore>((set) => ({
  userDetails: undefined,
  setUserDetails: (input) => set({ userDetails: input }),
}));

export default useUserStore;
