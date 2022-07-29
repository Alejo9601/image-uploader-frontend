import styled from "styled-components";
import ProgressBar from "../components/ProgressBar";
import { FlexCard } from "../styled/FlexCard";
import { font } from "../utils/css_vars";

const StyledDiv = styled(FlexCard)`
  padding: 30px 20px;
`;
const Status = styled.p`
  font-family: ${font};
  margin-bottom: 30px;
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Uploading = () => {
  return (
    <StyledDiv>
      <Status>Uploading...</Status>
      <ProgressBar />
    </StyledDiv>
  );
};

export default Uploading;
