import NavBar from "../components/NavBar";
import "../About.css";
import "../Pages.css";
import Footer from "../components/Footer";
import about from "./images/abouts-page.png";
import aboutBreak from "./images/about-break.png";

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
              At Anker Solutions, we seamlessly blend property management with
              compassion. Specialising in tenant placement and property
              maintenance, we provide a unique service for landlords with HMO
              licences and a secure solution for individuals in need of{" "}
              <a className="link-opacity-100-hover" href="#about-sh">
                {" "}
                supported accommodation
              </a>
              . By collaborating with local authorities, we help vulnerable
              individuals transition smoothly to independent living. Funded by
              grants and rental income from the local council, we are committed
              to making a meaningful impact without compromise. Whether you're a
              landlord or someone seeking support, we are here to meet your
              needs with dedication and care.
            </p>
            <br />
            <p className="about-paragraph">
              As a dedicated family-run business, we strive to redefine the
              landscape of property management by infusing care, kindness, and a
              genuine commitment to making a positive impact. Our commitment
              extends beyond promises; it's about building a supportive
              community. Discover the Anker Solutions difference – where your
              property is more than just a space; it's a place for positive
              change.
            </p>
          </div>
          <div className="col-md-6">
            <img src={about} alt="about" className="img-fluid abouts-page" />
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
              At Anker Solutions, our mission is to bridge the UK's housing gap
              for vulnerable individuals and alleviate the nationwide
              accommodation shortage. Through strategic collaboration with
              landlords, we create high-quality short-term housing solutions.
            </p>
            <p className="our-para">
              We foster a community where everyone has a place to call their
              own. Together, we connect people to homes, ensuring a brighter
              future for all.
            </p>
          </div>
        </div>
        <div>
          <img
            src={aboutBreak}
            alt="about"
            className="img-fluid abouts-page about-break"
          />
        </div>
        <div className="heading supported-heading mt-5" id="about-sh">
          About <em>Supported Housing</em>
        </div>
        <p className="our-approach">
          Supported housing refers to accommodations tailored to assist
          individuals who require support to live independently. Our services
          cater specifically to landlords with HMO licenses and individuals
          seeking secure, supported accommodation. Through collaboration with
          local authorities, we facilitate smooth transitions for vulnerable
          individuals into independent living.
        </p>
        <div className=" heading SH-definition">
          <em>Our Approach</em>
        </div>
        <br />
        <div>
          <ul className="our-approach">
            <li>
              <strong>Tailored Tenant Placement:</strong> We carefully match
              individuals in need with suitable housing options, prioritising
              their safety and comfort.
            </li>
            <li>
              <strong>Proactive Property Maintenance:</strong>{" "}
              <div>
                We uphold properties to high standards, ensuring a safe and
                pleasant living environment for our tenants.
              </div>
            </li>
            <li>
              <strong>Collaboration for Success:</strong> Working closely with
              local councils, we ensure compliance with regulations and address
              community housing needs effectively.
            </li>
          </ul>
        </div>
        <br />
        <div className=" heading SH-definition">
          <em>Community Impact</em>{" "}
        </div>
        <br />
        <div className="container">
          <div className="row">
            <p className=" col-md-6 as about-paragraph">
              <strong>Reduction in Homelessness:</strong> By providing stable
              and supported housing, Anker Solutions helps reduce the number of
              individuals experiencing homelessness in the community.
            </p>
            <p className="col-md-6 as about-paragraph">
              <strong>Improved Mental and Physical Health:</strong> Stable
              housing contributes to improved mental health outcomes and reduces
              stress associated with homelessness or insecure housing
              situations. Access to support services also enhances physical
              well-being.
            </p>
            <p className=" col-md-6 as about-paragraph">
              <strong>Enhanced Community Safety:</strong> Stable housing can
              lead to reduced crime rates in local areas as individuals have
              secure living arrangements and access to support services that
              address underlying issues.
            </p>
            <p className="col-md-6 as about-paragraph">
              <strong>Integration and Social Inclusion:</strong> Supported
              housing programs often foster a sense of community among residents
              and encourage social interaction and integration, reducing
              isolation and loneliness.
            </p>
            <p className="col-md-6 as about-paragraph">
              <strong>Relief on Local Emergency Services:</strong> By providing
              stable housing and support services, we aim to reduce the strain
              on local emergency services, including hospitals and law
              enforcement, associated with homelessness.
            </p>
            <p className="col-md-6 as about-paragraph">
              <strong>Employment and Educational Opportunities:</strong> Stable
              housing provides a foundation for individuals to pursue education
              and employment opportunities, contributing to economic stability
              and independence.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
