import { useSelector } from "react-redux";
import { getContacts } from "../../redux/contactsSlice";
import { getFilter } from "../../redux/filtersSlice";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = contacts.filter(
    (contact) =>
      !filter || contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  let contactlist = filteredContacts.map((contact) => (
    <li key={contact.id} className={css.listItem}>
      <Contact contact={contact} />
    </li>
  ));
  return (
    <div className={css.container}>
      <ul className={css.list}>{contactlist}</ul>
    </div>
  );
};
