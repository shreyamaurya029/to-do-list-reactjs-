const AddTaskForm = ({ newTask,addTask, setNewTask}) => {
    return(
        <>
        {/*Add Task */}

     <div className="row">
       <div className="col">

         <input
         value={newTask}
         onChange={ (e) => setNewTask(e.target.value)}
          className="form-control form-control-lg"
           />
       </div>


       <div className="col-auto">

         <button 
         className="btn btn-lg btn-success"
         onClick={addTask}>
           Add Task
         </button>
       </div>
     </div>

       </>
    )
}

export default AddTaskForm;