import React from "react";
import uber from "../Assests/Uber.svg";
import spotify from "../Assests/spotify.svg";
import glassdor from "../Assests/glassdoor.svg";
import instacart from "../Assests/inst.svg";
import yelp from "../Assests/yelp.svg";
import airbnb from "../Assests/airbnb.svg";

const WhySendGrid = () => {
  return (
    <div
      className="Products"
      style={{
        position: "absolute",
        top: 100,
      }}
    >
      <div className="flex-1">
        <h1 className="heading-1">OVERVIEW</h1>
        <p className="heading-2">
          {" "}
          Get more messages delivered. See better results.
        </p>
        <div className="flex-product">
          <div className="flex-1-part1">
            <ul>
              <li>
                <a href="google.com">Calculate Your Email ROI</a>
              </li>
              <li>
                <a href="google.com">Our Delivery Rates</a>
              </li>
              <li>
                <a href="google.com">Email + SMS, WhatsApp, and Video</a>
              </li>
              <li>
                <span className="heading3">Why Twilio SendGrid &rarr;</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-2">
        <h1 className="heading-1">LET'S WORK TOGETHER</h1>
        <p className="heading-2">See how we can serve your email program.</p>
        <div className="flex-product">
          <div className="flex-1-part1">
            <ul>
              <li>
                <a href="google.com">Developers</a>
              </li>
              <li>
                <a href="google.com">Startups</a>
              </li>
              <li>
                <a href="google.com">High-Volume Senders</a>
              </li>
              <li>
                {" "}
                <span className="heading3">Who We Work With &rarr;</span>
              </li>
            </ul>
          </div>
          <div className="flex-1-part2">
            <ul>
              <li>
                <a href="google.com">Dynamic Templates</a>
              </li>
              <li>
                <a href="google.com">Email Infrastructure</a>
              </li>
              <li>
                <a href="google.com">5-minute Integration</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-3">
        <h1 className="heading-1">FEATURED CUSTOMERS</h1>
        <p className="heading-2">Leading brands trust SendGrid.</p>
        <div>
          <div className="flex-product">
            <div className="flex-1-part1">
              <ul>
                <li>
                  <a href="google.com">
                    <img src={uber} id="company-image" />
                  </a>
                </li>
                <li>
                  <a href="google.com">
                    <img src={glassdor} id="company-image" />
                  </a>
                </li>
                <li>
                  <a href="google.com">
                    <img src={instacart} id="company-image" />
                  </a>
                </li>
                <li>
                  {" "}
                  <span className="heading3">See More Customers &rarr;</span>
                </li>
              </ul>
            </div>
            <div className="flex-1-part2">
              <ul>
                <li>
                  <a href="google.com">
                    <img src={spotify} id="company-image" />
                  </a>
                </li>
                <li>
                  <a href="google.com">
                    <img src={airbnb} id="company-image" />
                  </a>
                </li>
                <li>
                  <a href="google.com">
                    <img src={yelp} id="company-image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySendGrid;
