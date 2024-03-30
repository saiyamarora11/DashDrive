export const validatePhoneNumber = (phone: string) => {
  const phoneno = /^\+91[6-9]\d{9}$|^[6-9]\d{9}$/;
  return phoneno.test(phone);
};
