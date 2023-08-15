import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const data = {
  name: "Balogun Damilola",
  intro:
    "I am a Frontend Developer living in Nigeria aiming to be a better developer than i am right now, by the grace of God",
  skillSet: "Html CSS Js Vue.js React"
};

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro name={data.name} intro={data.intro} />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skillset={data.skillSet} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        className="avatar"
        src="https://media.istockphoto.com/id/1127245421/photo/woman-hands-praying-for-blessing-from-god-on-sunset-background.webp?b=1&s=170667a&w=0&k=20&c=bPoh4FbWez1Za2_DfgYY2VlZ3F6RKtx9_OF8I5ZSpXU="
        alt="Avatar"
      />
    </div>
  );
}

function Intro(props) {
  return (
    <div className="skills ">
      <h3> {props.name} </h3>
      <p> {props.intro} </p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div className="skill-list data">
      <h5> {props.skillset} </h5>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
