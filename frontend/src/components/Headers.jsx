import image from "../assets/meetup-1.svg";
import search from "../assets/search.svg";

const Headers = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={image} alt="meetup" width="120" height="50" />
          </a>

          <button
            type="button"
            className="btn btn-default btn-sm bg-white text-secondary p-2"
          >
            <i class="bi bi-search"></i> Search by title and t...
          </button>
        </div>
      </nav>
    </>
  );
};

export default Headers;
