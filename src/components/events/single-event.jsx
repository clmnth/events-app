import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  console.log("inputEmail", inputEmail);
  const router = useRouter();
  console.log("router", router);

  const onSubmit = (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
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
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default SingleEvent;
