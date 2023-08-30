import React from "react";
import "./Footer.css";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="social-icon-wrapper">
          <ul>
            <ul>
              <li>
                <a href="tel:+">
                  <BiLogoFacebook />
                </a>
              </li>
              <li>
                <a href="tel:+">
                  <BiLogoInstagram />
                </a>
              </li>
              <li>
                <a href="tel:+">
                  <BiLogoLinkedin />
                </a>
              </li>
            </ul>
          </ul>
        </div>
        <div className="footer-details">
          <ul>
            <ul>
              <NavLink to="/policy">
                <li>Privacy & Policy</li>
              </NavLink>
            </ul>
          </ul>
        </div>
        <div className="copyright">
          <p>© Copyright 2023, all right reserved Demo</p>
        </div>
      </footer>
    </>
  );
};
