import ProgressBar from "../components/ProgressBar";
import { UploadingCard } from "../styled/UploadingCard";
import { UploadingStatusText } from "../styled/UploadingStatusText";

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
