import React from "react";
import {
  ButtonDefault,
  ButtonPrimary,
  ButtonWarning,
  ButtonDanger,
} from "./common/Buttons";
import { StyledInput } from "./components/StyledInput";
import { Alert } from "./common/Alert";
import { Spinner } from "./common/Spinner";
import Card from "./components/Card";

const Test = () => {
  return (
    <>
      <h1>Components Testing</h1>
      <ButtonDefault type="button" onClick={() => alert()}>
        Test
      </ButtonDefault>
      <ButtonPrimary>Primary</ButtonPrimary>
      <ButtonWarning>Warning</ButtonWarning>
      <ButtonDanger>Danger</ButtonDanger>
      <StyledInput />
      <Alert className="alert-primary">This is a primary alert!</Alert>
      <Alert className="alert-danger">This is a danger alert!</Alert>
      <Spinner />
      <Card
        image="https://via.placeholder.com/300x200"
        title="Sample Card"
        text="This is a simple card with an image, title, and text."
      />
    </>
  );
};

export default Test;
