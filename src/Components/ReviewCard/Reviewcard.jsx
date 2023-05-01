import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Reviewcard.css";

function ReviewCard(props) {
  return (
    <div className="card text-bg-dark mb-3 " style={{ background: "#242628" }}>
      <div className="ratio ratio-16x9">
        <img
          src={props.imgUrl}
          className="img-thumbnail rounded-bottom-0 border-0 p-0 "
          alt="..."
        />
      </div>

      <div className="card-body text-emphasis-dark w-100">
        <h5 className="card-title ms-1 overflow-hidden">{props.name}</h5>
        <p
          className="m-2 text-bg-dark"
          style={{
            whiteSpace: "break-spaces",
            overflowY: "auto",
            height: "100px",
          }}
        >
          {" "}
          {props.description}
        </p>
        {/* <ul>
          {props.description
            .toString()
            .split(", ")
            .map((str) => {
              return <li key={str}> {str}</li>;
            })}
        </ul> */}
        <a
          href="#"
          className="btn btn-outline-info btn-sm bs-popover-auto shadow"
        >
          Rate
        </a>
      </div>
    </div>
  );
}

export default ReviewCard;
