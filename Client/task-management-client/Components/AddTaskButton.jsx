import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs'
import Popup from './Popup';

export default function AddTaskButton(){
    const [show, setShow] = useState(false);

    const notShow = () => {
        setShow(!show);
    }

    return (
        <div>
            <div onClick={notShow} className="absolute top-[5rem] right-[3rem] cursor-pointer drop-shadow rounded-full p-4 bg-slate-500">
                <BsPlusLg color='#0F172A' size='25px'/>
            </div>
            {
                show && <Popup heading="Add New Task" setShow={setShow} className="block"/>
            }
        </div>
    );
}