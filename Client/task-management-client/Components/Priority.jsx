export default function Priority(props){
    let color = 'white-500';

    const priority = props.priority;

    if(priority == 'High'){
        color = 'red-600';
    }
    else if(priority == 'Medium'){
        color = 'yellow-400';
    }
    else if(priority == 'Low'){
        color = 'green-400';
    }

    return (
        <div className={`border-${color} border-2 rounded-md m-1 h-fit w-fit`} >
            <p className={`text-${color} font-mono bold font-semibold text-xs mx-3 my-1`}>{priority}</p>
        </div>
    );
}