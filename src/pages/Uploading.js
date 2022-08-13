import ProgressBar from "../components/ProgressBar";
import { UploadingCard } from "../styled/DIVS";
import { UploadingStatusText } from "../styled/H1";

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
