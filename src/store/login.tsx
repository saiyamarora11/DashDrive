import { ConfirmationResult } from "firebase/auth";
import { create } from "zustand";

interface LoginStore {
  phoneInput: string | undefined;
  setPhoneInput: (input: string | undefined) => void;
  otp: string;
  setOtp: (input: string) => void;
  loginConfirmationResult: ConfirmationResult | undefined;
  setLoginConfirmationResult: (input: ConfirmationResult | undefined) => void;
}

const useLoginStore = create<LoginStore>((set) => ({
  phoneInput: "",
  setPhoneInput: (input) => set({ phoneInput: input }),
  otp: "",
  setOtp: (input) => set({ otp: input }),
  loginConfirmationResult: undefined,
  setLoginConfirmationResult: (input) =>
    set({ loginConfirmationResult: input }),
}));

export default useLoginStore;
