'use strict';

const puppeteer = require('puppeteer');

async function main() {
  try{
    for (let i = 6; i <= 12; i++) {
      await grabPage(i);
    }
  }
  catch (error) {
    console.log(error);
  }
}

main();

async function grabPage(monthNum = 6) {
  try {
    const url = `https://calendar.colorado.edu/calendar/month/2019/${monthNum}`;
    const browser = await puppeteer.launch({
      headless: true
    });
    const page = await browser.newPage();

    const status = await page.goto(url, {
      waitUntil: ['domcontentloaded', 'load', 'networkidle0']
    });

    if (!status.ok) {
      console.error(`Cannot open ${url}`);
      throw new Error();
    }

    const data = await page.evaluate(() => {
      const urls = Array.from(document.querySelectorAll('h3.summary > a')).map(node => node.href);
      return urls;
    });

    for (let url of data) {
      const eventRes = await grabEvent(url);
      console.log(url, eventRes);
    }

    await page.close();
    await browser.close();
  }
  catch (error) {
    console.log(error);
  }
}

async function grabEvent(url) {
  try {
    const browser = await puppeteer.launch({
      headless: true
    });
    const page = await browser.newPage();

    const status = await page.goto(url, {
      waitUntil: ['domcontentloaded', 'load', 'networkidle0']
    });

    if (!status.ok) {
      console.error(`Cannot open ${url}`);
      throw new Error();
    }

    const data = await page.evaluate(() => {
      const titleSelector = document.querySelector('h1.summary');
      const dateSelector = document.querySelector('abbr.dtstart');

      return {
        title: titleSelector.textContent.trim(),
        eventTimestampStart: dateSelector ? new Date(Date.parse(dateSelector.title)).toString() : null,
        image: '',
        location: {
          lat: '234234',
          lon: '-23434'
        },
        venueName: '',
        description: '',
        tags: [],
        urls: [
          {
            url: 'http://harvix.com'
          },
          {
            url: 'http://harvix.com'
          }
        ]
      };
    });

    return data;

    await page.close();
    await browser.close();
  }
  catch (error) {
    console.log(error);
  }
}
