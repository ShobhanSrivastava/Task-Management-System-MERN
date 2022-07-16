import { useState } from "react";

export default function CustomForm(props) {
    const [userData, setUserData] = useState({
        title: "",
        description: "",
        priority: "",
        status: ""
    });

    function handleTextInputs(event) {
        const {name , value} = event.target;
        setUserData((prevValue) => {
            return {
                ...prevValue,
                [name] : value
            }
        });
    }

    function handleRadioInputs(event) {
        const {name, id} = event.target.id;
        setUserData((prevValue) => {
            return {
                ...prevValue,
                [name]: id
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        const finalData = userData;

        setUserData({
            title: "",
            description: "",
            priority: "",
            status: "",
        });

        console.log(finalData);
    }

    function handleClose(){
        props.setShow(false);
    }

    return (
        <form action="" className="flex flex-col justify-center py-5 px-10 font-mono" >
            <label className="text-slate-400 text-lg" htmlFor="">Title</label>
            <input onChange={handleTextInputs} className="bg-slate-300 rounded-md h-9 px-2" type="text" id="title" autoComplete="off" value={userData.title} name="title"/><br />
            <label className="text-slate-400 text-lg" htmlFor="">Description</label>
            <input onChange={handleTextInputs} className="bg-slate-300 rounded-md h-9 px-2" autoComplete="off" value={userData.description} type="text" name="description"/><br />
            <label className="text-slate-400 text-lg" htmlFor="">Priority</label>
            <div className="flex justify-between my-1">
                <span>
                    <input onClick={handleRadioInputs} type="radio" name="priority" id="high" placeholder="high"/><span className="text-slate-400 px-3">High</span>
                </span>
                <span>
                    <input onClick={handleRadioInputs} type="radio" name="priority" id="medium" placeholder="medium"/><span className="text-slate-400 px-3">Medium</span>
                </span>
                <span>
                    <input onClick={handleRadioInputs} type="radio" name="priority" id="low" placeholder="low"/><span className="text-slate-400 px-3">Low</span>
                </span>
            </div>

            <label className="text-slate-400 text-lg" htmlFor="">Status</label>
            <div className="flex justify-between my-1">
                <span>
                    <input onClick={handleRadioInputs} type="radio" name="status" id="to-do" /><span className="text-slate-400 px-3">To-do</span>
                </span>
                <span>
                    <input onClick={handleRadioInputs} type="radio" name="status" id="in progress"/><span className="text-slate-400 px-3">In Progress</span>
                </span>
                <span>
                    <input onClick={handleRadioInputs} type="radio" name="status" id="done"/><span className="text-slate-400 px-3">Done</span>
                </span>
            </div>
            
            <div className="w-full flex flex-row items-center justify-around">
                <button className="bg-white rounded-md hover:bg-slate-400 hover:text-white text-theme-blue font-bold w-fit h-fit px-4 py-2 my-2" onClick={handleSubmit}>
                    {props.buttonText}
                </button>

                <button className="bg-white rounded-md hover:bg-slate-400 hover:text-white text-theme-blue font-bold w-fit h-fit px-4 py-2 my-2" onClick={handleClose}>
                    Cancel
                </button>
            </div>
        </form>
    );
}