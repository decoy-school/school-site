const path = require("path");
const fs = require("fs");

// builds an array of pdfs in the static/uploads folder
// this is used to build the search index
module.exports = function () {
  const dirPath = path.join(__dirname, "../static/uploads");
  const files = fs.readdirSync(dirPath).filter((file) => /\.pdf$/.test(file));
  const titles = files.map((fileName) =>
    fileName.replace(/-/g, " ").toLowerCase()
  );
  return files.map((file, i) => ({
    title: titles[i],
    url: "/uploads/" + file,
  }));
};
