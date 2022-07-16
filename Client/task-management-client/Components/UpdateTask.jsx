import { BsArrowLeftCircle } from 'react-icons/bs'
import { BsArrowRightCircle } from 'react-icons/bs'
import { TbEdit } from 'react-icons/tb'
import { MdDelete } from 'react-icons/md'
import { useState } from 'react'
import Popup from './Popup'


export default function UpdateTask(){
    const [show, setShow] = useState(false);

    const notShow = () => {
        setShow(!show);
    }

    return (
        <div>
            {
                show && <Popup setShow={setShow} className="block" heading="Edit Task"/>
            }
            <div className="w-full flex justify-around pb-4">
                <button>
                    <BsArrowLeftCircle color="white" size='25px'/>
                </button>
                <button onClick={notShow}>
                    <TbEdit color="white" size='25px'/>
                </button>
                <button>
                    <MdDelete color="white" size='25px'/>
                </button>
                <button>
                    <BsArrowRightCircle color="white" size='25px'/>
                </button>
            </div>
        </div>
    );
}