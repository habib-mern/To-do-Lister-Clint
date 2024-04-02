import  { useState } from "react";
import { CreateTodoApi } from "../API/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("New");
  const navigate = useNavigate()


  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform actions like sending data to backend, etc.
    CreateTodoApi(title,description)
    .then((response)=>{
        if(response===true){
            navigate('/new-todo')
        }
        else{
            toast.error('Somthing went wron')
        }
    })
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Status:", status);
    // Reset the form fields
    setTitle("");
    setDescription("");
    setStatus("New");
  };

  return (
    <div className="p-5 text-primary mx-auto ">
      <h2 className="text-2xl font-bold mb-4">Create Todo</h2>
      <form onSubmit={handleSubmit}>

        <div className="flex  items-center">

        <div className="mb-4 ">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
          <input
            type="text"
            id="title"
           
            value={title}
            onChange={handleTitleChange}
            className="mt-1 p-1 block w-[90%] border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status:</label>
          <select
            id="status"
            value={status}
            onChange={handleStatusChange}
            className="mt-1 p-1 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="New">New</option>
            <option value="Progress">Progress</option>
            <option value="Complete">Complete</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="mt-1 p-3 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button  className="btn_v1 w-[20%] text-white px-4 py-2 rounded-md hover:bg-blue-600">Create Todo</button>
      </form>
    </div>
  );
};

export default CreateTodo;
