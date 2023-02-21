const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
    return(
        <>
        <div className="row"> 
        <div className="col">

          <input
          value={ updateData && updateData.title}
          onChange={ (e) => changeTask(e)}
           className="form-control form-control-lg"
            />
        </div>


        <div className="col-auto">

          <button 
          className="btn btn-lg btn-success"
          onClick={updateTask}>
            Update
          </button>
          <button
          onClick={cancelUpdate}
          className="btn btn-lg btn-warning">
            Cancel
          </button>
        </div>
      </div>
        </>
    )
}

export default UpdateForm;