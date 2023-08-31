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
  border-radius: 5px; // Rounded borders
  border-bottom: 1px solid #ddd; // Bottom border
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Small shadow
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    /* text-decoration: underline; */
  }
`;
