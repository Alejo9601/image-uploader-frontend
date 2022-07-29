import styled from "styled-components";
import ImgLink from "../components/ImgLink";
import TitleHeader from "../components/TitleHeader";
import UploadedImage from "../components/UploadedImage";
import { FlexCard } from "../styled/FlexCard";

const DetailCard = styled(FlexCard)`
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
