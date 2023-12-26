const Jimp = require('jimp');
const fs = require('fs')
const path = require('path');

const root_path = 'D:\\photo'


function listFiles() {
  try {
      const files = fs.readdirSync(root_path);
    //   files.forEach(file => {
    //       console.log(path.join(root_path, file));
    //   });
    return files
  } catch (err) {
      console.error('无法读取目录: ', err);
  }
}

async function small(file){
  await Jimp.read(path.join(root_path, file)).then(image => {return image.quality(60).writeAsync(path.join('./public/photo/', file))})
}

const files = listFiles()
files.forEach(small)