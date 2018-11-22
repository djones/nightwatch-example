module.exports = {
  'Searching Google' : function (browser) {
    browser
      .url('http://google.com')
      .assert.title('Google')
      .percySnapshot('google', {widths: [768, 1024, 1920]})
      .url('https://percy.io')
      .assert.title('Percy | Continuous visual reviews for web apps')
      .percySnapshot('percy', {widths: [768, 1024, 1920]})
      .end();
  },
};
