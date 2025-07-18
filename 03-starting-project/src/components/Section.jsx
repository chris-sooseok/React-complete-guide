export default function Section({ title, children, ...props }) {

    // ? here props contains {id: 'examples'}
    return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
