import React from "react";

const ContactUs = () => {
  return (
    <div
      className="Products"
      style={{
        position: "absolute",
        top: 100,
      }}
    >
      <div className="flex-1">
        <div className="flex-product">
          <div className="flex-1-part1">
            <ul>
              <li>
                <a href="google.com">SUPPORT</a>
                <p id="res-discription1">
                  Already a Twilio SendGrid Customer? Contact support for help!
                </p>
              </li>
              <li></li>
              <li>
                <span className="heading3">Contact Support &rarr;</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-2">
        <div className="flex-product">
          <div className="flex-1-part1">
            <ul>
              <li>
                <a href="google.com">TALK TO SALES</a>
                <p id="res-discription1">
                  Need help? Talk to an expert who can recommend the right
                  solution for your email program.
                </p>
              </li>

              <li>
                <span className="heading3">Contact Sales &rarr;</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-3">
        <div>
          <div className="flex-product">
            <div className="flex-1-part1">
              <ul>
                <li>
                  <a href="google.com">FAQ</a>
                  <p id="res-discription1">
                    Get answers to frequently asked questions about Twilio
                    SendGrid.
                  </p>
                </li>
                <li>
                  {" "}
                  <span className="heading3">View FAQ &rarr;</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
