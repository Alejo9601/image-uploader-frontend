import styled from "styled-components";
import { font } from "../../utils/css_vars";

const P = styled.p`
  margin-top: 10px;
  font-weight: 500;
  font-size: 10px;
  width: 100%;
  text-align: center;
  color: #828282;
  font-family: ${font};
`;

const P_8px = styled(P)`
  font-size: 8px;
`;

const P_12px = styled(P)`
  margin: 0px;
  font-size: 12px;
  color: #bdbdbd;
`;

const DragDescription = styled(P_12px)`
  margin-top: 15px;
`;

const P_ellipsis = styled(P)`
  width: 70%;
  margin-top: 0px;
  padding-left: 10px;
  overflow: hidden;
  font-family: ${font};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export { P, P_8px, P_12px, DragDescription, P_ellipsis };
