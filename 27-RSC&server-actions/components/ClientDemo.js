'use client';
import {useState} from "react";

export default function ClientDemo({children}) {
    // ! use hook is only allowed in client-rendered component
    const [count, setCount] = useState(0);

    return (
        <div className='client-cmp'>
            <h2>A React Client Component</h2>
            <p>
                Will be rendered on the client <strong>AND</strong> the server.
            </p>
            <p>
                <button onClick={() => setCount(count + 1)}>
                    Increase
                </button>
                <span>{count}</span>
            </p>
            {/* ! server component is only allowed as children in client component */}
            {children}
        </div>
    );
}
