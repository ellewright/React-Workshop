function Workspace() {
    return (
        <div className="workspace">
          <p>This workshop was created on May 21, 2024.</p>
        </div>
    );
}

export default function Workshop() {
    return (
      <div className="workshop-container">
        <div className="workshop-title">
          <h1>React Workshop</h1>
        </div>
        <Workspace />
      </div>
    );
}