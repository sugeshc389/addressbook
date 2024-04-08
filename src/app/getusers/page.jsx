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
  const handleSave = async (userId) => {
    const res = await newRequest.post("/saveUser", { userId });
    if (res.status == "201") alert("This user is Saved");

    console.log(res);
  };
  useEffect(() => {
    getUsers();
  }, []);
  useEffect(() => {}, [users, editUser]);

  return (
    <div className="p-10">
      <h1>All Users Details </h1>
      <table className="w-full ">
        <thead>
          <tr>
            <th className="bg-gray-400">User</th>
            <th className="bg-gray-400">Email</th>
            <th className="bg-gray-400">Phone</th>
          </tr>
        </thead>

        {users.map((user) => (
          <tbody className="border border-spacing-4 ">
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
            <div className="flex p-2 space-x-32">
              <tr>
                <Button
                  onClick={() => handleEdit(user._id)}
                  value={"Edit"}
                  className={
                    "w-[70px] h-[30px] bg-[#0b8119] rounded-md text-white text-[13px] font-bold tracking-wider "
                  }
                />
              </tr>
              <tr>
                <Button
                  onClick={() => handleDelete(user._id)}
                  value={"Delete"}
                  className={
                    "w-[70px] h-[30px] bg-[#e11e1e] rounded-md text-white text-[13px] font-bold tracking-wider "
                  }
                />
              </tr>
              <tr>
                <Button
                  onClick={() => handleSave(user._id)}
                  value={"Save"}
                  className={
                    "w-[70px] h-[30px] bg-[#9f9f9f] rounded-md text-white text-[13px] font-bold tracking-wider "
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
