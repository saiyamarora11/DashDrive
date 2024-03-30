import useLoginStore from "@/store/login";
import OtpInput from "react-otp-input";

//imports
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ConfirmationResult } from "firebase/auth";
import { verifyOTP } from "@/utils/auth";

//types
type verifyOtpProps = {
  onClose: () => void;
};

const Component = (props: verifyOtpProps) => {
  const { otp, setOtp, phoneInput, loginConfirmationResult } = useLoginStore();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(async () => {
      if (!otp) {
        alert("Please enter valid otp");
        return;
      }

      try {
        verifyOTP({
          otp: otp,
          confirmationResult: loginConfirmationResult as ConfirmationResult,
        });
      } catch (err) {
        throw new Error("error verifying otp");
      }
    }, 2000);
  };
  return (
    <>
      <div className="relative w-full">
        <div
          onClick={props.onClose}
          className="absolute -right-2 -top-2 cursor-pointer"
        >
          <XMarkIcon className="h-6 w-6 stroke-2 " />
        </div>

        <p className="text-gray-600 text-md font-bold text-start">Enter Otp</p>
        <p className="text-sm text-black mt-2">
          Sent to{" "}
          <span className="text-gray-600 font-semibold opacity-70">
            {phoneInput}
          </span>
        </p>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div className="mt-6">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              shouldAutoFocus
              inputStyle="box-content h-4 w-4 md:w-5 md:w-5 mx-2 p-2 border-2 border-gray-200 rounded-md bg-white"
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="flex justify-center w-full">
            <button
              id="sign-in-with-phone"
              disabled={otp.length !== 6}
              type="submit"
              className="btn btn-blue h-8 text-xs mt-6 w-full"
            >
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Component;
