import { useEffect, useState, type FC } from "react";

//imports
import ContainerPrimary from "@/components/layout/ContainerPrimary";
import ContainerSecondary from "@/components/layout/ContainerSecondary";
import PhoneInput from "@/components/login/PhoneInput";
import VerifyOtp from "@/components/login/VerifyOtp";
import LoginAnimation from "@/components/animations/login-animation";
import Modal from "@/components/common/Modal";
import useLoginStore from "@/store/login";
import { validatePhoneNumber } from "@/utils/general";
import { sendOTP } from "@/utils/auth";
import "@/components/login/login.css";

//imports
import { ConfirmationResult } from "firebase/auth";

//types
type FormElem = React.FormEvent<HTMLFormElement>;

const Component: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const { phoneInput, loginConfirmationResult, setLoginConfirmationResult } =
    useLoginStore();
  const submitHandler = async (e: FormElem) => {
    e.preventDefault();

    const customerPhone = phoneInput?.replace(/\s/g, "");

    if (!customerPhone) {
      alert("Please enter a valid phone number");
      return;
    }

    if (!validatePhoneNumber(customerPhone)) {
      alert("The phone number you entered is invalid!");
      return;
    }
    const recaptchaDiv = document.createElement("div");
    recaptchaDiv.setAttribute("id", "sign-in-with-phone");
    recaptchaDiv.setAttribute("className", "hidden");
    const captcaContainer = document.getElementById("recaptcha-container");
    captcaContainer?.appendChild(recaptchaDiv);
    const phoneNumber = "+" + customerPhone;
    console.log(phoneNumber);
    await sendOTP(`${phoneNumber}`, (val: ConfirmationResult) => {
      setLoginConfirmationResult(val);
    });
  };

  useEffect(() => {
    const confirmationResult = loginConfirmationResult;
    if (confirmationResult) {
      setShowModal(true);
    }
  }, [loginConfirmationResult]);

  return (
    <ContainerPrimary>
      <ContainerSecondary>
        <div className="login-grid">
          <div className="w-full md:border-r">
            <LoginAnimation />
          </div>
          <div className="flex flex-col justify-center h-full">
            <div className="font-bold text-xl text-center mt-4">
              Verify your mobile number
            </div>
            <p className="text-gray-500 text-sm font-medium text-center mt-4">
              App will send an SMS message to verify your mobile number
            </p>
            <form
              className="flex flex-col items-center w-full"
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <div className="mt-4 w-full md:w-2/3">
                <PhoneInput />
              </div>
              <button id="sign-in-with-phone" type="submit" className="otp-btn">
                Send OTP
              </button>
            </form>
          </div>
        </div>
        <Modal openModal={showModal} id="verify_otp_modal">
          <div className="flex flex-col items-center">
            <VerifyOtp onClose={() => setShowModal(false)} />
          </div>
        </Modal>
      </ContainerSecondary>
    </ContainerPrimary>
  );
};

export default Component;
