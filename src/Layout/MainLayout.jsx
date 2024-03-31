import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { GoHome, GoPlus } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";
import { GrInProgress } from "react-icons/gr";
import { MdOutlineDoneOutline } from "react-icons/md";
import { FcCancel } from "react-icons/fc";
import { getUserDetails, logout } from "../Helper/SessionHelper";

const MainLayout = (props) => {

    let [show, setShow] = useState(false)
    let [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <div className="h-screen w-full p-5 bg-secondary bg-opacity-5">
            <div>
                <nav className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
        {
            sidebarOpen?
            <IoMenu onClick={()=>setSidebarOpen(!sidebarOpen)} className=" cursor-pointer font-bold text-3xl text-primary transition-all duration-500" />
            :
            <IoClose onClick={()=>setSidebarOpen(!sidebarOpen)} className=" cursor-pointer font-bold text-3xl text-primary transition-all duration-500" />

        }
        
        <Link to={'/'} className="font-bold text-3xl text-primary">TaskQuest</Link>
        </div>
        <div className="relative">
            <div onClick={()=>setShow(!show)} className="duration-500 cursor-pointer border-2 border-primary overflow-hidden h-[60px] w-[60px] rounded-full bg-primary">
                <img src={getUserDetails()?.profilePicture} alt="" />
            </div>
{
    show&&
    <div className="duration-500 w-[300px] p-5 rounded-lg text-center bg-primary top-0 right-0 absolute transition-all">
    <IoClose onClick={()=>setShow(!show)}  className="font-bold text-3xl text-white cursor-pointer " />

     <div className="cursor-pointer h-[60px] w-[60px] rounded-full overflow-hidden bg-primary border  mx-auto mb-5 transition-all duration-500">
         <img src={getUserDetails()?.profilePicture} alt="" />
     </div>
     <h1 className="text-white p-2 border mb-5 rounded-lg font-bold">{getUserDetails()?.firstName + " " + getUserDetails()?.lastName}</h1>
     <Link to={'/profile'} className="text-white p-1 font-semibold px-3 border  rounded-lg duration-500 hover:bg-white hover:border hover:text-primary cursor-pointer">Update Profile</Link>
     
     <button onClick={()=>logout()} className="bg-white text-primary w-full mt-5 rounded-lg font-semibold py-1 border duration-500 hover:bg-primary hover:border hover:text-white">Logout</button>
     </div>
}
        </div>
                </nav>
            </div>
            <div className="flex justify-between pt-5">
        <div className={`${sidebarOpen? 'w-[20%] p-5 text-white font-bold ' : 'w-[0%] p-0 hidden'} bg-primary bg-opacity-[.4]  transition-all duration-500 rounded-lg `}>
        <NavLink to="/"className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-primary text-white p-2 rounded-lg font-bold block mb-3" : "block mb-3 "}><GoHome className="inline mr-2 mb-1 font-bold text-xl"/>Home</NavLink>
        <NavLink to="/create-todo" className={({ isActive, isPending }) =>isPending ? "block" : isActive ? "bg-primary text-white p-2 rounded-lg font-bold block mb-3" : "block mb-3 "}><IoCreateOutline className="inline mr-2 mb-1 font-bold text-xl text-purple-500" /> Create Task</NavLink>
        <NavLink to="/new-todo" className={({ isActive, isPending }) =>isPending ? "block" : isActive ? "bg-primary text-white p-2 rounded-lg font-bold block mb-3" : "block mb-3 "}><GoPlus className="inline mr-2 mb-1 font-bold text-xl text-yellow-500"/> New </NavLink>
        <NavLink to="/progress-todo" className={({ isActive, isPending }) =>isPending ? "block" : isActive ? "bg-primary text-white p-2 rounded-lg font-bold block mb-3" : "block mb-3 "}><GrInProgress className="inline mr-2 mb-1 font-bold text-lg text-blue-500"/> Progress </NavLink>
        <NavLink to="/complete-todo" className={({ isActive, isPending }) =>isPending ? "block" : isActive ? "bg-primary text-white p-2 rounded-lg font-bold block mb-3" : "block mb-3 "}><MdOutlineDoneOutline className="inline mr-2 mb-1 font-bold text-green-500 text-lg"/>Complete </NavLink>
        <NavLink to="/cancelled-todo" className={({ isActive, isPending }) =>isPending ? "block" : isActive ? "bg-primary text-white p-2 rounded-lg font-bold block mb-3" : "block mb-3 "}><FcCancel className="inline mr-2 mb-1 font-bold text-lg" />Cancelled </NavLink>
            </div>
        <div className={`${sidebarOpen? 'w-[77%]' : 'w-[100%]'} bg-third bg-opacity-[.7] p-5 transition-all duration-500 rounded-lg`}>{props.children}</div>
            </div> 
        </div>
    );
};

export default MainLayout;