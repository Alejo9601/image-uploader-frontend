import styled from "styled-components";
import ImgLink from "../components/ImgLink";
import SuccessHeader from "../components/SuccessHeader";
import UploadedImage from "../components/UploadedImage";
import { FlexCard } from "../styled/FlexCard";

const DetailCard = styled(FlexCard)`
  width: 85%;

  @media (min-width: 800px) {
    width: 55%;
  }

  @media (min-width: 1366px) {
    width: 25%;
  }
`;

const Detail = () => {
  return (
    <DetailCard>
      <SuccessHeader />
      <UploadedImage />
      <ImgLink />
    </DetailCard>
  );
};

export default Detail;
