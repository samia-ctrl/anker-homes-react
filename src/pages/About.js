import NavBar from "../components/NavBar";
import "../About.css"
import "../Pages.css";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="About-body">
      <NavBar showLogo={true} />
      <h2 className="heading about-heading">
        About <em>us</em>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="about-paragraph">
              At Anker Homes, we blend property management with compassion.
              Specialising in tenant placement and property maintenance, we
              offer a unique partnership for landlords with HMO licenses. By
              participating in our supported housing programme with
              government-backed funding, landlords can collaborate with us in
              providing essential transitional housing for vulnerable
              individuals. This partnership not only creates a positive impact
              but also ensures reliable income for our partners.
            </p>
            <br />
            <p className="about-paragraph">
              As a dedicated family-run business, we strive to redefine the
              landscape of property management by infusing care, kindness, and a
              genuine commitment to making a positive impact. Our commitment
              extends beyond promises; it's about building a supportive
              community. Discover the Anker Homes difference – where your
              property is more than just a space; it's a place for positive
              change.
            </p>
          </div>
          <div className="col">
            {/* img will go here */}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
