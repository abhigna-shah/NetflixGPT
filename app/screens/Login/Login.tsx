import { useState, useRef, useEffect } from "react";
import Header from "~/components/Header";
import { BG_IMG } from "~/utils/constants";
import { checkValidData } from "~/utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import firebaseSingleton from "~/utils/firebase";
import { useAppDispatch } from "~/store/appStore";
import { addUser } from "~/store/slices/user.slice";
import { useNavigate } from "react-router";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    let message = null;

    // Validate the form data
    message = checkValidData(
      isSignInForm,
      email.current?.value,
      password.current?.value,
      name.current?.value
    );

    setErrorMessage(message);

    if (message) return;

    //Sign-In OR Sign-Up logic
    if (!isSignInForm) {
      //Sign-Up logic
      createUserWithEmailAndPassword(
        firebaseSingleton.auth,
        email.current?.value ?? "",
        password.current?.value ?? ""
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("Signup User ==", user);

          updateProfile(user, {
            displayName: name.current?.value ?? "User",
          })
            .then(() => {
              // Profile updated!
              if (firebaseSingleton.auth.currentUser) {
                const { uid, email, displayName } =
                  firebaseSingleton.auth.currentUser;
                dispatch(addUser({ uid, email, displayName }));
                navigate("/browse");
              }
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        firebaseSingleton.auth,
        email.current?.value ?? "",
        password.current?.value ?? ""
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid, email, displayName }));
          console.log("Login User ==", user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }

    console.log(message);
  };

  return (
    <div>
      <Header />
      <div className="absolute w-[100%] h-[100%] overflow-hidden">
        <div className="absolute w-[100%] h-[100%] z-10 bg-black/60" />
        <img
          className="absolute w-[100%] h-[100%] object-cover object-center"
          src={BG_IMG}
          alt="logo"
        />
      </div>
      <form
        className="absolute w-3/12 p-8 z-20 bg-black/60 my-30 mx-auto right-0 left-0 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 w-full rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full rounded-sm"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-500 w-full rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
}
