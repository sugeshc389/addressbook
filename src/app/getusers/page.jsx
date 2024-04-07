"use client";
import React, { useEffect, useState } from "react";
import newRequest from "../axios/axios";
import Button from "../components/Button";
import Modal from "../components/Modal";
import DeleteModal from "../components/DeleteModal";

const Page = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setModal] = useState(false);
  const [editUser, setEditUser] = useState([]);
  const [deleShowModal, setDeleteShowModal] = useState(false);
  const [id, setId] = useState();

  const getUsers = async () => {
    try {
      const res = await newRequest.get("/getusers");

      setUsers(res.data);
    } catch (error) {
      console.error("Fetchin error", error);
    }
  };
  const handleEdit = async (userId) => {
    setModal(true);
    const res = await newRequest.put("/edituser", { id: userId });
    setEditUser(res.data);
    console.log(editUser, "This is edit");
  };
  const handleDelete = async (userId) => {
    setDeleteShowModal(true);
    setId(userId);
    console.log(userId);
  };
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {}, [users, editUser]);

  return (
    <div className="p-10">
      <h1>All Users Details </h1>
      <table className="">
        <thead>
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
                  onClick={() => handleEdit(user._id)}
                  value={"Edit"}
                  className={
                    "w-[70px] h-[30px] bg-[#0b8119] rounded-md text-white text-[13px] "
                  }
                />
              </tr>
              <tr>
                <Button
                  onClick={() => handleDelete(user._id)}
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
      <DeleteModal
        isVisible={deleShowModal}
        closeModal={() => setDeleteShowModal(false)}
        userId={id}
      />
      <Modal
        isVisible={showModal}
        onClose={() => setModal(false)}
        editUser={editUser}
      />
    </div>
  );
};

export default Page;
