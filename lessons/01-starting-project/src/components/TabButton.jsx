export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>

      {/* we need to send as a value the function */}
    </li>
  );
}

// Another convention we will see a lot on React that Props that should in the end received
// a function that will be triggered up on an Event should start with "on" and this should be passed
// to the event that will be actioned on the compound
