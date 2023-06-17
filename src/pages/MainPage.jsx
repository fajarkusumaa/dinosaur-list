import axios from "axios";
import { useState, useEffect } from "react";

import "./MainPage.css";

import Europe from "../assets/map/1x/europe.png";
import Asia from "../assets/map/1x/asia.png";
import northAmerica from "../assets/map/1x/north-america.png";
import southAmercia from "../assets/map/1x/south-america.png";
import Africa from "../assets/map/1x/africa.png";
import Antartica from "../assets/map/1x/antartica.png";
import { data } from "autoprefixer";

const MainPage = () => {
    const [dinos, setDino] = useState([]);
    const [allDinos, setAllDino] = useState([]);

    const [selectedDino, setSelectedDino] = useState(0);

    console.log(selectedDino);

    const ContinentMap = ({ continent }) => {
        if (continent === "Europe") {
            return <img style={{ height: 200 }} src={Europe} />;
        } else if (continent === "Asia") {
            return (
                <>
                    <img style={{ height: 200 }} src={Asia} />
                </>
            );
        } else if (continent === "Africa") {
            return (
                <>
                    <img style={{ height: 200 }} src={Africa} />
                </>
            );
        } else if (continent === "South America") {
            return (
                <>
                    <img style={{ height: 200 }} src={southAmercia} />
                </>
            );
        } else if (continent === "North America") {
            return (
                <>
                    <img style={{ height: 200 }} src={northAmerica} />
                </>
            );
        } else if (continent === "Antartica") {
            return (
                <>
                    <img style={{ height: 200 }} src={Antartica} />
                </>
            );
        }
    };

    useEffect(() => {
        callDino();
    }, []);

    const callDino = () => {
        const fetchData = async () => {
            try {
                const response = await axios.get("../src/api/Dinosaur.json");
                const dataArray = response.data;

                setDino(dataArray[selectedDino]);
                setAllDino(dataArray);
            } catch (error) {
                console.log("Error fetching dinosaur data:", error);
            }
        };
        fetchData();
    };

    const handleDinoClick = (index) => {
        callDino();
        setSelectedDino(index);
    };

    // console.log(dinos);
    console.log(dinos);

    return (
        <>
            <section>
                <div className="flex w-full h-screen p-4 gap-2">
                    <div className="w-[350px] p-6 pt-0 overflow-y-scroll relative ">
                        <div className="bg-white sticky py-4 top-0">
                            <span className="text-xl block font-semibold">
                                Dinosaurus List
                            </span>
                        </div>
                        {allDinos.map((dino, i) => (
                            <div key={i} className="mt-4">
                                <a
                                    className="text-gray-600 hover:text-gray-800 hover:cursor-pointer"
                                    onClick={() => handleDinoClick(i)}
                                >
                                    {dino.genus} {i}
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-1 flex-col justify-between gap-2">
                        <div className="flex justify-center bg-white">
                            {dinos.mediaCollection.map((url, i) => (
                                <img
                                    key={i}
                                    className=" mix-blend-darken saturate-0 brightness-120 h-[400px]"
                                    src={`https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/${url.identifier}.jpg`}
                                    alt=""
                                />
                            ))}
                        </div>
                        <div className="flex flex-col h-full p-6  gap-4">
                            <div className="w-full">
                                <span className="text-[24px] block font-semibold">
                                    {dinos.genus}
                                </span>
                                <span className="text-base italic opacity-60">
                                    {dinos.nameMeaning}
                                </span>
                            </div>
                            <div className="flex w-full mt-5">
                                <div className="w-1/2">
                                    <div className="flex flex-col gap-4">
                                        <div className="block">
                                            <span className="text-base font-semibold">
                                                Length
                                            </span>
                                            <p className="text-base italic opacity-75 mt-2">
                                                {dinos.lengthFrom} m
                                            </p>
                                        </div>
                                        <div className="block">
                                            <span className="text-base font-semibold">
                                                Period
                                            </span>
                                            <p className="text-base italic opacity-75 mt-2">
                                                {dinos.myaFrom + "- "}{" "}
                                                {dinos.myaTo} milion years ago
                                            </p>
                                        </div>
                                        <div className="block">
                                            <span className="text-base font-semibold">
                                                Species
                                            </span>
                                            <p className="text-base italic opacity-75 mt-2">
                                                {dinos.species}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-1/2">
                                    <div className="block">
                                        <span className="text-base font-semibold">
                                            Body Shape
                                        </span>
                                        <p className="text-base italic mt-2">
                                            {dinos.bodyShape.bodyShape}
                                        </p>
                                        <p className="text-base italic opacity-75">
                                            {dinos.bodyShape.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[350px] bg-slate-300">kanan</div>
                </div>
            </section>
        </>
    );
};

export default MainPage;
