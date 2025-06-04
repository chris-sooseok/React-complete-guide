export default function TabButton({ children, isSelected, ...props}) {
  // ? in js, this would be a general approach to handle this action
  // document.querySelector('button').addEventListener('click', () => {})

  return (
    <li> 
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
