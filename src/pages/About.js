import NavBar from "../components/NavBar";
import "./Pages.css";

export default function About() {
  return (
    <div className="About body">
      <NavBar showLogo={true}/>
      <h2 className="heading">About</h2>
    </div>
  );
}
