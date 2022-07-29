import { useContext } from "react";
import FileStatusContext from "../context/FileStatusContext";
import DragSelectFile from "../components/DragSelectImg";
import Uploading from "./Uploading";
import Detail from "./Detail";

const SelectionProcess = () => {
  const { uploading, selectedFile } = useContext(FileStatusContext);

  return (
    <>
      {selectedFile !== null ? (
        <Detail />
      ) : (
        <>
          <DragSelectFile show={uploading ? false : true} />
          <Uploading show={uploading ? true : false} />
        </>
      )}
    </>
  );
};

export default SelectionProcess;
