import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  const close = () => {
    setMenuOpen(false);
  };
  return (
    <div className={`menu ${menuOpen && "active"}`}>
      <ul>
        <li onClick={close}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={close}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={close}>
          <a href="#works">Works</a>
        </li>
        <li onClick={close}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={close}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
