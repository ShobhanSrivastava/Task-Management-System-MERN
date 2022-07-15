import Task from "./Task";

export default function Tasklist(props){
    return (
        <div className="bg-[#1E293B] rounded-xl flex-row item-start">
            <div className="w-full h-20 border-b-[0.25px] border-slate-600 flex justify-center items-center">
                <p className="text-white text-3xl font-mono">{props.title}</p>
            </div>
            <Task title='Study' description='Read Arrays and Liskedlists'/>
            <Task title='Wash Clothes' description='Before 1PM today'/>
        </div>
    );
}