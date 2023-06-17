import axios from "axios";
import { useState, useEffect } from "react";

import "./AnimalList.css";

import Europe from "../assets/map/1x/europe.png";
import Asia from "../assets/map/1x/asia.png";
import northAmerica from "../assets/map/1x/north-america.png";
import southAmercia from "../assets/map/1x/south-america.png";
import Africa from "../assets/map/1x/africa.png";
import Antartica from "../assets/map/1x/antartica.png";

const AnimalList = () => {
    const [dinos, setDino] = useState([]);

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
        const fetchData = async () => {
            try {
                const response = await axios.get("../src/api/Dinosaur.json");
                setDino(response.data);
            } catch (error) {
                console.log("Error fetching dinosaur data:", error);
            }
        };
        fetchData();
    }, []);

    console.log(dinos);

    // Get Name

    // useEffect(() => {
    //     const names = dinos.map((dino) => dino.genus);
    //     setDinoNames(names);
    // }, []);

    return (
        <>
            <main className="flex justify-center gap-5 h-screen overflow-y-hidden overflow-x-auto snap-x">
                {dinos.map((dino, i) => (
                    <section
                        key={i}
                        className="flex flex-row px-32 rounded h-screen w-screen items-center justify-between snap-x overflow-x-auto overflow-y-hidden snap-start min-w-[100vw]"
                    >
                        <div className="">
                            <h1>{dino.genus}</h1>

                            <span className="italic opacity-40">
                                {dino.namePronounciation}
                            </span>
                            <div className="d-flex mt-2">
                                <p className="font-bold">
                                    <span>{dino.nameMeaning}</span>
                                </p>
                            </div>

                            <div className="flex mt-5 py-3 gap-8 w-full">
                                <p>
                                    Diet: {dino.dietTypeName}
                                    {" - "}
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html:
                                                dino.diet !== null
                                                    ? dino.diet
                                                    : "Unknown"
                                        }}
                                    />
                                </p>

                                <div>
                                    Length: {dino.lengthFrom}
                                    {" m"}
                                </div>
                                <div></div>
                            </div>

                            <div className="flex rounded bg-slate-600 p-4 text-zinc-100 mt-5 gap-2 w-fit">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <i>
                                    <span>{dino.myaFrom}</span>
                                    <span>-</span>
                                    <span>{dino.myaTo} milion years ago</span>
                                </i>
                            </div>
                        </div>
                        <div className="">
                            {dino.mediaCollection.length > 0 && (
                                // Render the first item in the mediaCollection array as an image
                                <img
                                    className="w-[700px] aspect-square object-contain mix-blend-darken saturate-0 brightness-120"
                                    src={`https://www.nhm.ac.uk/resources/nature-online/life/dinosaurs/dinosaur-directory/images/reconstruction/small/${dino.mediaCollection[0].identifier}.jpg`}
                                    alt=""
                                />
                            )}
                        </div>

                        <div className="flex flex-col">
                            <ContinentMap
                                continent={
                                    dino.countries[0].continent.continent
                                }
                            />
                            <div className="flex justify-content-center">
                                <p>
                                    {dino.countries[0].country}
                                    {",  "}
                                </p>
                                <p> {dino.countries[0].continent.continent}</p>
                            </div>
                        </div>

                        {/* {dino.countries.map((continent, i) => (
                        //     <p key={i}>{continent.country}</p>
                        // ))} */}
                    </section>
                ))}
            </main>
        </>
    );
};

export default AnimalList;
