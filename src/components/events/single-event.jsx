import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(emailRegex)) {
      setMessage("Please enter a valid email address")

    }

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },  
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if(!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = "";

      // POST fetch request
      // body emailValue and the eventId
    } catch (error) {
      console.log("onSubmit error", error);
    }
  };

  return (
    <div div="event_single_page">
      <h1>{data.title}</h1>
      <Image src={data.image} width={700} height={500} alt={data.title} />
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get registered for this event!</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email here"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;
