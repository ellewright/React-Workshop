function Workspace() {

  const firstName = <h2>Ellie</h2>;
  const age = <p>23</p>;
  const email = <p>email@address.com</p>;

    return (
        <div className="workspace">
          <p>May 21, 2024</p>
          <User firstName="Ellie" age={23} email="email@address.com" />
          <User firstName="Kennedy" age={22} email="email2@address.com" />
          <User firstName="Randy" age={45} email="randymarsh@southpark.com" />
        </div>
    );
};

export default function Workshop() {
    return (
      <div className="workshop-container">
        <div className="workshop-title">
          <h1>React Workshop</h1>
        </div>
        <Workspace />
      </div>
    );
};

const User = (props) => {
  return (
    <div>
      {props.firstName} {props.age} {props.email}
    </div>
  );
};