Just some of the cli commands I've been using to push data into the database

mongoimport --host ds041238.mongolab.com:41238 -u <username> -p <password> --db heroku_app35739427 --collection trademe_suburbs < trademe_wellington_suburbs.json>

## Metservice weather data

~~~bash
./metservice-historical-scraper.sh
~~~

6 TradeMe districts are available in the DB in the `wellington_historical_weather` collection. They can be looked up by `DistrictId` or `DistrictName`.

## NIWA weather data

### Statistic codes we want to use

`09,01,33,03,04,02,61,64`

~~~
    Code    Description     Units
    01  Wet Days - Number Of Days With 1mm Or More Of Rain  Day
    02  Mean Air Temperature    Celsius
    03  Mean Daily Maximum Air Temperature  Celsius
    04  Mean Daily Minimum Air Temperature  Celsius
    09  Total Sunshine  Hours
    33  Mean Wind Speed     M/Sec
    61  Standard Deviation Of Daily Mean Temperature.   Celsius
    64  Mean Of 9am Relative Humidity   Percent
~~~

### Wellington station codes (active stations)

`3925,4323,25354,3385,3384,3445,38794,3334,3422,3373,3476,3479,17029,4395,3145,8567,12442,2665,3144,3469,3307,3327,2685,2624,3308,21938,7387,2599,2687,2648,4424,4407,4390,3302,2629,2672,4420,18468,4425,2631,3275,4232,12430,2684,2657,2633,4255,13585,2609,4326,3269,2613,4153,37662,2395,3253,18392,2675,2446,3255,12635,2659,4465,39259,17365,4322,3496`
