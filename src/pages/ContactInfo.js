import React from "react";
import styled from "styled-components";
import { FaSlack } from "react-icons/fa";
import { darkThemeColor, hoverEffect, themeColor } from "../utils";
function ContactInfo() {
  return (
    <JoinChannel>
      <CardContent flex={true}>
        <Slack>
          
          <SlackText>
            <SlackHead>Have a question or feedback?</SlackHead>
            <SlackFoot>Our Contact Information:
          Corporate Headquarters:
          100 Wilshire Blvd. Suite 700
          Santa Monica, CA 90401 USA</SlackFoot>
          </SlackText>
        </Slack>
       
      </CardContent>
    </JoinChannel>
  );
}

const JoinChannel = styled.div`
  background-color: ${darkThemeColor};
  margin:30px;
  height: auto;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const CardContent = styled.div`
  margin: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Slack = styled.div`
  display: flex;
`;

const SlackLogo = styled.div`
  margin-right: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: white;
    height: 3rem;
    width: 3rem;
  }
`;

const SlackText = styled.div`
  color: white;
`;

const SlackHead = styled.h2`
  font-weight: 500;
`;
const SlackFoot = styled.h5`
  color: #e4e4e4;
  font-weight: normal;
`;
const SlackJoin = styled.button`
  background-color: ${themeColor};
  border: none;
  outline: none;
  padding: 1rem 2rem;
  color: white;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
`;

export default ContactInfo;
