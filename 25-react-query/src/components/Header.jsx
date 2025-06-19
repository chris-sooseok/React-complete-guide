import {useIsFetching} from '@tanstack/react-query';

export default function Header({children}) {

    // ? can be used to find the state when somewhere fetching is being executed
    const fetching = useIsFetching(); // 0 or 1 to indicate

    return (
        <>
            <div id="main-header-loading">
                {fetching > 0 && <progress/>}
            </div>
            <header id="main-header">
                <div id="header-title">
                    <h1>React Events</h1>
                </div>
                <nav>{children}</nav>
            </header>
        </>
    );
}
