import { useState } from "react";
import { works } from "./data";
import "./Works.css";

const Works = () => {
  const [selectedGroup, setSelectedGroup] = useState("All");

  const filteredWorks =
    selectedGroup === "All"
      ? works
      : works.filter((work) => work.group === selectedGroup);

  return (
    <div className="holder">
      <h2>My Works</h2>
      <div className="worksButton">
        <button
          className={selectedGroup === "All" ? "active" : ""}
          onClick={() => setSelectedGroup("All")}
        >
          All
        </button>
        <button
          className={selectedGroup === "Html" ? "active" : ""}
          onClick={() => setSelectedGroup("Html")}
        >
          HTML & CSS
        </button>
        <button
          className={selectedGroup === "React" ? "active" : ""}
          onClick={() => setSelectedGroup("React")}
        >
          REACT JS
        </button>
        <button
          className={selectedGroup === "Node" ? "active" : ""}
          onClick={() => setSelectedGroup("Node")}
        >
          NODE JS
        </button>
        <button
          className={selectedGroup === "Ux" ? "active" : ""}
          onClick={() => setSelectedGroup("Ux")}
        >
          UI/UX DESIGN
        </button>
      </div>
      <div className="divWrapperh">
        {filteredWorks.map((work) => {
          return (
            <div key={work.id} className="workCard">
              <h2>{work.tittle}</h2>
              <img src={work.image} alt={work.tittle} />
              <p>{work.paragraph}</p>
              <p>{work.group}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
