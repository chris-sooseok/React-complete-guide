export default function TabButton({ children, onSelect, isSelected }) {
  // ? in js, this would be a general approach to handle this action
  // document.querySelector('button').addEventListener('click', () => {})

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
