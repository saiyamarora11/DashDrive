// sendOTP.ts
import { auth } from "@/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

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
