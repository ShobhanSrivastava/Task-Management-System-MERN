import Priority from "./Priority";

export default function Task(props){
    return (
        <div className="h-24 border-red- border-[0.25px] my-5 mx-8 rounded-lg bg-theme-blue flex flex-col justify-start items-center">
            <div className="h-2 bg-green-900"></div>
            <p className="text-white font-mono text-lg">{props.title}</p>
            <p className="text-white font-mono text-sm">{props.description}</p>
            <Priority priority='Low' />
        </div>
    );
}

// border-slate-500
