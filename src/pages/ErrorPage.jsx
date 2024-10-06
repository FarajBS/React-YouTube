import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">

            <div className="w-screen h-screen bg-red-200 flex flex-col justify-center items-center text-center">
                <p className="text-red-500 font-semibold text-3xl mb-10">Sorry, an unexpected error has occurred...</p>

                <h1 className="text-red-500 font-semibold text-4xl">
                    <span>This Page Is</span> <i>{error.statusText || error.message}.</i>
                </h1>
            </div>

        </div>
    );
};