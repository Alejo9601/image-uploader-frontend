import { P_12px as P } from "../styled/p";
import InputButton from "./InputButton";

const UploadImgFooter = ({ handleSelectedFile }) => {
  return (
    <div>
      <P>Or</P>
      <InputButton handleSelectedFile={handleSelectedFile} />
    </div>
  );
};

export default UploadImgFooter;
