import { BsArrowLeftCircle } from 'react-icons/bs'
import { BsArrowRightCircle } from 'react-icons/bs'
import { TbEdit } from 'react-icons/tb'
import { MdDelete } from 'react-icons/md'


export default function UpdateTask(){
    return (
        <div className="w-full flex justify-around pb-4">
            <button>
                <BsArrowLeftCircle color="white" size='25px'/>
            </button>
            <button>
                <TbEdit color="white" size='25px'/>
            </button>
            <button>
                <MdDelete color="white" size='25px'/>
            </button>
            <button>
                <BsArrowRightCircle color="white" size='25px'/>
            </button>
        </div>
    );
}