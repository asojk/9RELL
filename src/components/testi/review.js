/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";

const Review = (props) => (

  <section className={`review-card ${props.rootClassName} `}>
    <div className="review-stars">
        {props.Socials}
    <svg viewBox="0 0 1024 1024" className="review-icon" style={{ marginLeft: "20px" }}>
      <path
        d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
        className="" />
    </svg>
    <svg viewBox="0 0 1024 1024" className="review-icon02">
      <path
        d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
        className="" />
    </svg>
    <svg viewBox="0 0 1024 1024" className="review-icon04">
      <path
        d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
        className="" />
    </svg>
    <svg viewBox="0 0 1024 1024" className="review-icon06">
      <path
        d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
        className="" />
    </svg>
    <svg viewBox="0 0 1024 1024" className="review-icon08">
      <path
        d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
        className="" />
    </svg>
  </div><main className="review-content">
      <p className="review-quote">{props.Quote}</p>
      <div className="review-author">
        <img
          alt={props.AvatarAlt}
          src={props.AvatarSrc}
          className="review-avatar" />
        <div className="review-details">
          <h1 className="review-author1">{props.Author}</h1>
          <label className="review-position">{props.Position}</label>
        </div>
      </div>
    </main></section>
);

Review.defaultProps = {
  Quote:
  "I have used Grell roofing on several occasions. Each time they have been extremely prompt with their bids, on doing the work on schedule, and with no call backs. . Their team is on point, always getting the job done right and on time. What I really appreciate is how they keep things clear and straightforward. No fluff, just honest work. They get what we need and they deliver, no fuss. The quality of their work speaks for itself. The roofs they've put up are solid and look great. They've definitely become our go-to  for all things roofing. So, if you're looking for a reliable, top-quality roofing service, I'd say check out Grell Commercial Roofing. They've got it down to a T. Thank you for everything you have done for my self, my customers, and Tjaden Construction.",
  Author: "Randy T",
  AvatarSrc:
    "https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/299866051_393410329601281_3393878664980003102_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=103&ccb=1-7&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_ohc=nWD0GEcsshUAX9zprju&_nc_ht=scontent-ord5-2.xx&oh=00_AfA4fsTC5Rk9cI_3_sHUZrhei4Bx4s_wbvh71vJ8sHLEGA&oe=64B64CB7",
  Position: "Owner - Tjaden Construction",
  AvatarAlt: "Customer Avatar",
  Socials: "",
};

Review.propTypes = {
  Quote: PropTypes.string,
  Author: PropTypes.string,
  rootClassName: PropTypes.string,
  AvatarSrc: PropTypes.string,
  Position: PropTypes.string,
  AvatarAlt: PropTypes.string,
  Socials: PropTypes.node,
};

export default Review;
