Just some of the cli commands I've been using to push data into the database

mongoimport --host ds041238.mongolab.com:41238 -u <username> -p <password> --db heroku_app35739427 --collection trademe_suburbs < trademe_wellington_suburbs.json>

## Metservice weather data

~~~bash
./metservice-historical-scraper.sh
~~~

6 TradeMe districts are available in the DB in the `wellington_historical_weather` collection. They can be looked up by `DistrictId` or `DistrictName`.

## NIWA weather data

### Statistic codes we want to use

`09,01,03,04,02`

~~~
    Code    Description     Units
    01  Wet Days - Number Of Days With 1mm Or More Of Rain  Day
    02  Mean Air Temperature    Celsius
    03  Mean Daily Maximum Air Temperature  Celsius
    04  Mean Daily Minimum Air Temperature  Celsius
    09  Total Sunshine  Hours
~~~

### Wellington station codes (active stations)

Filtered by proximity to Wellington's coordinates: -41.28888,174.7772, 50km

`40750,21938,17029,8567,3145,3277,3385,3477`
