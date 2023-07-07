import React from "react";
import img1 from "../Assests/res-img1.png";
import img2 from "../Assests/res-img2.png";

const Resources = () => {
  return (
    <div
      className="Products"
      style={{
        position: "absolute",
        top: 100,
      }}
    >
      <div className="flex-1">
        <h1 className="heading-1">EDUCATION & TOOLS</h1>
        <p className="heading-2">
          {" "}
          Tips and tools to optimize your email program.
        </p>
        <div className="flex-product">
          <div className="flex-1-part1">
            <ul>
              <li>
                <a href="google.com">Guide</a>
              </li>
              <li>
                <a href="google.com">Blog</a>
              </li>
              <li>
                <a href="google.com">
                  Free Templates<span className="new">NEW</span>
                </a>
              </li>
              <li>
                <span className="heading3">See All &rarr;</span>
              </li>
            </ul>
          </div>
          <div className="flex-1-part2">
            <ul>
              <li>
                <a href="google.com">Webinars</a>
              </li>
              <li>
                <a href="google.com">Customer Stories</a>
              </li>
              <li>
                <a href="google.com">Email Marketing Guide</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-2">
        <h1 className="heading-1">CUSTOMER HELP</h1>
        <p className="heading-2">
          Resources to send your best with Twilio SendGrid.
        </p>
        <div className="flex-product">
          <div className="flex-1-part1">
            <ul>
              <li>
                <a href="google.com">Support</a>
                <p id="res-discription">
                  Search for solutions or get support from our team.
                </p>
              </li>
              <li>
                <a href="google.com">Status</a>
                <p id="res-discription">
                  Check incident reports and availability updates.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex-1-part2">
            <ul>
              <li>
                <a href="google.com">Knowledge Center</a>
                <p id="res-discription">
                  Learn how to use features and see code examples.
                </p>
              </li>
              <li>
                <a href="google.com">API Reference</a>
                <p id="res-discription">
                  Interactive documentation for fast integration.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-3">
        <h1 className="heading-1">FEATURED RESOURCES</h1>
        <p className="heading-2">Our most popular content.</p>
        <div>
          <div className="flex-product">
            <div className="flex-1-part1">
              <ul>
                <li>
                  <a href="google.com">
                    <img src={img1} id="img1" />
                  </a>
                </li>
                <li>
                  <a href="google.com">
                    <img src={img2} id="img2" />
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

export default Resources;
