import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

export default function SideVideos() {

    const [video, setVideo] = useState([]);

    useEffect(()=> {
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
            {video.map((element, index) => {
                return (
                        <div key={index}>
                            <Link to={`/showVideo/${element.id}`}>
                                <div className="">
                                    <div className="card card-side bg-base-100 mb-3 border-none">
                                        <figure className="max-w-52 ml-3 bg-yellow-300">
                                            <div className=" bg-green-700">
                                                <img
                                                    className="h-full w-full"
                                                    src={element.snippet.thumbnails.medium.url}
                                                    alt="The Video Image" 
                                                />
                                            </div>
                                        </figure>

                                        <div>
                                            <h2 className="card-title text-base">{element.snippet.title}</h2>
                                            <h4 className="mb-1">{element.snippet.channelTitle}</h4>
                                            <p className="">{element.snippet.publishedAt}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            )};
        </>
    )
};