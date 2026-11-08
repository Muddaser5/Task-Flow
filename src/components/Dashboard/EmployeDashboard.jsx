import React from "react";
import TaskListNumber from "../other/TaskListNumber";
import Header from "../other/Header";
import TaskList from "../TaskList/TaskList";

const EmployeDashboard = (data) => {
    return (
        <div className="p-10 bg-[#1C1C1C] bg-grey[600} h-screen">

            <Header data={data}/>
            <TaskListNumber data={data}/>
            <TaskList data={data}/>
        </div>
    )
}


export default EmployeDashboard
