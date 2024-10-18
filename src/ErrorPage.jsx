import {useRouteError} from "react-router-dom"

export default function ErrorPage(){
    const err = useRouteError()
    console.log("error ",err);
    return (
        <div id="error-page">
            <div className="flex flex-col justify-center min-h-screen gap-4 text-xl text-center text-white">
                <h1>Ooops!</h1>
                <p>Sorry, an unexpected error has occured.</p>
                <p>We are working on it.</p>
                <p>
                    <i>{err.statusText || err.message || 404}</i>
                </p>
            </div>
        </div>
    )

}