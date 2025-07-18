import EventsNavigation from "../components/EventsNavigation";
import {Outlet} from "react-router-dom";

export default function EventsRootLayout() {

    console.log("EventsRootLayout");
    
    return <>
        <EventsNavigation />
        <Outlet />
    </>
}