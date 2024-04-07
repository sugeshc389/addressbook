import newRequest from "../axios/axios";
import Button from "./Button";

const DeleteModal = ({ isVisible, closeModal, userId }) => {
  if (!isVisible) return null;
  const handleDelete = async () => {
    const res = await newRequest.delete(`/deleteUser/${userId}`)

    console.log(res);
    closeModal();
  };
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center ">
        <div
          className={
            "w-[250px] h-[100px] bg-white text-red-500 text-center p-2 rounded"
          }
        >
          <h1>Are You Sure ?</h1>
          <div className="flex gap-20 mt-3 ml-2">
            <Button
              onClick={handleDelete}
              value={"Delete"}
              className={
                "w-[70px] h-[30px] bg-[#e11e1e] rounded-md text-white text-[13px] "
              }
            />
            <Button
              value={"Cancel"}
              onClick={closeModal}
              className={
                "w-[70px] h-[30px] bg-[#5D87FF] rounded-md text-white text-[13px] "
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
