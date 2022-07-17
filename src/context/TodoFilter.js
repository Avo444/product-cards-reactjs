function TodoFilter() {
    return (
        <div className="filters">
            <input className="active" type="radio" name="filter" id="all"/>
            <label htmlFor="all">All</label>
            <input className="" name="filter" type="radio" id="pending"/>
            <label htmlFor="pending">Pending</label>
            <input className="" name="filter"  type="radio" id="completed"/>
            <label htmlFor="all">Completed</label>
        </div>
    );
}
export default TodoFilter;