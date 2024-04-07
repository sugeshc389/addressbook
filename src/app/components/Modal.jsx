import newRequest from "../axios/axios";
import Button from "./Button";
import React, { useState, useRef,useEffect } from "react";

const Modal = ({ isVisible, onClose, editUser }) => {
  if (!isVisible) return null;

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  const handleSubmit = async (userId) => {
    console.log(name, phone, email);
    const res = await newRequest.put("/updateUser", {
      name,
      phone,
      email,
      userId,
    });
    alert("User Updated");
    onClose();
  };
  useEffect(() => {}, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[300px]">
        <div className="bg-white p-2 rounded flex flex-col ">
          <input
            className="text-black"
            type="text"
            ref={nameRef}
            placeholder="Name"
            defaultValue={editUser.name}
            onChange={() => setName(nameRef.current.value)}
          />
          <input
            ref={phoneRef}
            className="text-black"
            type="number"
            placeholder="Phone"
            defaultValue={editUser.phone}
            onChange={() => setPhone(phoneRef.current.value)}
          />
          <input
            ref={emailRef}
            className="text-black"
            type="email"
            placeholder="Email"
            defaultValue={editUser.email}
            onChange={() => setEmail(emailRef.current.value)}
          />
        </div>
        <div className="flex space-x-24 mt-3">
          <Button
            value={"Update"}
            onClick={() => handleSubmit(editUser._id)}
            className={
              "w-[100px] h-[50px] bg-[#5D87FF] rounded-md text-white text-[13px] "
            }
          />
          <Button
            onClick={onClose}
            value={"Cancel"}
            className={
              "w-[100px] h-[50px] bg-[#ff512e] rounded-md text-white text-[13px] "
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
