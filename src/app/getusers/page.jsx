"use client";
import React, { useEffect, useState } from "react";
import newRequest from "../axios/axios";
import Button from "../components/Button";

const Page = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await newRequest.get("/getusers");

      setUsers(res.data);
      console.log(users, "hiaaaaaa");
    } catch (error) {
      console.error("Fetchin error", error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {}, [users]);

  return (
    <div className="p-10">
      <h1>All Users Details </h1>
      <table className="">
        <thead >
          <tr>
            <th>User</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        {users.map((user) => (
          <tbody className="border border-spacing-4 ">
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
            <div className="flex p-2 space-x-10">
              <tr>
                <Button
                  value={"Edit"}
                  className={
                    "w-[70px] h-[30px] bg-[#0b8119] rounded-md text-white text-[13px] "
                  }
                />
              </tr>
              <tr>
                <Button
                  value={"Delete"}
                  className={
                    "w-[70px] h-[30px] bg-[#e11e1e] rounded-md text-white text-[13px] "
                  }
                />
              </tr>
            </div>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Page;
