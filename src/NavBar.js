
import './NavBar.css';
import { useEffect } from "react";
export function NavBar(props) {
    const addTask = () =>{
        
        props.manager.addTask();
    }
    useEffect(() => {
        document.getElementById('add-task').addEventListener('click', addTask);
    })
    return (
        <>
            <div id='navbar'>
                <a id="brand"> TO DO LIST</a>
                <div className='clock'>###clock </div>
                <span id="options">
                    <a id='add-task'> add </a>
                    <a> remove </a>
                    <a> change </a>
                </span>
            </div>
        </>
    )
}