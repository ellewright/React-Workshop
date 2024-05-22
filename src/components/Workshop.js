import { Planets } from "./Planets";
function Workspace() {

    const planets = [
      { planet: "Mercury", isGasPlanet: false },
      { planet: "Venus", isGasPlanet: false },
      { planet: "Earth", isGasPlanet: false },
      { planet: "Mars", isGasPlanet: false },
      { planet: "Jupiter", isGasPlanet: true },
      { planet: "Saturn", isGasPlanet: true },
      { planet: "Uranus", isGasPlanet: true },
      { planet: "Neptune", isGasPlanet: true },
      { planet: "Pluto", isGasPlanet: false },
    ];

    return (
        <div className="workspace">
          <p>May 22, 2024: Use .map() function to show our solar system&apos;s gas planets.</p>
          <div>
          {planets.map((planet, key) => {
            if (planet.isGasPlanet) {
              return (
                <Planets key={key} planet={planet.planet} />
              );
            }
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