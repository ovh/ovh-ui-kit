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

// Download the tokens from the design system documentation
download(
  'https://ovh.zeroheight.com/api/design_tokens?auth=hUD5Kp-oZUOD3WCelspGLg&format=sass&id=7826&dl=1',
  'src/scss/_tokens.scss',
);
