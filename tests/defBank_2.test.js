const defBank = require('../src/defBank.js');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8081/')
  await page.waitForSelector(`.input`, {timeout: 10000, visible: true});
  await page.type('.input', '4444');
  await page.$('.visa.isActive');
  assert.ok(await page.$('.visa.isActive') != null);
  await browser.close();
})()