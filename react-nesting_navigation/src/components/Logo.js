import logo from "../img/logo.jpg";

export default function Logo({ src, alt }) {
  return (
    <a href="#">
      <img className="round-image" src={logo} alt="logo" />
    </a>
  );
}
