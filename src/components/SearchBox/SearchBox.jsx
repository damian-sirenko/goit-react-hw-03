import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.filterContainer}>
      <p className={css.inputLable}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
}
