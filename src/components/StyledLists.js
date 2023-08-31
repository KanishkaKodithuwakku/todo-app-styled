import styled from "styled-components";

export const StyledList = styled.ul`
  list-style: none;
  padding-left: 20px;
  font-size: 1rem;
  margin: 0;
  padding: 0;
`;

export const StyledListItem = styled.li`
  margin-bottom: 8px;
  color: #333;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 8px;
  padding-top: 5px;
  text-decoration: none;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    /* text-decoration: underline; */
  }
`;
