import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

const Onbiarding = () => {
  const { user } = useUser();
  const [interests, setInterests] = useState([]);

  const saveUserToDb = async () => {
    try {
      const response = await axios.post("http://localhost:8800/user/new", {
        email: user.primaryEmailAddress,
        name: user.fullName,
        imageUrl: user.profileImageUrl,
        clerkId: user.id,
        interests: interests,
      });
    } catch (err) {
      console.log(err);
    }
  };

  console.log("interests", interests);

  return (
    <div>
      <Navbar />
      <div className=" w-[90%] container mx-auto">
        <h1 className="text-4xl font-bold my-8">Welcome to GoTrips</h1>
        <div className="">
          <p className="text-xl my-4">What is your age?</p>
          <div className="flex flex-wrap">
            <button
              onClick={() => {
                if (interests.includes("sports")) {
                  setInterests(
                    interests.filter((interest) => interest !== "sports")
                  );
                } else {
                  setInterests([...interests, "sports"]);
                }
              }}
              className={`btn btn-ghost m-2 ${
                interests.includes("sports") ? "btn-active" : ""
              }`}
            >
              Sports
            </button>
            <button
              onClick={() => {
                if (interests.includes("music")) {
                  setInterests(
                    interests.filter((interest) => interest !== "music")
                  );
                } else {
                  setInterests([...interests, "music"]);
                }
              }}
              className={`btn btn-ghost m-2 ${
                interests.includes("music") ? "btn-active" : ""
              }`}
            >
              Music
            </button>
            <button
              onClick={() => {
                if (interests.includes("travel")) {
                  setInterests(
                    interests.filter((interest) => interest !== "travel")
                  );
                } else {
                  setInterests([...interests, "travel"]);
                }
              }}
              className={`btn btn-ghost m-2 ${
                interests.includes("travel") ? "btn-active" : ""
              }`}
            >
              Travel
            </button>
            <button
              onClick={() => {
                if (interests.includes("food")) {
                  setInterests(
                    interests.filter((interest) => interest !== "food")
                  );
                } else {
                  setInterests([...interests, "food"]);
                }
              }}
              className={`btn btn-ghost m-2 ${
                interests.includes("food") ? "btn-active" : ""
              }`}
            >
              Food
            </button>
          </div>
        </div>

        <div className="second">
          <p className="text-xl my-4">What are your interests?</p>
          <div className="flex flex-wrap">
            <button
              onClick={() => {
                if (interests.includes("sports")) {
                  setInterests(
                    interests.filter((interest) => interest !== "sports")
                  );
                } else {
                  setInterests([...interests, "sports"]);
                }
              }}
              className={`btn btn-ghost m-2 ${
                interests.includes("sports") ? "btn-active" : ""
              }`}
            >
              Sports
            </button>
            <button
              onClick={() => {
                if (interests.includes("music")) {
                  setInterests(
                    interests.filter((interest) => interest !== "music")
                  );
                } else {
                  setInterests([...interests, "music"]);
                }
              }}
              className={`btn btn-ghost m-2 ${
                interests.includes("music") ? "btn-active" : ""
              }`}
            >
              Music
            </button>
            <button
              onClick={() => {
                if (interests.includes("travel")) {
                  setInterests(
                    interests.filter((interest) => interest !== "travel")
                  );
                } else {
                  setInterests([...interests, "travel"]);
                }
              }}
              className={`btn btn-ghost m-2 ${
                interests.includes("travel") ? "btn-active" : ""
              }`}
            >
              Travel
            </button>
            <button
              onClick={() => {
                if (interests.includes("food")) {
                  setInterests(
                    interests.filter((interest) => interest !== "food")
                  );
                } else {
                  setInterests([...interests, "food"]);
                }
              }}
              className={`btn btn-ghost m-2 ${
                interests.includes("food") ? "btn-active" : ""
              }`}
            >
              Food
            </button>
          </div>
        </div>

        <button onClick={saveUserToDb} className="btn btn-primary my-8">
          Save
        </button>
      </div>
    </div>
  );
};

export default Onbiarding;
