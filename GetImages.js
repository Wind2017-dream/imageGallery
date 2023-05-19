const targetFolder = './';
const fs = require('fs');
const path = require('path');
let content = 'const pictures = [\n';

fs.readdir(targetFolder , (err, files) => {
  console.log('files', files);
  files.forEach(file => {
    content +=
      'import '+file+ ' from "../../public/' + file + '"\n';
  });
  content += ' ];\nexport default pictures;';

  fs.writeFile('./picture.js', content, err => {
    if (err) {
      console.error(err);
      return;
    }
  });
});
