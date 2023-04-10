import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Reviewcard.css";

function ReviewCard() {
  return (
    // <Card className={classes.card}>
    //   <img src={'/mbookair.png'} className={classes.cover} alt="Cover" />
    //   <CardContent>
    //     <Typography className={classes.title}>
    //       Macbook Air M2
    //     </Typography>
    //     <Typography className={classes.description}>
    //       <ul>
    //         <li>ARM-based M2 chip</li>
    //         <li>8gb Ram</li>
    //         <li>256gb Storage</li>
    //         <li>13.6"</li>
    //       </ul>
    //     </Typography>
    //     <LinearProgress variant="determinate" value={50} className={classes.progress} />
    //   </CardContent>
    // </Card>
    <div className="card text-white mb-3" style={{ background: "#242628" }}>
      <div>
        <img
          src="/mbookair.png"
          className="img-thumbnail rounded-bottom-0 border-0 p-0"
          alt="..."
        />
      </div>

      <div className="card-body text-emphasis-dark">
        <h5 className="card-title text-md-center">Macbook Air M2</h5>
        <ul className="card-text">
          <li>ARM-based M2 chip</li>
          <li>8gb Ram</li>
          <li>256gb Storage</li>
          <li>13.6"</li>
        </ul>
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
