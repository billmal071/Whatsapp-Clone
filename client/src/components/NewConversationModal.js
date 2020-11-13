import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { contacts } from "../contexts/ContactProvider";

const NewConversationModal = () => {
  const [selectedContactIds, setSelectedContactIds] = useState();
  const handleSubmit = (e) => {};
  const handleCheckboxChange = (contactId) => {

  }
  return (
    <>
      <Modal.Header closeButton>Create Conversation</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={()=>handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;
