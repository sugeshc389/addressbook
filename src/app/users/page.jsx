"use client";
import { useRef, useState } from "react";
import Button from "../components/Button";
import newRequest from "../axios/axios";
import { useRouter } from "next/navigation";

const App = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await newRequest.post("/adduser", { name, phone, email });
      console.log(res.status);
      if (res.status == "201") {
        alert("User Created");
        nameRef.current.value = "";
        phoneRef.current.value = "";
        emailRef.current.value = "";
      } else {
        alert("Invalid ....");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRoute = () => {
    router.push("/getusers");
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
        <Button
          onClick={handleSubmit}
          value={"Submit"}
          className={
            "w-[100px] h-[50px] bg-[#5D87FF] rounded-md text-white text-[13px] "
          }
        />
      </div>
      <div className="mt-5">
        <Button
          onClick={handleRoute}
          value={"Get Users"}
          className={
            "w-[100px] h-[50px] bg-[#0b8119] rounded-md text-white text-[13px] "
          }
        />
      </div>
    </div>
  );
};

export default App;
