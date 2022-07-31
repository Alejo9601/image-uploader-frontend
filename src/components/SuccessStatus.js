import { CardHeader } from "../styled/CardHeader";
import Title from "./Title";

const SuccessStatus = () => {
  return (
    <CardHeader>
      <img
        style={{ height: "54px", width: "auto", marginBottom: "10px" }}
        src={require(`../assets/check.png`)}
        alt="Success"
      />
      <Title>Succesfully Uploaded !!</Title>
    </CardHeader>
  );
};

export default SuccessStatus;
