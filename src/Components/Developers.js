import React from "react";

const Developers = () => {
  return (
    <div
      className="Products"
      style={{
        position: "absolute",
        top: 100,
      }}
    >
      <div className="flex-1">
        <h1 className="heading-1">GET STARTED</h1>
        <p className="heading-2">
          {" "}
          Resources to integrate and send via our APIs.
        </p>
        <div className="flex-product">
          <div className="flex-1-part1">
            <ul>
              <li>
                <a href="google.com">Start in 5 Minutes</a>
              </li>
              <li>
                <a href="google.com">API References</a>
              </li>
              <li>
                <a href="google.com">Documentation</a>
              </li>
              <li>
                <span className="heading3">See More Tools &rarr;</span>
              </li>
            </ul>
          </div>
          <div className="flex-1-part2">
            <ul>
              <li>
                <a href="google.com">Event Webhook</a>
              </li>
              <li>
                <a href="google.com">Libraries</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-2">
        <h1 className="heading-1">POPULAR TOPICS </h1>
        <p className="heading-2">
          Additional resources for successful integration.
        </p>
        <div className="flex-product">
          <div className="flex-1-part1">
            <ul>
              <li>
                <a href="google.com">Templates</a>
              </li>
              <li>
                <a href="google.com">Inbound Parse Webhook</a>
              </li>
              <li>
                <a href="google.com">Integration & Partners</a>
              </li>
              <li>
                {" "}
                <span className="heading3">See All Topics &rarr;</span>
              </li>
            </ul>
          </div>
          <div className="flex-1-part2">
            <ul>
              <li>
                <a href="google.com">Contact</a>
              </li>
              <li>
                <a href="google.com">Status</a>
              </li>
              <li>
                <a href="google.com">Email Validation API</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-3">
        <h1 className="heading-1">FEATURED LIBRARIES</h1>
        <p className="heading-2">We Support your Language</p>
        <div>
          <div className="flex-product">
            <div className="flex-1-part1">
              <ul>
                <li>
                  <a href="google.com">Curl</a>
                </li>
                <li>
                  <a href="google.com">NODE</a>
                </li>
                <li>
                  <a href="google.com">RUBY</a>
                </li>
                <li>
                  {" "}
                  <span className="heading3">Explore on GitHub &rarr;</span>
                </li>
              </ul>
            </div>
            <div className="flex-1-part2">
              <ul>
                <li>
                  <a href="google.com">PHP </a>
                </li>
                <li>
                  <a href="google.com">GO</a>
                </li>
                <li>
                  <a href="google.com">PYTHON</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
