import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MapboxComponent from "../components/MapboxCpmponent";
import axios from "axios";

const GetPath = () => {
  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);
  const [path, setPath] = useState([]);
  const [time, setTime] = useState([0]);

  const [sourceCity, setSourceCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [cordinates, setCordinates] = useState([]);

  useEffect(() => {
    getLocationName(source[1], source[0], setSourceCity);
    getLocationName(destination[1], destination[0], setDestinationCity);
  }, [source, destination]);

  const getLocationName = async (lat, lon, fn) => {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );

    const data = await response.json();
    fn(data.city);
  };

  const getCordinates = async () => {
    var url = `http://router.project-osrm.org/route/v1/driving/${source[1]},${source[0]};${destination[1]},${destination[0]}?steps=true&annotations=true&geometries=geojson&overview=full`;

    const mapBoxUrl =
      "https://api.mapbox.com/directions/v5/mapbox/driving-traffic/-74.064693%2C40.691127%3B-73.900665%2C40.764918?alternatives=true&geometries=geojson&language=en&overview=full&steps=true&access_token=pk.eyJ1IjoiYXlhYW56YXZlcmkiLCJhIjoiY2ttZHVwazJvMm95YzJvcXM3ZTdta21rZSJ9.WMpQsXd5ur2gP8kFjpBo8g";
    const response = await fetch(mapBoxUrl);
    const data = await response.json();

    const finalData = data.waypoints.map((waypoint) => {
      const { location } = waypoint;
      return {
        lat: location[1],
        lon: location[0],
      };
    });
    setCordinates(finalData);
    console.log("cordinates", finalData);
    await getNearestLocation(cordinates[0].lat, cordinates[0].lon);
  };

  const getNearestLocation = async (lat, lon) => {
    const options = {
      method: "GET",
      url: "https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng",
      params: {
        longitude: lon,
        latitude: lat,
        lunit: "km",
        currency: "USD",
        limit: 4,
        lang: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": "5f506045admsh19d29b93bba57d7p1a7e0djsne0bcbd6bbb86",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log("ews", response.data);
    } catch (error) {
      console.error(error);
    }

    // const promises = cordinates.map((data, i) => {
    //   const { lat, lon } = data;
    //   return axios
    //     .get(
    //       `https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng?longitude=${lon}.19553&latitude=${lat}`,
    //       {
    //         headers: {
    //           "X-RapidAPI-Key":
    //             "5f506045admsh19d29b93bba57d7p1a7e0djsne0bcbd6bbb86",

    //         },
    //       }
    //     )
    //     .then((response) => {
    //       return response;
    //     })
    //     .catch((err) => {
    //       console.log("err", err);
    //     });
    // });
    // console.log("promises", promises);
    // Promise.all(promises).then((results) => {
    //   console.log("results", results);
    //   const videos = results.map((result) => result);
    // });
  };

  const videoUrls = async () => {
    let i = 0;
    let urllist = [];
    for (i; i < cordinates.length; i++) {
      const response = await axios.get(
        `https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng?longitude=${cordinates[i].lon}.19553&latitude=${cordinates[i].lat}`,
        {
          headers: {
            "X-RapidAPI-Key":
              "5f506045admsh19d29b93bba57d7p1a7e0djsne0bcbd6bbb86",
            "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
          },
        }
      );
      console.log("response", response);
      const json = response.data;
      console.log("json", json);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div
          className="first w-[35%] flex flex-col
        items-start justify-start p-8
        "
        >
          <h2 className="text-4xl font-bold my-8 pb-4 ">
            Tell us what's your plan?
          </h2>
          <div className="w-full flex justify-center pr-14 pt-2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Select Start Location</span>
              </div>
              <input
                type="text"
                placeholder="mumbai"
                disabled
                name="eventName"
                value={sourceCity}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="w-full flex justify-center pr-14 pt-2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Select Destination Location</span>
              </div>
              <input
                type="text"
                placeholder="Pune"
                disabled
                name="eventName"
                value={destinationCity}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <button
            onClick={() => getCordinates()}
            className="mt-12 
            btn bg-black text-white
            w-[60%]  my-8"
          >
            Get Plans
          </button>
        </div>
        <div className="second w-[60%]">
          <MapboxComponent
            setDestination={setDestination}
            setSource={setSource}
            setPath={setPath}
            setTime={setTime}
          />
        </div>
      </div>
    </div>
  );
};

export default GetPath;
