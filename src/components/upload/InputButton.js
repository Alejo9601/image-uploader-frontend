import { useRef } from "react";
import { Button } from "../../styled/div";
import { StyledInput } from "../../styled/input";

const InputButton = ({ handleSelectedFile }) => {
  const inputRef = useRef();

  const handleOnChange = () => {
    const selectedImg = inputRef.current.files[0];
    handleSelectedFile(selectedImg);
  };

  return (
    <Button>
      <StyledInput ref={inputRef} type="file" onChange={handleOnChange} />
    </Button>
  );
};

export default InputButton;
