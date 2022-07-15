import Tasklist from "./Tasklist";

export default function TaskHolder(){
    return (
        <div className="py-8 px-16">
            <div className="w-full grid grid-cols-3 gap-8 h-screen rounded border-white">
                <Tasklist title='To-do'/>
                <Tasklist title='In Progress'/>
                <Tasklist title='Done!'/>
            </div>
        </div>
    );
}