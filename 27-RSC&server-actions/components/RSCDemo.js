import ClientDemo from "@/components/ClientDemo";


// ! async function forces the function to be only server renderable
export default async function RSCDemo() {
  console.log('RSCDemo rendered');
  return (
    <div className='rsc'>
      <h2>A React Server Component</h2>
      <p>
        Will <strong>ONLY</strong> be rendered on the server or at build time.
      </p>
      <p>
        <strong>NEVER</strong> on the client-side!
      </p>
        {/* ! client component is allowed inside server component */}
        <ClientDemo />
    </div>
  );
}
