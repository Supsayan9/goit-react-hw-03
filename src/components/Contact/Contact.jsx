import s from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={s.contactItem}>
      <div className={s.contactWrapper}>
        <div className={s.iconWrapper}>
          <FaUser className={s.contactIcon} />
          <p className={s.contactName}>{name}</p>
        </div>
        <div className={s.iconWrapper}>
          <FaPhoneAlt className={s.contactIcon} />
          <p className={s.contactNumber}>{number}</p>
        </div>
      </div>
      <button className={s.contactDeleteBtn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
