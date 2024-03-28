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
      <div className="container">
        <div className="row">
          <div className="col-4  service-heading">Tenant Placement</div>
          <div className="col-4  service-heading">
            Property Maintanance
          </div>
          <div className="col-4  service-heading">
            Professional Cleaning
          </div>
        </div>
        <div className="row">
          <div className="col-4  service-heading">No Rental Voids</div>
          <div className="col-4  service-heading">No Rental Arrears</div>
          <div className="col-4  service-heading">
            Tenant Damage Cover
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
