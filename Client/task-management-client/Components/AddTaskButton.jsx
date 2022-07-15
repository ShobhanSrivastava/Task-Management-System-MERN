import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs'

export default function AddTaskButton(){
    const [show, setShow] = useState(false);

    const notShow = () => {
        useState(!show);
    }

    return (
        <div onClick={notShow} className="absolute top-[5rem] right-[3rem] cursor-pointer drop-shadow rounded-full p-4 bg-white">
            <BsPlusLg color='#0F172A' size='25px'/>
            {
                show && <Popup />
            }
        </div>
    );
}