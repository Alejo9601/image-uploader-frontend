import { CardHeader } from "../styled/DIVS";
import { StyledH1 } from "../styled/H1";

const SuccesHeader = () => {
  return (
    <CardHeader>
      <img
        style={{ height: "54px", width: "auto", marginBottom: "10px" }}
        src={require(`../assets/check.png`)}
        alt="Success"
      />
      <StyledH1>Uploaded Successfully!</StyledH1>
    </CardHeader>
  );
};

export default SuccesHeader;
