
// cron.schedule("*/10 * * * * *", function() {
//     console.log(new Date().getMinutes());

// })
var CronJob = require('cron').CronJob;

var job = new CronJob('0 31 * * * *', function() {
  console.log('You will see this message every second1');
}, null, true, 'America/Los_Angeles');
job.start();