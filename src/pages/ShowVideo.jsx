import { useParams } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"

import Navbar from "../components/Navbar";
import SideVideos from "../components/SideVideos";

export default function ShowVideo() {

    const vidId = useParams();

    const [show, setShow] = useState([]);
    const [main, setMain] = useState([]);
    const [post, setPost] = useState("");
    const [all, setAll]   = useState([]);

    const submit = () => {
        setAll([post]);
        setPost("")
    }

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
                <div className="flex justify-center items-center mb-10" role="search">
                    <input className="form-control me-2 w-full md:w-1/2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success tex-4xl font-bold" type="submit">بحث</button>
                </div>
                <div className="container mx-auto flex flex-col  justify-center items-center gap-4 lg:flex-row lg:items-start">
                    <div className="w-full md:w-2/3 h-full">
                        <div className="card bg-base-100 h-full lg:h-screen">
                            <div className="h-full">
                                <iframe className="w-full h-full"
                                    src={'https://www.youtube.com/embed/' + vidId.vidId}> 
                                </iframe> 
                            </div>

                            <h2 className="text-7xl text-red-900"></h2>

                        </div>

                        <div className="mt-20">
                            <h3 className="text-3xl">التعليقات</h3>

                            <div className="flex justify-center items-center flex-col">
                                <textarea onChange={(e) => {setPost(e.target.value)}} value={post} className="rounded-lg w-full p-3 my-3 text-2xl border-3 border-black" rows={5}></textarea>
                                <button onClick={submit} className="p-2 text-white text-2xl bg-red-500">تعليق</button>
                            </div>
                            <div className="h-40 rounded-lg bg-gray-100 overflow-auto p-3 border-3 my-3">
                                <h5>{all}</h5>
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