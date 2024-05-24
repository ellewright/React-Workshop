import ToDo from "./ToDoList";
function Workspace() {
    return (
        <div className="workspace">
          <ToDo />
        </div>
    );
};

export default function Workshop() {
    return (
      <div className="workshop-container">
        <div className="workshop-title">
          <h1>React Workshop</h1>
        </div>
        <div className="date">
          <p>May 24, 2024: To-Do List</p>
        </div>
        <Workspace />
      </div>
    );
};