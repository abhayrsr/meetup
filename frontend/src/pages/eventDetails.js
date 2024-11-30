import { useParams } from "react-router-dom";
import Headers from "../components/Headers";
import useFetch from "../useFetch";

const EventDetails = () => {
  const { eventId } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:3001/events/${eventId}`
  );
  console.log("eventId", eventId, data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Headers />
      <hr className="mt-0 mb-0" />
      <div className="container bg-body-tertiary">
        <div className="row">
          <div className="col">
            <h2 className="mt-3">{data?.title}</h2>
            <p>
              Hosted By:{" "}
              <strong>
                {data?.speakers[0]} and {data?.speakers[1]}
              </strong>
            </p>
            <img src={data?.thumbnail} width="600" height="400" />
            <h3 className="my-3">Details:</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h3>Additional Information</h3>
            <p>
              <strong>Dress Code:</strong> {data?.additionalInfo.dressCode}
            </p>
            <p>
              <strong>Age Restrictions:</strong>{" "}
              {data?.additionalInfo.ageRestriction}
            </p>
            <h3>Event Tags:</h3>
            <span
              className="badge text-light fs-6 fw-light mb-3"
              style={{ backgroundColor: "#F65858" }}
            >
              {data?.tags[0]}
            </span>{" "}
            <span
              className="badge text-light fs-6 fw-light"
              style={{ backgroundColor: "#F65858" }}
            >
              {data?.tags[1]}
            </span>
          </div>
          <div className="col">
            <div className="d-flex flex-column align-items-end">
              <div
                className="card mt-4"
                style={{ width: "25rem", height: "15rem" }}
              >
                <div className="d-flex flex-column mx-2 my-2">
                  <i class="bi bi-stopwatch m-3"><span className="m-2">{data?.sessionStartTime} to {data?.sessionEndTime}</span></i>
                  <i class="bi bi-geo-alt m-3"><span className="mx-2">{data?.address}</span></i>
                  <i class="bi bi-currency-rupee m-3"><span className="mx-2">{data?.pricing}</span></i>
                </div>
              </div>
            </div>

            <div className="text-center mt-3">
              <h3 className="">Speakers: ({data?.speakers.length})</h3>
              <div className="d-flex justify-content-end gap-5 mt-3">
                <div
                  className="card"
                  style={{ width: "11rem", height: "8rem" }}
                >
                  <div className="text-center mt-2">
                    <img
                      src={data?.thumbnail}
                      style={{ width: "4rem", height: "4rem" }}
                      className="rounded-circle"
                    />
                    <p>
                      <strong>{data?.speakers[0]}</strong>
                    </p>
                  </div>
                </div>
                <div
                  className="card"
                  style={{ width: "11rem", height: "8rem" }}
                >
                  <div className="text-center mt-2">
                    <img
                      src={data?.thumbnail}
                      style={{ width: "4rem", height: "4rem" }}
                      className="rounded-circle"
                    />
                    <p>
                      <strong>{data?.speakers[1]}</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="rounded text-center"
                style={{ marginLeft: "4rem" }}
              >
                <button
                  type="button"
                  className="btn text-light mt-3"
                  style={{
                    marginLeft: "11rem",
                    paddingLeft: "4rem",
                    paddingRight: "4rem",
                    backgroundColor: "#F65858",
                  }}
                >
                  RSVP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
