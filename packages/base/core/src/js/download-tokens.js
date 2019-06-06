'strict mode';

const https = require('https');
const fs = require('fs');

const download = (url, dest, cb) => {
  const file = fs.createWriteStream(dest);
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      // close() is async, call cb after close completes.
      file.close(cb);
    });
  }).on('error', (err) => { // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
  });
};

// Download the SCSS tokens from ZeroHeight
download(
  'https://ovh.zeroheight.com/api/design_tokens?auth=hUD5Kp-oZUOD3WCelspGLg&format=sass&id=7826&dl=1',
  'src/scss/_tokens.scss',
);

// Download the CSS tokens from ZeroHeight
download(
  'https://ovh.zeroheight.com/api/design_tokens?auth=hUD5Kp-oZUOD3WCelspGLg&format=css&id=7826&dl=1',
  'src/css/_tokens.css',
);
