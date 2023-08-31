import React from "react";
import styled from "styled-components";

// Styles
const StyledCard = styled.div`
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h5`
  font-size: 1.25rem;
  margin-bottom: 8px;
`;

const CardText = styled.p`
  font-size: 1rem;
  color: #555;
`;

// Component
const Card = ({ image, title, text }) => {
  return (
    <StyledCard>
      {image && <CardImage src={image} alt={title} />}
      <CardBody>
        {title && <CardTitle>{title}</CardTitle>}
        {text && <CardText>{text}</CardText>}
      </CardBody>
    </StyledCard>
  );
};

export default Card;
