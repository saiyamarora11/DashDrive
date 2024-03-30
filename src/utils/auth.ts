// sendOTP.ts
import { auth } from "@/firebase";
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

export const sendOTP = async (
  phoneNumber: string,
  setConfirmationResult: any
) => {
  try {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "sign-in-with-phone",
      {
        size: "invisible",
        callback: () => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      }
    );
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      recaptchaVerifier
    );
    setConfirmationResult(confirmationResult);
    recaptchaVerifier.clear();
  } catch (err) {
    console.log("otp not sent", err);
  }
};

export const verifyOTP = (args: {
  otp: string;
  confirmationResult: ConfirmationResult;
}) => {
  args.confirmationResult
    .confirm(args.otp)
    .then(() => {
      window.location.href = "/about";
    })
    .catch((reason) => {
      console.log("reason ->", reason);
      alert("Invalid Otp");
      console.log("otp verification cause", reason?.cause);
    });
};
