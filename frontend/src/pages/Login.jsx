import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import React from "react";
import { redirect } from "react-router-dom";
import Onbiarding from "./Onbiarding";

const Login = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
        <p>
          This content is public. Only signed out users can see the SignInButton
          above this text.
        </p>
      </SignedOut>
      <SignedIn>
        <Onbiarding />
      </SignedIn>
    </div>
  );
};

export default Login;
