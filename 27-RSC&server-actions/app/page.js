import ClientDemo from "@/components/ClientDemo";
import RSCDemo from "@/components/RSCDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import {Suspense} from "react";

export default async function Home() {

    const fetchUsersPromise = new Promise(resolve => setTimeout(async () =>{
        const data = await fs.readFile('dummy-db.json', 'utf-8');
        const users = JSON.parse(data);
        // ! resolve completes the Promise successfully and passes a value (users) to whatever is waiting on it
        resolve(users);
    }, 2000));

    return (
        <main>
            {/*<ClientDemo>*/}
            {/*<RSCDemo/>*/}
            {/*</ClientDemo>*/}
            {/*<DataFetchingDemo />*/}
            {/*<ServerActionsDemo />*/}

            <Suspense fallback={<p>Loading...</p>}>
                <UsePromiseDemo usersPromise={fetchUsersPromise}/>
            </Suspense>
        </main>
    );
}
