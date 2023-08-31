import styled from './StyledLists'

export const StyledList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 1rem;
`;

export const StyledListItem = styled.li`
  margin-bottom: 8px;
  color: #333;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`;
