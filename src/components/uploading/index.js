import ProgressBar from "./ProgressBar";
import { UploadingCard } from "../../styled/div";
import { UploadingStatusText } from "../../styled/h1";

const Uploading = ({ show }) => {
  return (
    <>
      {show ? (
        <UploadingCard>
          <UploadingStatusText>Uploading...</UploadingStatusText>
          <ProgressBar />
        </UploadingCard>
      ) : null}
    </>
  );
};

export default Uploading;
