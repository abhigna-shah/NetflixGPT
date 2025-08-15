import type { Route } from "../../+types/root";
import Header from "~/components/Header";
import { BG_IMG } from "~/utils/constants";
// import { onAuthStateChanged } from "firebase/auth";
// import firebaseSingleton from "~/utils/firebase";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // useEffect(() => {
  //   const firebaseInstance = firebaseSingleton.getInstance();
  //   firebaseInstance.initializeFirebase();

  //   onAuthStateChanged(firebaseSingleton.auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const { uid, email, displayName } = user;
  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //     }
  //   });
  // }, []);
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
    </div>
  );
}
