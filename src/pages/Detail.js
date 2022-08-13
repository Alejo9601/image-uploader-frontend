import ImgLink from "../components/ImgLink";
import SuccessHeader from "../components/SuccessHeader";
import UploadedImage from "../components/UploadedImage";
import { FlexCard } from "../styled/DIVS";

const Detail = () => {
  return (
    <FlexCard>
      <SuccessHeader />
      <UploadedImage />
      <ImgLink />
    </FlexCard>
  );
};

export default Detail;
