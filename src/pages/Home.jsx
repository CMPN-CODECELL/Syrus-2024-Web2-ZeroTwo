import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/clerk-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="bg-white hero flex flex-col">
      <div className="navbar bg-transparent">
        <div className="flex-1">
          <a href="#" className="btn btn-ghost text-4xl font-['penna']">
            GoTrip
          </a>
        </div>
        <div className="flex-none">
          <button className="btn px-12 btn-neutral mr- rounded-full">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <SignOutButton />
            </SignedIn>
          </button>
        </div>
      </div>
      <div className="mt-36 flex flex-col items-center">
        <div className="hero-content flex-col items-center lg:flex-row mx-16">
          <div className="mx-8 flex flex-col items-center gap-3">
            <h1 className="text-5xl font-bold">Travel with Us!</h1>
            <p className="py-6 font-serif text-5xl  max-w-2xl text-center">
              Make traveling easy and enjoyable by using our services.
            </p>
            <div className="flex items-center justify-between">
              <button
                onClick={
                  user
                    ? () => {
                        window.location.href =
                          "https://65d48357fe477cbd8289b506--stellar-flan-1e2dae.netlify.app/";
                      }
                    : () => {
                        window.location.href = "/login";
                      }
                }
                className="btn bg-blue-200 mx-2 text-1xl w-1/2"
              >
                Find the Best Spots!
              </button>
              <button
                onClick={() => navigate("/onboarding")}
                className="btn btn-neutral"
              >
                Start Planning
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
