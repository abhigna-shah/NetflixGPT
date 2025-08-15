import { useEffect } from "react";
import { NETFLIX_LOGO } from "~/utils/constants";
import { signOut, onAuthStateChanged } from "firebase/auth";
import firebaseSingleton from "~/utils/firebase";
import { useAppSelector, useAppDispatch } from "~/store/appStore";
import { addUser, removeUser } from "~/store/slices/user.slice";
import { useNavigate } from "react-router";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((store) => store.user.user);

  useEffect(() => {
    const firebaseInstance = firebaseSingleton.getInstance();
    firebaseInstance.initializeFirebase();
    onAuthStateChanged(firebaseSingleton.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));

        console.log("Reached here in state changed");
      } else {
        // User is signed out due to some token expiration
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [firebaseSingleton.auth]);

  const handleSignOut = () => {
    signOut(firebaseSingleton.auth)
      .then(() => {
        // Sign-out successful.
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute z-20 px-[2%] sm:px-[5%] md:px-[7%] Py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-[40%] @min-[568px]:w-[30%] sm:w-[20%] m:w-[16%]"
        src={NETFLIX_LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2 justify-center items-center">
          <img
            className="w-12 h-12"
            src="https://occ-0-3061-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
            alt="user_icon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white ml-2 cursor-pointer"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
