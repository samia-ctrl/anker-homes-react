import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../Services.css"
export default function Services() {
  return (
    <>
      <NavBar showLogo={true} />
      <h2 className="heading">
        <em>Services</em> we offer
      </h2>
      <div className="container ">
        <div className="row">
          <div className="col-md-4  ">
            <div className="service-heading">
              {" "}
              <em>Tenant Placement</em>
              <div className="body services-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4  ">
            <div className="service-heading">
              {" "}
              <em> Property Maintanance</em>
              <div className="body services-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4  ">
            <div className="service-heading">
              {" "}
              <em> Professional Cleaning</em>
              <div className="body services-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 ">
            <div className="service-heading">
              {" "}
              <em> No Rental Voids</em>
              <div className="body services-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4  ">
            <div className="service-heading">
              {" "}
              <em> No Rental Arrears</em>
              <div className="body services-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </div>
            </div>
          </div>
          <div className="col-md-4  ">
            <div className="service-heading">
              {" "}
              <em>Tenant Damage Cover</em>
              <div className="body services-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
