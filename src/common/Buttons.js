import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

export const ButtonDefault = styled(Button)`
  background-color: #fff;
  border-color: #ccc;

  &:hover {
    color: #fff;
    background-color: #666;
    border-color: #444;
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(204, 204, 204, 0.5);
  }
`;

export const ButtonPrimary = styled(Button)`
  background-color: #0079ff;
  border-color: #0075db;
  color: #fff;

  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }

  &:focus,
  &:active {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
`;

export const ButtonWarning = styled(Button)`
  background-color: #ffc107;
  border-color: #ffc107;
  color: #212529;

  &:hover {
    background-color: #ffb507;
    border-color: #ffae07;
  }

  &:focus,
  &:active {
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
  }
`;

export const ButtonDanger = styled(Button)`
  background-color: #dc3545;
  border-color: #dc3444;
  color: #fff;

  &:hover {
    background-color: #d32a3a;
    border-color: #d02130;
  }

  &:focus,
  &:active {
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
  }
`;
