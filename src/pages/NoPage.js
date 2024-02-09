import NavBar from "../components/NavBar";

export default function NoPage() {
  return (
    <>
      <NavBar showLogo={true} />
      <h2>Error 404: No page found</h2>
    </>
  );
}
