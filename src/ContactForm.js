import React from "react";

const ContactForm = () => {
  const handleFormSubmit = event => {
    console.log("this is submitted");
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Name : <input type="text" name="name" />
      </label>
      <label>
        Your message : <textarea />
      </label>
      <label>
        Email address : <input type="text" name="email" />
      </label>
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
