console.log("copy files executed");

// const fs = require("fs");
// const path = require("path");

import fs from "fs";
import path from "path";

function copyFolderRecursiveSync(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  const files = fs.readdirSync(source);

  files.forEach((file) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyFolderRecursiveSync(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

const sourceDirectory = "template";
const destinationDirectory = "../custom-dist";

copyFolderRecursiveSync(sourceDirectory, destinationDirectory);
