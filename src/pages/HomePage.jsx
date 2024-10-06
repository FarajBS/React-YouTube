import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

export default function HomePage() {

    const [video, setVideo] = useState([]);

    useEffect(() => {
        axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&regionCode=Sa&chart=mostPopular&maxResults=50&key=AIzaSyCySTLbPbzs_-iwhdQ9DwQT382ZTC-sPdo')
            .then(function (response) {
                // Handle Success
               setVideo(response.data.items);
            })
            .catch(function (error) {
                // Handle Error //
                console.log(error);
            });
    }, []);
                
    return (
        <>
            {/* NavBar */}
            <Navbar />
            {/*=== NavBar ===*/}

            {/* ============================================================================================================================= */}
            {/* ============================================================================================================================= */}
                
            {/* Vedios Section */}
            <div className="my-10">
                <div className="flex justify-center items-center mb-10" role="search">
                    <input className="form-control me-2 w-full md:w-1/2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success tex-4xl font-bold" type="submit">بحث</button>
                </div>

                <div className="flex flex-col justify-center items-center gap-y-10 flex-wrap md:flex-row md:justify-evenly md:gap-x-5 md:gap-y-10 md:items-start">
                    {video.map((element, index) => {
                        return (
                                <div key={index}>
                                    <Link to={`/showVideo/${element.id}`}>
                                        <div className="card card-compact bg-base-100 w-96">
                                            <figure>
                                                <img
                                                    className="w-full"
                                                    src={element.snippet.thumbnails.medium.url}
                                                    alt="The Vedio Image" 
                                                />
                                            </figure>

                                            <div className="card-body">
                                                <div className="flex justify-start items-start">
                                                    <div>
                                                        <h2 className="card-title text-base">{element.snippet.title}</h2>
                                                        <h4 className="mb-1">{element.snippet.channelTitle}</h4>
                                                        <p className="">{element.snippet.publishedAt}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    )};
                </div>
            </div>
            {/*=== Vedios Section ===*/}
        </>
    )
}
