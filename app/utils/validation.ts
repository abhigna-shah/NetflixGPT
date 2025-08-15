export const checkValidData = (
  isSignIn: boolean,
  email: string | undefined,
  password: string | undefined,
  name?: string | undefined
) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const isEmailValid = emailRegex.test(email ?? "");

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isPasswordValid = passwordRegex.test(password ?? "");

  const fullNameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+){1,2}$/;
  const isFullNameValid = fullNameRegex.test(name ?? "");

  if (!isEmailValid) return "Email ID is not valid";

  if (!isPasswordValid) return "Password is not valid";

  if (!isSignIn && !isFullNameValid) return "Full Name is not valid";

  return null;
};
