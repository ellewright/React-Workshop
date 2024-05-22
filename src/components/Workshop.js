import { User } from "./User";
function Workspace() {

    const users = [
      { firstName: "Eleanor", age: 23, email: "email@address.com" },
      { firstName: "Ken", age: 22, email: "email2@address.com"},
      { firstName: "Bettie", age: 3, email: "bettie@coolcat.com" },
    ];

    return (
        <div className="workspace">
          <p>May 22, 2024: .map() function</p>
          <div>
            {users.map((user, key) => {
              return (
                <User key={key} firstName={user.firstName} age={user.age} email={user.email} />
              );
            })}
          </div>
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