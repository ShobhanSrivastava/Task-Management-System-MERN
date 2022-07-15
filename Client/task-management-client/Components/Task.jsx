import Priority from "./Priority";
import { useState } from "react";
import UpdateTask from "./UpdateTask";

export default function Task(props){
    const [show, setShow] = useState(false);

    const notShow = () => {
        setShow(!show);
    }

    return (
        <div className="bg-theme-blue h-fit my-5 mx-8 rounded-lg drop-shadow-2xl">
            <div onClick={notShow} className={` cursor-pointer flex flex-col justify-start items-center`}>
                <p className="text-white font-mono font-semibold my-1 text-lg">{props.title}</p>
                <p className="text-white font-mono mt-2 text-sm">{props.description}</p>
                <Priority priority='High'/>
            </div>
            <div className="my-2">
                {
                    show && <UpdateTask />
                }
            </div>
        </div>
    );
}


// border-slate-500 border-[0.25px]