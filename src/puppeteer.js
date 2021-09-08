const puppeteer = require('puppeteer');
var CronJob = require('cron').CronJob;

var job = new CronJob('30 35 * * * *', function() {
    console.log('You will see this message every second1');
    (async () => {
        const browser = await puppeteer.launch({
            headless: false
        });
        const page = await browser.newPage();
        await page.goto('https://clockify.me/login');
    
    
        //form work
        await page.type('input[id=email]', 'nazim.mandviwala98@gmail.com');
        await page.type('input[id=password]', 'mandviwala111');
        await page.click('button[type=submit]')
        await page.waitForNavigation();
    
        //for click on button with class name 
        await page.$$eval('.cl-ml-2', elements => elements[1].click());
    
        // for anchor click
        // await page.waitForSelector('.cl-b-0')
        await page.click('.cl-b-0');
    
    
        // await page.$$eval('.cl-b-0', elements => elements[1].click());
    
    
        await page.screenshot({ path: 'example.png' });
    
        await browser.close();
    })();
  }, null, true);
  job.start();
