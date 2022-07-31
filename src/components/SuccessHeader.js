import { CardHeader } from "../styled/CardHeader";
import Title from "./Title";

const SuccesHeader = () => {
  return (
    <CardHeader>
      <img
        style={{ height: "54px", width: "auto", marginBottom: "10px" }}
        src={require(`../assets/check.png`)}
        alt="Success"
      />
      <Title>Uploaded Successfully!</Title>
    </CardHeader>
  );
};

export default SuccesHeader;
