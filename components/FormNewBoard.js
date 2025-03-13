const FormNewBoard = () => {
    return (
    <form className="bg-base-100 p-8 rounded-3xl space-y-8">
        <label className="form-control w-full ">
            <div className="label">
                <span className="label-text">Board Name</span>
            </div>
            <input type="text" placeholder="Board Name" className="input input-bordered w-full " 
            />
        </label>

       <button className="btn btn-primary w-full" type="submit">Create Board</button>

    </form>
    )
};

export default FormNewBoard;