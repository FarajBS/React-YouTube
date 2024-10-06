import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"

import Navbar from "../components/Navbar";
import SideVideos from "../components/SideVideos";

export default function ShowVideo() {

    const vidId = useParams();

    const [show, setShow] = useState([]);
    const [main, setMain] = useState([]);

    useEffect(()=> {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&regionCode=Sa&chart=mostPopular&maxResults=50&key=AIzaSyCySTLbPbzs_-iwhdQ9DwQT382ZTC-sPdo`)
            .then(function (response) {
                // Handle Success
               setShow(response.data.items);

               show.find((ele) => {
                    if(ele.id == vidId.vidId) {
                        setMain(ele);
                        console.log(main)
                    };
                })
            })
            .catch(function (error) {
                // Handle Error //
                console.log(error);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [vidId]);

    
    
           
    return (
        <>
                        
        {/* { console.log({main})} */}
            {/* NavBar */}
            <Navbar />
            {/*=== NavBar ===*/}

            {/* ============================================================================================================================= */}
            {/* ============================================================================================================================= */}

            {/* Vedios Section */}
            
            <div className="my-10">
                <div className="container mx-auto flex flex-col justify-center items-center gap-4 md:flex-row md:items-start">
                    <div className="w-full md:w-2/3 h-full">
                        <div className="card bg-base-100 h-screen">
                            <div className="h-full">
                                <iframe className="w-full h-full"
                                    src={'https://www.youtube.com/embed/' + vidId.vidId}> 
                                </iframe> 
                            </div>
                            {main.map((ele, index) => {
                                    console.log(ele.snippet.title)
                                return (
                                    <div key={index}>
                                        <h2 className="text-7xl text-red-900">{ele.snippet.title}</h2>
                                    </div>
                                )
                            })}
                        
                            <div className="card-body">
                                <h2 className="card-title"></h2>
                                
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 h-full flex flex-col">
                        <SideVideos />
                    </div>
                </div>
            </div>
            {/*=== Vedios Section ===*/}
        </>
    )
};