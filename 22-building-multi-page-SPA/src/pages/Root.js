import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
    return (
        <>
            <MainNavigation />
            {/* ? where children elements are rendered */}
            <main>
                <Outlet />
            </main>

        </>
    );
}