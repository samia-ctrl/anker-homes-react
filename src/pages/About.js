import NavBar from "../components/NavBar";
import "../About.css";
import "../Pages.css";
import Footer from "../components/Footer";
import about from "./images/abouts-page.png";


export default function About() {
  return (
    <div className="About-body">
      <NavBar showLogo={true} />
      <h2 className="heading about-heading mt-3">
        About <em>us</em>
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4">
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
          <div className="col-md-6">
            <img src={about} alt="about" className="img-fluid abouts-page"/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className=" heading our-heading mt-5">
              Our <em>Core Values</em>
            </div>
            <p className="our-para">
              Every action, decision, and interaction is grounded in the
              principles of honesty, transparency, and ethical conduct. We
              understand how important trust is when you allow us to manage your
              property, and we promise to uphold the highest standards of
              integrity, ensuring that you can rely on us as a steadfast partner
              on your journey toward property solutions.
            </p>
          </div>
          <div className="col">
            <div className="heading our-heading mt-5">
              Our <em>Mission</em>{" "}
            </div>

            <p className="our-para">
              At Anker Homes, our mission is to bridge the UK's housing gap for
              vulnerable individuals and alleviate the nationwide accommodation
              shortage. Through strategic collaboration with landlords, we
              create high-quality short-term housing solutions.
            </p>
            <p className="our-para">
              We foster a community where everyone has a place to call their
              own. Together, we connect people to homes, ensuring a brighter
              future for all.
            </p>
          </div>
        </div>
        <div className="heading supported-heading mt-5">
          About <em>Supported Housing</em>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <Footer />
    </div>
  );
}
