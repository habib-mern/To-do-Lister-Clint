import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";


const MainLayout = () => {

    let [show, setShow] = useState(false)
    let [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <div className="h-screen w-full p-5 bg-secondary bg-opacity-5">
            <div>
                <nav className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
        {
            sidebarOpen?
            <IoMenu onClick={()=>setSidebarOpen(!sidebarOpen)} className="duration-500 cursor-pointer font-bold text-3xl text-primary transition-all duration-500" />
            :
            <IoClose onClick={()=>setSidebarOpen(!sidebarOpen)} className="duration-500 cursor-pointer font-bold text-3xl text-primary transition-all duration-500" />

        }
        
        <a href="" className="font-bold text-3xl text-primary">TaskQuest</a>
        </div>
        <div className="relative">
            <div onClick={()=>setShow(!show)} className="duration-500 cursor-pointer h-[60px] w-[60px] rounded-full bg-primary">
                <img src="" alt="" />
            </div>
{
    show&&
    <div className="duration-500 w-[300px] p-5 rounded-lg text-center bg-primary top-0 right-0 absolute transition-all">
    <IoClose onClick={()=>setShow(!show)}  className="font-bold text-3xl text-white cursor-pointer " />

     <div className="cursor-pointer h-[60px] w-[60px] rounded-full bg-primary border  mx-auto mb-5 transition-all duration-500">
         <img src="" alt="" />
     </div>
     <h1 className="text-white p-2 border mb-5 rounded-lg font-bold">Ahsanul Habib</h1>
     <a className="text-white p-1 font-semibold px-3 border  rounded-lg duration-500 hover:bg-white hover:border hover:text-primary cursor-pointer">View Profile</a>
     
     <button className="bg-white text-primary w-full mt-5 rounded-lg font-semibold py-1 border duration-500 hover:bg-primary hover:border hover:text-white">Logout</button>
     </div>
}
        </div>
                </nav>
            </div>
            <div className="flex justify-between pt-5">
        <div className={`${sidebarOpen? 'w-[20%] p-10' : 'w-[0%] p-0'} bg-primary bg-opacity-[.4]  transition-all duration-500 rounded-lg`}  >side bar</div>
        <div className={`${sidebarOpen? 'w-[77%]' : 'w-[85%]'} bg-third bg-opacity-[.7] p-10 transition-all duration-500 rounded-lg`}  >main content</div>
            </div>
        </div>
    );
};

export default MainLayout;