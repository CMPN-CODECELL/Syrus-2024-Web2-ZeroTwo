import React from "react";

const Home = () => {
  return (
    <div>
      {/* <div className="navbar bg-base-200 ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button className="btn glass mx-2">Glass button</button>
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Travel with Us!</h1>
            <p className="mb-5">Organize trips with ease</p>
            <button className="btn glass mx-2">Glass button</button>
            <button className="btn btn-primary mx-2">Get Started</button>
          </div>
        </div>
      </div> */}
      <div className="navbar bg-base-200 ">
        <div className="flex-1">
          <a className="btn btn-ghost text-4xl font-['penna']">GoTrip</a>
        </div>
        <div className="flex-none">
          <button className="btn bg-[#fb923c] mx-2">Sign In</button>
          <button className="btn btn-neutral mx-2">Glass button</button>

        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row mx-16">
          <img
            src="https://imgs.search.brave.com/Rv2Q8Fcd6oPVngifHjRiA_iQVtQXyUh-vWd2R4_qZBA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/cmF2ZWxpbmctY29u/Y2VwdC13aXRoLWxh/bmRtYXJrc18yMy0y/MTQ5MTUzMjYxLmpw/Zz9zaXplPTYyNiZl/eHQ9anBn"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mx-8">
            <h1 className="text-5xl font-bold">Travel with Us!</h1>
            <p className="py-6 font-serif text-5xl">
              Make traveling easy and enjoyable by using our services.
            </p>
            <div>
              <button className="btn bg-blue-200 mx-2 text-1xl w-1/2">
                Find the Best Spots!
              </button>
              <button className="btn btn-neutral">Start Planning</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
