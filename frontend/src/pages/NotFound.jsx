import { ClerkProvider } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";
import { SignedOut, SignedIn } from "@clerk/clerk-react";

export default function Notfound() {
  return (
    <>
      <div className="w-screen h-svh flex flex-col justify-items-center items-center">
        <img src="/public/confused-traveller.png" />
        <h1 className="text-5xl">ERROR 404</h1>
        <p className="text-3xl">This page does not exist.</p>
      </div>
    </>
  );
}
