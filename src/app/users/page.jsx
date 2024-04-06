"use client";
import { useRef } from "react";
import Button from "../components/Button";
import newRequest from "../axios/axios";

const App = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    try {
      const res = await newRequest.post("/adduser", { name, phone, email });
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div>
      <h1>User Address Book</h1>
      <div className="flex flex-col gap-3 justify-center items-center">
        <input ref={nameRef} type="text" placeholder="Name" />
        <input ref={phoneRef} type="number" placeholder="Phone Number" />
        <input ref={emailRef} type="email" placeholder="Email" />
        <Button onClick={handleSubmit} value={"Submit"} />
      </div>
    </div>
  );
};

export default App;
