import styled from "styled-components";
import ImgLink from "../components/ImgLink";
import TitleHeader from "../components/TitleHeader";
import UploadedImage from "../components/UploadedImage";
import { FlexColumnDiv } from "../styled/FlexDiv";

const DetailCard = styled(FlexColumnDiv)`
  width: 85%;
  height: 65%;

  @media (min-width: 800px) {
    width: 55%;
  }

  @media (min-width: 1366px) {
    width: 30%;
  }
`;

const Detail = () => {
  return (
    <DetailCard>
      <TitleHeader textTitle="Uploaded Image" />
      <UploadedImage />
      <ImgLink />
    </DetailCard>
  );
};

export default Detail;
