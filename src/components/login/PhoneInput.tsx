import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import useLoginStore from "@/store/login";

const PhoneInputComponent = () => {
  const { phoneInput, setPhoneInput } = useLoginStore();
  return (
    <>
      <PhoneInput
        defaultCountry="IN"
        placeholder="Enter phone number"
        value={phoneInput}
        onChange={setPhoneInput}
        international
        countryCallingCodeEditable={false}
        className="h-10 !bg-white border border-gray-200 rounded-md p-2 w-full "
      />
    </>
  );
};

export default PhoneInputComponent;
