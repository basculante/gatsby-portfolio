import React from "react";
import { Link } from "gatsby";
import profileImage from "../images/profile-pic-green.png";

import "../scss/main.scss";

const NotFoundPage = () => {
  return (
    <main className="container__404">
      <div>
        <div
          className="warning-logo"
          style={{ backgroundImage: `url(${profileImage})` }}
        >
          {/* <StaticImage
            src="../images/profile-pic-green.png"
            alt="profile picture"
            className="warning-logo-picture"
            height={320}
            width={200}
            layout="fixed"
          /> */}
        </div>
        <h1>Are you looking for something else?</h1>
        <h1>
          Let's go <Link to="/">home.</Link>
        </h1>
      </div>
    </main>
  );
};

export default NotFoundPage;
