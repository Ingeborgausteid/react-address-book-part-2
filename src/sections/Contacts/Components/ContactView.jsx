import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContactContext } from "../../../App";

function ContactView() {
  const context = useContext(ContactContext);
  const [contact, setContact] = useState({});

  const { id }  = useParams();
  const thisContact = context.contacts.find((x) => x.id == id);

  useEffect(() => {
    setContact(thisContact)
  }, [context.contacts])

  
  return (
    <section>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>{contact.street} {contact.city}</p>
    </section>
  );
}

export default ContactView;
