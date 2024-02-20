import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import Lottie from "react-lottie";
import animationData from "../assets/Ani.json";

const Onbiarding = () => {
  const { user } = useUser();
  const [interests, setInterests] = useState([]);

  const saveUserToDb = async () => {
    // try {
    //   const response = await axios.post("http://localhost:8800/user/new", {
    //     email: user.primaryEmailAddress,
    //     name: user.fullName,
    //     imageUrl: user.profileImageUrl,
    //     clerkId: user.id,
    //     interests: interests,
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    console.log("saved");
  };

  console.log("interests", interests);
  const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Navbar />
      <div className="h-[56rem] w-screen flex justify-center items-center gap-44 container mx-auto">
        <Lottie
          options={defaultOptions}
          height={500}
          width={500}
          className="left-container bg-y"
        />
        <div
          className="right-container w-[60%]
           p-8
          flex flex-col justify-center items-start"
        >
          <h1 className="text-4xl font-bold my-8 pb-4 ">Welcome to GoTrips</h1>
          <div className="">
            <p className="text-xl my-4">What is your age?</p>
            <div className="flex flex-wrap">
              <input
                type="number"
                placeholder="18"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>

          <div className="second mt-8">
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
                className={`btn btn-outline m-2 ${
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
                className={`btn btn-outline m-2 ${
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
                className={`btn btn-outline m-2 ${
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
                className={`btn btn-outline m-2 ${
                  interests.includes("food") ? "btn-active" : ""
                }`}
              >
                Food
              </button>
            </div>
            <button onClick={saveUserToDb} className="mt-12 w-[60%] btn my-8">
              Save
            </button>
          </div>
        </div>
      </div>
      <div className="h-[55rem]">
        <div className="join flex ">
          <div className="card w-1/3 bg-base-100 shadow-xl h-[45rem] mx-4">
            <figure className="h-1/3">
              <img
                src="https://imgs.search.brave.com/2iDsn5iDsIt5RTMl-Y-2wmonSAgFj32kmRcIiSouhLw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTMw/ODE5OTQ3L3Bob3Rv/L21hcmluZS1kcml2/ZS1tdW1iYWkuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW1l/MVlWaHE3Y0lINmxC/UXppajQ2RHhOZ1Iy/RXFFUkIyZU9BUVNO/aGV6VDQ9"
                alt="Mumbai"
                className="rounded-3xl w-full h-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-4xl">Mumbai</h2>
              <ul className="timeline timeline-vertical">
                <li>
                  <div className="timeline-start timeline-box">
                    First Hotel 
                  </div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-[#5aa9e6]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <hr className="bg-[#5aa9e6]" />
                </li>
                <li>
                  <hr className="bg-[#5aa9e6]" />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-[#5aa9e6]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">Restaurants</div>
                  <hr className="bg-[#5aa9e6]" />
                </li>
                <li>
                  <hr className="bg-[#5aa9e6]" />
                  <div className="timeline-start timeline-box">Tourist attractions</div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-[#5aa9e6]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">Places to visit</div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-start timeline-box">End of Tour</div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
              <div className="card-actions justify-end">
                <button className="btn bg-[#5aa9e6]">Book Now!</button>
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl mx-4 h-[45rem]">
            <figure className="h-1/3">
              <img
                src="https://images.pexels.com/photos/9610478/pexels-photo-9610478.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Shoes"
                className="rounded-3xl w-full h-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-4xl">Kolkata</h2>
              <ul className="timeline timeline-vertical">
                <li>
                  <div className="timeline-start timeline-box">
                    First Hotel 
                  </div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-[#5aa9e6]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <hr className="bg-[#5aa9e6]" />
                </li>
                <li>
                  <hr className="bg-[#5aa9e6]" />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-[#5aa9e6]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">Restaurants</div>
                  <hr className="bg-[#5aa9e6]" />
                </li>
                <li>
                  <hr className="bg-[#5aa9e6]" />
                  <div className="timeline-start timeline-box">Tourist attractions</div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-[#5aa9e6]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">Places to visit</div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-start timeline-box">End of Tour</div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
              <div className="card-actions justify-end">
                <button className="btn bg-[#5aa9e6]">Book Now!</button>
              </div>
            </div>
          </div>
          <div className="card w-1/3 bg-base-100 shadow-xl mx-4 h-[45rem]">
            <figure className="h-1/3">
              <img
                src="https://imgs.search.brave.com/R5NWpc0dJSLEFxdD1l_pIhKir1ot9lt5iLwEXJkii2E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODQ2/MzU5MTM0L3Bob3Rv/L3JlZC1mb3J0LW9m/LWRlbGhpLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1iOHFU/NEM2WFFmRnZYTUQ1/R3VJbmRfb182WkFi/VWVQVGJKemxhaUxY/TzNRPQ"
                alt="Shoes"
                className="rounded-3xl w-full h-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-4xl">Delhi</h2>
              <ul className="timeline timeline-vertical">
                <li>
                  <div className="timeline-start timeline-box">
                    First Hotel 
                  </div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-[#5aa9e6]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <hr className="bg-[#5aa9e6]" />
                </li>
                <li>
                  <hr className="bg-[#5aa9e6]" />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-[#5aa9e6]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">Restaurants</div>
                  <hr className="bg-[#5aa9e6]" />
                </li>
                <li>
                  <hr className="bg-[#5aa9e6]" />
                  <div className="timeline-start timeline-box">Tourist attractions</div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-[#5aa9e6]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end timeline-box">Places to visit</div>
                  <hr />
                </li>
                <li>
                  <hr />
                  <div className="timeline-start timeline-box">End of Tour</div>
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
              <div className="card-actions justify-end">
                <button className="btn bg-[#5aa9e6]">Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onbiarding;
{
  /* 

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
              className={`btn btn-outline m-2 ${
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
              className={`btn btn-outline m-2 ${
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
              className={`btn btn-outline m-2 ${
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
              className={`btn btn-outline m-2 ${
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
              className={`btn btn-outline m-2 ${
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
              className={`btn btn-outline m-2 ${
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
      </div> */
}
