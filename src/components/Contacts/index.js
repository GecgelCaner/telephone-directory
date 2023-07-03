import { useState, useEffect } from "react";

import {} from "./style.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Caner",
      phone_number: "123123",
    },
    {
      fullname: "Onur",
      phone_number: "456456",
    },
    {
      fullname: "Mert",
      phone_number: "789789",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h2>Contacts</h2>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
