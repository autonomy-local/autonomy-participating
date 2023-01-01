// GitHub Actions上でAngularビルド時にSecretから設定を取得してenvironment.tsを生成する

const fs = require('fs');
const path = require('path');

const dir = 'apps/fe-provider/src/environments';
const file = 'environment.ts';

const content = `${process.env.FIREBASE_SDK}`;

fs.access(dir, fs.constants.F_OK, (err) => {
  if(err){
    console.log('not good !');
  }

  // 設定ファイルを生成する
  try {
    fs.writeFileSync(dir + '/' + file, content);
    console.log('create env file success !!!');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
});

