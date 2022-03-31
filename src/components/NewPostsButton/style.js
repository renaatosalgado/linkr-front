import styled from "styled-components";
import { FaSyncAlt } from "react-icons/fa";

const LoadButton = styled.button`
  background-color: #1877f2;
  color: #fff;
  font-family: "Lato", sans-serif;

  width: 610px;
  height: 61px;

  margin-top: 40px;
  border-radius: 16px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  line-height: 19px;
  font-size: 16px;
  text-align: center;

  display: ${(props) => (props.updatedPostsQuantity > 0 ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }

  @media (max-width: 635px) {
    width: calc(100vw - 50px);
    margin-left: 25px;

    height: 40px;
  }
`;

const SyncIcon = styled(FaSyncAlt)`
  color: #fff;

  height: 16px;
  width: 22px;

  margin-left: 16px;
`;

export { LoadButton, SyncIcon };
