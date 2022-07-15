export default function Priority(props){
    if(props.priority == 'High'){
        return (
            <div className={`border-rose-500 border-[1px] rounded-md my-2 h-fit w-fit`} >
                <p className={`text-rose-500 font-mono bold font-semibold text-xs mx-3 my-1`}>{props.priority}</p>
            </div>
        );
    }
    else if(props.priority == 'Medium'){
        return (
            <div className={`border-yellow-500 border-[1px] rounded-md my-2 h-fit w-fit`} >
                <p className={`text-yellow-500 font-mono bold font-semibold text-xs mx-3 my-1`}>{props.priority}</p>
            </div>
        );
    }
    else if(props.priority == 'Low'){
        return (
            <div className={`border-green-500 border-[1px] rounded-md my-2 h-fit w-fit`} >
                <p className={`text-green-500 font-mono bold font-semibold text-xs mx-3 my-1`}>{props.priority}</p>
            </div>
        );
    }
}

