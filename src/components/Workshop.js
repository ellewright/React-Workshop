import Counter from "./Counter";
function Workspace() {
    return (
        <div className="workspace">
          <Counter />
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
          <p>May 23, 2024: useState & Counter App</p>
        </div>
        <Workspace />
      </div>
    );
};