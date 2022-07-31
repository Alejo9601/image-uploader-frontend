import { CardHeader } from "../styled/CardHeader";
import Description from "./Description";
import Title from "./Title";

const UploadImgHeader = ({ textTitle, textDescription }) => {
  return (
    <CardHeader>
      <Title>{textTitle}</Title>
      <Description>{textDescription}</Description>
    </CardHeader>
  );
};

export default UploadImgHeader;
