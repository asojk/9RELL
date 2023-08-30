import React from "react";

import ContentCol from "../Layout/content2col";

const Press = () => {
  return (
    <>
      <div className="page-container">
        <div className="head">
          <span className="heading">Community Involvement</span>
        </div>
        <p className="replace-text">
          At Grell Roofing, our commitment to community involvement aligns with
          our corporate values. We are in the business of making life easier
          through our products and services and through our commitment to giving
          back to the communities in which we live, work, and do business.
        </p>
        <span className="replace-head">Committed to making lives brighter</span>
        <p className="replace-text">
          We work with local communities that we operate in to support on an
          annual basis from the following categories:
          <br />
          <br />
          <ul>
            <li>
              Health: includes local hospitals ands clinics, medical research,
              and patient and family support charities
            </li>
            <li>
              Non-Government Organizations (NGO): includes disaster relief,
              peace, and human rights
            </li>
            <li>
              Human Services: includes food banks, homeless services, social
              services, and youth development
            </li>
            <li>
              Education: includes support for students, teachers, and parents,
              as well as scholarships and financial aid services
            </li>
            <li>
              Environmental: includes parks/nature centers and environmental
              conservation
            </li>
            <li>
              We focus on initiatives that empower people through programs that
              encourage improving lives, and we partner with organizations that
              align with our corporate values of giving. By ensuring that our
              employees have a voice in the way we give back to our community,
              we believe that makes for more meaningful fundraising and
              volunteering. Ultimately, everybody wins: the Grell Roofing works
              with organizations and causes that they’re passionate about—and
              our community grows stronger with every hour volunteered, and
              every dollar donated.
            </li>
          </ul>
          <br />
        </p>
        <ContentCol />
      </div>
    </>
  );
};

export default Press;
