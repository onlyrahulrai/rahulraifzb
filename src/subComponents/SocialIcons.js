import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, LinkedIn, Twitter } from "../components";
import { DarkTheme } from "../components/Themes";

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink
          to={{ pathname: "https://github.com/Rahulraifzb" }}
          style={{ color: "inherit" }}
          target="_blank"
        >
          <Github
            width={25}
            height={25}
            fill={props.color === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{ pathname: "https://www.linkedin.com/in/rahulraifzb" }}
          style={{ color: "inherit" }}
          target="_blank"
        >
          <LinkedIn
            width={25}
            height={25}
            fill={props.color === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{ pathname: "https://twitter.com/rahulraifzb" }}
          style={{ color: "inherit" }}
          target="_blank"
        >
          <Twitter
            width={25}
            height={25}
            fill={props.color === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          to={{ pathname: "https://www.facebook.com/rahulraifzb" }}
          style={{ color: "inherit" }}
          target="_blank"
        >
          <Facebook
            width={25}
            height={25}
            fill={props.color === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </div>

      <Line color={props.color} />
    </Icons>
  );
};

export default SocialIcons;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: calc(1rem + 2vw);

  z-index: 3;

  & > *::not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;
