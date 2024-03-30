import useLoginStore from "@/store/login";
import OtpInput from "react-otp-input";

//imports
import { XMarkIcon } from "@heroicons/react/24/outline";

//types
type verifyOtpProps = {
  onClose: () => void;
};

const Component = (props: verifyOtpProps) => {
  const { otp, setOtp, phoneInput } = useLoginStore();
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
        <div className="mt-6">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            shouldAutoFocus
            inputStyle="box-content h-5 w-5 mx-3 p-2 border-2 border-gray-200 rounded-md bg-white"
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <div className="flex justify-center w-full">
          <button
            disabled={otp.length !== 6}
            className="btn btn-blue h-8 text-xs mt-6 w-full"
          >
            Verify OTP
          </button>
        </div>
      </div>
    </>
  );
};

export default Component;
