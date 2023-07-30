const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");


const app = express();
app.use(bodyParser.json()); //middleware

app.post('/pickup-dates', (req, res) => {
  const { pickup_day, recurrence } = req.body; //accepts inputs from users

  const currentDate = moment();
  const pickupDates = Array.from({ length: recurrence }, (_, i) => {
    return {
      date: currentDate.clone().startOf('isoWeek').add(i * 7 + ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
       'Friday', 'Saturday'].indexOf(pickup_day), 'days').format(),
      readable_date: currentDate.clone().startOf('isoWeek').add(i * 7 + ['Monday', 'Tuesday', 'Wednesday',
       'Thursday', 'Friday', 'Saturday'].indexOf(pickup_day), 'days').format('D MMMM YYYY')
    };
  });

  res.json({ pickup_dates: pickupDates });
});


app.listen(process.env.PORT, () => console.log("Server started on port 3000"));
