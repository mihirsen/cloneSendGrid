import React from "react";
import messageBox from "../Assests/message-icon.png";

const Products = () => {
  return (
    <div
      className="Products"
      style={{
        position: "absolute",
        top: 100,
      }}
    >
      <div className="flex-1">
        <h1 className="heading-1">EMAIL MARKETING</h1>
        <p className="heading-2">
          {" "}
          A suite of tools to create engaging email campaigns.
        </p>
        <div className="flex-product">
          <div className="flex-1-part1">
            <ul>
              <li>
                <a href="google.com">Email Automation</a>
              </li>
              <li>
                <a href="google.com">Signup Forms</a>
              </li>
              <li>
                <a href="google.com">Email Testing</a>
              </li>
              <li>
                <span className="heading3">See All Features &rarr;</span>
              </li>
            </ul>
          </div>
          <div className="flex-1-part2">
            <ul>
              <li>
                <a href="google.com">Email Design</a>
              </li>
              <li>
                <a href="google.com">Email Templates</a>
              </li>
              <li>
                <a href="google.com">Email Statistics</a>
              </li>
              <li>
                <span className="heading3">Take a Tour &rarr;</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-2">
        <h1 className="heading-1">EMAIL API</h1>
        <p className="heading-2">
          Trusted for reliable email delivery at scale.
        </p>
        <div className="flex-product">
          <div className="flex-1-part1">
            <ul>
              <li>
                <a href="google.com">SMPT Service</a>
              </li>
              <li>
                <a href="google.com">Email Validation</a>
              </li>
              <li>
                <a href="google.com">
                  Deliverability Insight <span className="new">NEW</span>
                </a>
              </li>
              <li>
                {" "}
                <span className="heading3">See All Features &rarr;</span>
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
              <li>
                <span className="heading3">Take a Tour &rarr;</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-3">
        <h1 className="heading-1">EXPERT SERVICES</h1>
        <p className="heading-2">Partner with an email expert.</p>
        <div>
          <div className="flex-product">
            <div className="flex-1-part1">
              <ul>
                <li>
                  <a href="google.com">
                    <img src={messageBox} id="message-box" />
                    Set-Up Assistance
                  </a>
                </li>
                <li>
                  <a href="google.com">
                    <img src={messageBox} id="message-box" />
                    Delivery Help
                  </a>
                </li>
                <li>
                  <a href="google.com">
                    <img src={messageBox} id="message-box" />
                    Ongoing Consulting
                  </a>
                </li>
                <li>
                  {" "}
                  <span className="heading3">See All Services &rarr;</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
