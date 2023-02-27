const tiktok = require('tiktok-app-api');

let tiktokApp;

(async () => {
  tiktokApp = await tiktok();
})();

export default tiktok;