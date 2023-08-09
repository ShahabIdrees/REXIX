import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";


function ProductCard(props) {
  return (
    <div className="card text-bg-dark  h-100" style={{ background: "#242628" }}>
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
        <div className="d-flex justify-content-between ps-1 ">
          <a
            href="#"
            className="btn btn-outline-info btn-sm bs-popover-auto align-self-center shadow"
          >
            Rate
          </a>
          <div
            className="progress align-self-center shadow"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="10"
            style={{ width: "100px" }}
          >
            <div
              className="progress-bar p-1"
              style={{
                width: props.rating * 10,
                background: "#0DCBF0",
                color: "#2F2F2F",
                fontSize: "14px",
                fontWeight: "bolder",
              }}
            >
              {props.rating}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;