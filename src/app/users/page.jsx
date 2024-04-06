"use client";
import { useRef, useState } from "react";
import Button from "../components/Button";
import newRequest from "../axios/axios";

const App = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await newRequest.post("/adduser", { name, phone, email });
      console.log(res.status);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>User Address Book</h1>
      <div className="flex flex-col gap-3 justify-center items-center">
        <input
          className="text-black"
          ref={nameRef}
          onChange={() => setName(nameRef.current.value)}
          type="text"
          placeholder="Name"
        />
        <input
          className="text-black"
          ref={phoneRef}
          onChange={() => setPhone(phoneRef.current.value)}
          type="number"
          placeholder="Phone Number"
        />
        <input
          className="text-black"
          ref={emailRef}
          onChange={() => setEmail(emailRef.current.value)}
          type="email"
          placeholder="Email"
        />
        <Button onClick={handleSubmit} value={"Submit"} />
      </div>
     
    </div>
  );
};

export default App;
