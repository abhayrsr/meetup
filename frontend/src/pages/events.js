import Headers from "../components/Headers";
import useFetch from "../useFetch";

const Events = () => {
  const { data, loading, error } = useFetch(`http://localhost:3001/events`);
  console.log(data);

  return (
    <div>
      <Headers />
      <main className="bg-body-tertiary">
        <div className="container">
        
          <div className="">
          <hr className="mt-0 mb-4" /> 
            <h1 className="float-start">Meetup Events</h1>
            <div className="dropdown float-end">
              <a
                className="btn btn-secondary dropdown-toggle bg-white text-secondary border border-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select event type
              </a>

              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Offline
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Online
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <br />
          <br />
          <br />
          <div className="container">
            <div className="row">
              {data?.map((ele, key) => (
                <div className="col-4 mb-3" key={key}>
                  <div className="">
                    <img
                      src={ele.thumbnail}
                      alt={ele.title}
                      width="350"
                      height="250"
                      className="rounded"
                    />
                    <p className="text-secondary">
                      {ele.date}
                      <p className="fs-5 fw-bold text-dark">{ele.title}</p>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
