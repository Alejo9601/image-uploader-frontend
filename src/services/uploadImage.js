const uploadImage = (imgToUpload) => {
  const formData = new FormData();
  formData.append("myFile", imgToUpload);
  console.log(imgToUpload);
  const options = {
    method: "POST",
    body: formData,
  };
  return fetch("http://localhost:3001/upload", options);
};

export default uploadImage;
