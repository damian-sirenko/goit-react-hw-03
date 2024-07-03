import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div className={css.contactContent}>
        <div className={css.nameWrapper}>
          <svg className={css.icon}>
            <FaUser />
          </svg>
          <p className={css.name}>{name}</p>
        </div>
        <div className={css.telWrapper}>
          <svg className={css.icon}>
            <FaPhoneAlt />
          </svg>
          <p className={css.tel}>{number}</p>
        </div>
      </div>
      <button className={css.deleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
