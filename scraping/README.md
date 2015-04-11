Just some of the cli commands I've been using to push data into the database

mongoimport --host ds041238.mongolab.com:41238 -u <username> -p <password> --db heroku_app35739427 --collection trademe_suburbs < trademe_wellington_suburbs.json>

## Metservice weather data

~~~bash
./metservice-historical-scraper.sh
~~~

6 TradeMe districts are available in the DB in the `wellington_historical_weather` collection. They can be looked up by `DistrictId` or `DistrictName`.
