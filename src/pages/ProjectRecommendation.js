import React from "react";
import styled from "styled-components";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage4.jpg";
import { cardShadow, hoverEffect } from "../utils";

function ProjectRecommendation() {
  return (
    <RecommendProject>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <Info>
              <InfoName>Albert Einstein</InfoName>
              <InfoUpdate>Updated 10m ago</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="E=mc^2" />
        </Detail>
        <Title>
          Thermodynamic fluctuations and statistical physics.
        </Title>
        <ProjectInfo>
          Einstein returned to the problem of thermodynamic fluctuations, giving a treatment of the density variations in a fluid at its critical point.
        </ProjectInfo>
        <PriceContainer>
          <Price>$8700/month</Price>
          <Badge content="Full Time" clean />
        </PriceContainer>
      </CardContent>
    </RecommendProject>
  );
}

const RecommendProject = styled.div`
margin:50px;
  border-radius: 1rem;
  height: auto;
  padding: 1rem;
  background-color: white;
  width: 50vw;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
`;

const CardContent = styled.div`
  margin: 0.4rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  margin-right: 4rem;
  img {
    height: 5rem;
    border-radius: 5rem;
  }
`;
const Info = styled.div``;
const InfoName = styled.h3`
  font-weight: 500;
`;
const InfoUpdate = styled.h5`
  font-weight: 300;
`;
const Title = styled.h4`
  font-weight: 500;
`;
const ProjectInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #3b3b3b;
  margin-bottom: 0.5em;
`;
const PriceContainer = styled.div`
margin:5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
`;
const Price = styled.div``;

export default ProjectRecommendation;
