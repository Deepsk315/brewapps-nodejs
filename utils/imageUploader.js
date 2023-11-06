export function uploadingimages(req, req_file, callback) {
  let sampleFile = req.files[req_file];
  let filename = sampleFile.name;
  let rendomkeys =
    "QWERTYUIOPLKJHGFDSAZXCVBNMabcdefghijklmnopqrstuvwxyz0123456789";
  let randomname = "";
  for (var i = 0; i < 10; i++) {
    randomname += rendomkeys.charAt(
      Math.floor(Math.random() * rendomkeys.length)
    );
  }
  let finalname = randomname + filename;
  sampleFile.mv(
    config.root + "/uploads/course_images/" + finalname,
    function (err) {
      if (err) {
        console.log(err);
        callback("");
      } else {
        let path = "course_images/" + finalname;
        callback(path);
      }
    }
  );
}
