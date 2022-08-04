const uploadImage = (imgToUpload) => {
  const formData = new FormData();
  formData.append("myFile", imgToUpload);
  const options = {
    method: "POST",
    body: formData,
  };
  return fetch("https://img-upload-back.herokuapp.com/upload", options).then(
    (res) => res.json()
  );
};

export default uploadImage;
