# Scraping of weather data from Metservice

## TradeMe Districts

# DistrictName, slugified version, DistrictID
#
# Carterton carterton
# Kapiti Coast kapiti-coast 43
# Lower Hutt lower-hutt 46
# Masterton masterton 48
# Porirua porirua 44
# South Wairarapa south-wairarapa
# Upper Hutt upper-hutt 45
# Wellington wellington 47

# Available data (no 404 on those district names)
# kapiti-coast data is called Kapiti in Metservice's dataset. Close enough.
wget http://www.metservice.com/publicData/climateDataMonthlyTown_kapiti -O weather/historical-weather_43_kapiti-coast.json
wget http://www.metservice.com/publicData/climateDataMonthlyTown_lower-hutt -O weather/historical-weather_46_lower-hutt.json
wget http://www.metservice.com/publicData/climateDataMonthlyTown_masterton -O weather/historical-weather_48_masterton.json
wget http://www.metservice.com/publicData/climateDataMonthlyTown_porirua -O weather/historical-weather_44_porirua.json
wget http://www.metservice.com/publicData/climateDataMonthlyTown_upper-hutt -O weather/historical-weather_45_upper-hutt.json
wget http://www.metservice.com/publicData/climateDataMonthlyTown_wellington -O weather/historical-weather_47_wellington.json

## TradeMe Suburbs

# Data from Metservice isn't that precise, we'll have to use the districts.

# SuburbId, Name, slugified version
# 999     Otaihanga , otaihanga
# 1656    Carterton , carterton
# 2640    Otaki , otaki
# 1211    Otaki Beach , otaki-beach
# 1651    Raumati South , raumati-south
# 1652    Raumati Beach , raumati-beach
# 1802    Te Horo , te-horo
# 998     Waikanae Beach , waikanae-beach
# 1445    Waikanae , waikanae
# 2124    Alicetown , alicetown
# 3099    Peka Peka , peka-peka
# 1618    Avalon , avalon
# 1446    Paraparaumu Beach , paraparaumu-beach
# 1428    Days Bay , days-bay
# 2122    Belmont , belmont
# 2123    Boulcott , boulcott
# 1762    Paraparaumu , paraparaumu
# 2120    Harbour View , harbour-view
# 2118    Epuni , epuni
# 1872    Gracefield , gracefield
# 1767    Fairfield , fairfield
# 1650    Paekakariki , paekakariki
# 1389    Haywards , haywards
# 2116    Eastbourne , eastbourne
# 1416    Holborn , holborn
# 1620    Kelson , kelson
# 1435    Korokoro , korokoro
# 1745    Mahina Bay , mahina-bay
# 3331    Lowry Bay , lowry-bay
# 1388    Manor Park , manor-park
# 1654    Lower Hutt , lower-hutt
# 1460    Maungaraki , maungaraki
# 2079    Muritai , muritai
# 3350    Melling , melling
# 1871    Moera , moera
# 1619    Naenae , naenae
# 2119    Normandale , normandale
# 2117    Rona Bay , rona-bay
# 1841    Stokes Valley , stokes-valley
# 3351    Park Avenue , park-avenue
# 3364    Sunshine Bay , sunshine-bay
# 1415    Taita , taita
# 2121    Tirohanga , tirohanga
# 1765    Wainuiomata , wainuiomata
# 1766    Waiwhetu , waiwhetu
# 1448    Petone , petone
# 924     Waterloo , waterloo
# 1873    Seaview , seaview
# 3349    Castlepoint , castlepoint
# 1763    York Bay , york-bay
# 1449    Woburn , woburn
# 3434    Flat Point , flat-point
# 2579    Masterton , masterton
# 3106    Riversdale Beach , riversdale-beach
# 3198    Aotea , aotea
# 1520    Ascot Park , ascot-park
# 2172    Cannons Creek , cannons-creek
# 985     Camborne , camborne
# 1929    Elsdon , elsdon
# 973     Linden , linden
# 1491    Karehana Bay , karehana-bay
# 2783    Mana , mana
# 1948    Papakowhai , papakowhai
# 2785    Paremata , paremata
# 1573    Plimmerton , plimmerton
# 1110    Pauatahanui , pauatahanui
# 1433    Porirua , porirua
# 1853    Pukerua Bay , pukerua-bay
# 1842    Porirua East , porirua-east
# 1447    Ranui Heights , ranui-heights
# 1334    Takapuwahia , takapuwahia
# 1515    Titahi Bay , titahi-bay
# 1434    Waitangirua , waitangirua
# 1132    Whitby , whitby
# 3375    Gladstone , gladstone
# 1803    Featherston , featherston
# 1655    Greytown , greytown
# 3347    Cape Palliser , cape-palliser
# 3348    Ngawi , ngawi
# 875     Martinborough , martinborough
# 1758    Akatarawa , akatarawa
# 1799    Blue Mountains , blue-mountains
# 1400    Brown Owl , brown-owl
# 3067    Clouston Park , clouston-park
# 3352    Ebdentown , ebdentown
# 3071    Elderslea , elderslea
# 925     Heretaunga , heretaunga
# 3094    Mangaroa , mangaroa
# 1768    Maoribank , maoribank
# 920     Pinehaven , pinehaven
# 1333    Riverstone Terraces , riverstone-terraces
# 3166    Kaitoke , kaitoke
# 921     Silverstream , silverstream
# 1703    Te Marua , te-marua
# 1770    The Plateau , the-plateau
# 1769    Timberlea , timberlea
# 1212    Birchville , birchville
# 2078    Totara Park , totara-park
# 922     Trentham , trentham
# 1399    Maymorn , maymorn
# 1547    Upper Hutt , upper-hutt
# 1840    Whitemans Valley , whitemans-valley
# 1565    Kingsley Heights , kingsley-heights
# 3503    Moonshine Valley , moonshine-valley
# 3353    Pakuratahi , pakuratahi
# 951     Broadmeadows , broadmeadows
# 3047    Aro Valley , aro-valley
# 3411    Mount Marua , mount-marua
# 1342    Berhampore , berhampore
# 1199    Churton Park , churton-park
# 923     Wallaceville , wallaceville
# 3048    Breaker Bay , breaker-bay
# 1653    Crofton Downs , crofton-downs
# 1798    Chartwell , chartwell
# 978     Grenada , grenada
# 3330    Grenada Village , grenada-village
# 980     Grenada North , grenada-north
# 1018    Brooklyn , brooklyn
# 3049    Glenside , glenside
# 1784    Houghton Bay , houghton-bay
# 967     Johnsonville , johnsonville
# 1785    Island Bay , island-bay
# 1487    Crawford , crawford
# 3164    Evans Bay , evans-bay
# 1760    Kaiwharawhara , kaiwharawhara
# 3050    Karaka Bays , karaka-bays
# 1797    Khandallah , khandallah
# 1117    Karori , karori
# 1622    Kowhai Park , kowhai-park
# 1094    Lambton , lambton
# 874     Hataitai , hataitai
# 1294    Kilbirnie , kilbirnie
# 3043    Makara-Ohariu , makara-ohariu
# 3042    Maupuia , maupuia
# 1568    Kingston , kingston
# 1341    Miramar , miramar
# 877     Horokiwi , horokiwi
# 1343    Mornington , mornington
# 1345    Kelburn , kelburn
# 1538    Newlands , newlands
# 1930    Linden , linden
# 1124    Newtown , newtown
# 966     Ngauranga , ngauranga
# 3051    Moa Point , moa-point
# 1017    Northland , northland
# 1783    Highbury , highbury
# 1759    Owhiro Bay , owhiro-bay
# 1567    Melrose , melrose
# 1761    Ngaio , ngaio
# 3053    Pipitea , pipitea
# 3040    Oriental Bay , oriental-bay
# 1326    Mount Victoria , mount-victoria
# 1226    Rongotai , rongotai
# 1560    Paparangi , paparangi
# 1796    Seatoun , seatoun
# 1621    Seatoun Bays , seatoun-bays
# 3226    Seatoun Heights , seatoun-heights
# 930     Strathmore Park , strathmore-park
# 950     Raroa , raroa
# 1852    Redwood , redwood
# 965     Tawa , tawa
# 1486    Te Aro , te-aro
# 1115    Wadestown , wadestown
# 3054    Wellington Central , wellington-central
# 1559    Thorndon , thorndon
# 1019    Wilton , wilton
# 1450    Mount Cook , mount-cook
# 1566    Roseneath , roseneath
# 993     Ohariu , ohariu
# 1795    Lyall Bay , lyall-bay
# 1344    Vogeltown , vogeltown
# 2638    Woodridge , woodridge

# wget http://www.metservice.com/publicData/climateDataMonthlyTown_otaihanga -O weather/suburb/historical-weather_999_otaihanga.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_carterton -O weather/suburb/historical-weather_1656_carterton.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_otaki -O weather/suburb/historical-weather_2640_otaki.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_otaki-beach -O weather/suburb/historical-weather_1211_otaki-beach.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_raumati-south -O weather/suburb/historical-weather_1651_raumati-south.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_raumati-beach -O weather/suburb/historical-weather_1652_raumati-beach.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_te-horo -O weather/suburb/historical-weather_1802_te-horo.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_waikanae-beach -O weather/suburb/historical-weather_998_waikanae-beach.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_waikanae -O weather/suburb/historical-weather_1445_waikanae.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_alicetown -O weather/suburb/historical-weather_2124_alicetown.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_peka-peka -O weather/suburb/historical-weather_3099_peka-peka.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_avalon -O weather/suburb/historical-weather_1618_avalon.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_paraparaumu-beach -O weather/suburb/historical-weather_1446_paraparaumu-beach.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_days-bay -O weather/suburb/historical-weather_1428_days-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_belmont -O weather/suburb/historical-weather_2122_belmont.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_boulcott -O weather/suburb/historical-weather_2123_boulcott.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_paraparaumu -O weather/suburb/historical-weather_1762_paraparaumu.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_harbour-view -O weather/suburb/historical-weather_2120_harbour-view.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_epuni -O weather/suburb/historical-weather_2118_epuni.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_gracefield -O weather/suburb/historical-weather_1872_gracefield.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_fairfield -O weather/suburb/historical-weather_1767_fairfield.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_paekakariki -O weather/suburb/historical-weather_1650_paekakariki.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_haywards -O weather/suburb/historical-weather_1389_haywards.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_eastbourne -O weather/suburb/historical-weather_2116_eastbourne.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_holborn -O weather/suburb/historical-weather_1416_holborn.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_kelson -O weather/suburb/historical-weather_1620_kelson.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_korokoro -O weather/suburb/historical-weather_1435_korokoro.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_mahina-bay -O weather/suburb/historical-weather_1745_mahina-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_lowry-bay -O weather/suburb/historical-weather_3331_lowry-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_manor-park -O weather/suburb/historical-weather_1388_manor-park.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_lower-hutt -O weather/suburb/historical-weather_1654_lower-hutt.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_maungaraki -O weather/suburb/historical-weather_1460_maungaraki.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_muritai -O weather/suburb/historical-weather_2079_muritai.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_melling -O weather/suburb/historical-weather_3350_melling.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_moera -O weather/suburb/historical-weather_1871_moera.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_naenae -O weather/suburb/historical-weather_1619_naenae.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_normandale -O weather/suburb/historical-weather_2119_normandale.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_rona-bay -O weather/suburb/historical-weather_2117_rona-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_stokes-valley -O weather/suburb/historical-weather_1841_stokes-valley.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_park-avenue -O weather/suburb/historical-weather_3351_park-avenue.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_sunshine-bay -O weather/suburb/historical-weather_3364_sunshine-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_taita -O weather/suburb/historical-weather_1415_taita.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_tirohanga -O weather/suburb/historical-weather_2121_tirohanga.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_wainuiomata -O weather/suburb/historical-weather_1765_wainuiomata.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_waiwhetu -O weather/suburb/historical-weather_1766_waiwhetu.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_petone -O weather/suburb/historical-weather_1448_petone.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_waterloo -O weather/suburb/historical-weather_924_waterloo.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_seaview -O weather/suburb/historical-weather_1873_seaview.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_castlepoint -O weather/suburb/historical-weather_3349_castlepoint.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_york-bay -O weather/suburb/historical-weather_1763_york-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_woburn -O weather/suburb/historical-weather_1449_woburn.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_flat-point -O weather/suburb/historical-weather_3434_flat-point.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_masterton -O weather/suburb/historical-weather_2579_masterton.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_riversdale-beach -O weather/suburb/historical-weather_3106_riversdale-beach.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_aotea -O weather/suburb/historical-weather_3198_aotea.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_ascot-park -O weather/suburb/historical-weather_1520_ascot-park.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_cannons-creek -O weather/suburb/historical-weather_2172_cannons-creek.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_camborne -O weather/suburb/historical-weather_985_camborne.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_elsdon -O weather/suburb/historical-weather_1929_elsdon.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_linden -O weather/suburb/historical-weather_973_linden.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_karehana-bay -O weather/suburb/historical-weather_1491_karehana-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_mana -O weather/suburb/historical-weather_2783_mana.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_papakowhai -O weather/suburb/historical-weather_1948_papakowhai.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_paremata -O weather/suburb/historical-weather_2785_paremata.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_plimmerton -O weather/suburb/historical-weather_1573_plimmerton.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_pauatahanui -O weather/suburb/historical-weather_1110_pauatahanui.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_porirua -O weather/suburb/historical-weather_1433_porirua.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_pukerua-bay -O weather/suburb/historical-weather_1853_pukerua-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_porirua-east -O weather/suburb/historical-weather_1842_porirua-east.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_ranui-heights -O weather/suburb/historical-weather_1447_ranui-heights.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_takapuwahia -O weather/suburb/historical-weather_1334_takapuwahia.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_titahi-bay -O weather/suburb/historical-weather_1515_titahi-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_waitangirua -O weather/suburb/historical-weather_1434_waitangirua.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_whitby -O weather/suburb/historical-weather_1132_whitby.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_gladstone -O weather/suburb/historical-weather_3375_gladstone.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_featherston -O weather/suburb/historical-weather_1803_featherston.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_greytown -O weather/suburb/historical-weather_1655_greytown.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_cape-palliser -O weather/suburb/historical-weather_3347_cape-palliser.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_ngawi -O weather/suburb/historical-weather_3348_ngawi.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_martinborough -O weather/suburb/historical-weather_875_martinborough.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_akatarawa -O weather/suburb/historical-weather_1758_akatarawa.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_blue-mountains -O weather/suburb/historical-weather_1799_blue-mountains.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_brown-owl -O weather/suburb/historical-weather_1400_brown-owl.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_clouston-park -O weather/suburb/historical-weather_3067_clouston-park.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_ebdentown -O weather/suburb/historical-weather_3352_ebdentown.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_elderslea -O weather/suburb/historical-weather_3071_elderslea.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_heretaunga -O weather/suburb/historical-weather_925_heretaunga.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_mangaroa -O weather/suburb/historical-weather_3094_mangaroa.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_maoribank -O weather/suburb/historical-weather_1768_maoribank.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_pinehaven -O weather/suburb/historical-weather_920_pinehaven.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_riverstone-terraces -O weather/suburb/historical-weather_1333_riverstone-terraces.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_kaitoke -O weather/suburb/historical-weather_3166_kaitoke.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_silverstream -O weather/suburb/historical-weather_921_silverstream.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_te-marua -O weather/suburb/historical-weather_1703_te-marua.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_the-plateau -O weather/suburb/historical-weather_1770_the-plateau.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_timberlea -O weather/suburb/historical-weather_1769_timberlea.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_birchville -O weather/suburb/historical-weather_1212_birchville.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_totara-park -O weather/suburb/historical-weather_2078_totara-park.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_trentham -O weather/suburb/historical-weather_922_trentham.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_maymorn -O weather/suburb/historical-weather_1399_maymorn.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_upper-hutt -O weather/suburb/historical-weather_1547_upper-hutt.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_whitemans-valley -O weather/suburb/historical-weather_1840_whitemans-valley.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_kingsley-heights -O weather/suburb/historical-weather_1565_kingsley-heights.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_moonshine-valley -O weather/suburb/historical-weather_3503_moonshine-valley.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_pakuratahi -O weather/suburb/historical-weather_3353_pakuratahi.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_broadmeadows -O weather/suburb/historical-weather_951_broadmeadows.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_aro-valley -O weather/suburb/historical-weather_3047_aro-valley.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_mount-marua -O weather/suburb/historical-weather_3411_mount-marua.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_berhampore -O weather/suburb/historical-weather_1342_berhampore.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_churton-park -O weather/suburb/historical-weather_1199_churton-park.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_wallaceville -O weather/suburb/historical-weather_923_wallaceville.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_breaker-bay -O weather/suburb/historical-weather_3048_breaker-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_crofton-downs -O weather/suburb/historical-weather_1653_crofton-downs.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_chartwell -O weather/suburb/historical-weather_1798_chartwell.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_grenada -O weather/suburb/historical-weather_978_grenada.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_grenada-village -O weather/suburb/historical-weather_3330_grenada-village.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_grenada-north -O weather/suburb/historical-weather_980_grenada-north.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_brooklyn -O weather/suburb/historical-weather_1018_brooklyn.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_glenside -O weather/suburb/historical-weather_3049_glenside.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_houghton-bay -O weather/suburb/historical-weather_1784_houghton-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_johnsonville -O weather/suburb/historical-weather_967_johnsonville.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_island-bay -O weather/suburb/historical-weather_1785_island-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_crawford -O weather/suburb/historical-weather_1487_crawford.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_evans-bay -O weather/suburb/historical-weather_3164_evans-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_kaiwharawhara -O weather/suburb/historical-weather_1760_kaiwharawhara.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_karaka-bays -O weather/suburb/historical-weather_3050_karaka-bays.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_khandallah -O weather/suburb/historical-weather_1797_khandallah.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_karori -O weather/suburb/historical-weather_1117_karori.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_kowhai-park -O weather/suburb/historical-weather_1622_kowhai-park.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_lambton -O weather/suburb/historical-weather_1094_lambton.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_hataitai -O weather/suburb/historical-weather_874_hataitai.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_kilbirnie -O weather/suburb/historical-weather_1294_kilbirnie.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_makara-ohariu -O weather/suburb/historical-weather_3043_makara-ohariu.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_maupuia -O weather/suburb/historical-weather_3042_maupuia.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_kingston -O weather/suburb/historical-weather_1568_kingston.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_miramar -O weather/suburb/historical-weather_1341_miramar.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_horokiwi -O weather/suburb/historical-weather_877_horokiwi.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_mornington -O weather/suburb/historical-weather_1343_mornington.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_kelburn -O weather/suburb/historical-weather_1345_kelburn.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_newlands -O weather/suburb/historical-weather_1538_newlands.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_linden -O weather/suburb/historical-weather_1930_linden.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_newtown -O weather/suburb/historical-weather_1124_newtown.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_ngauranga -O weather/suburb/historical-weather_966_ngauranga.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_moa-point -O weather/suburb/historical-weather_3051_moa-point.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_northland -O weather/suburb/historical-weather_1017_northland.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_highbury -O weather/suburb/historical-weather_1783_highbury.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_owhiro-bay -O weather/suburb/historical-weather_1759_owhiro-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_melrose -O weather/suburb/historical-weather_1567_melrose.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_ngaio -O weather/suburb/historical-weather_1761_ngaio.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_pipitea -O weather/suburb/historical-weather_3053_pipitea.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_oriental-bay -O weather/suburb/historical-weather_3040_oriental-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_mount-victoria -O weather/suburb/historical-weather_1326_mount-victoria.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_rongotai -O weather/suburb/historical-weather_1226_rongotai.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_paparangi -O weather/suburb/historical-weather_1560_paparangi.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_seatoun -O weather/suburb/historical-weather_1796_seatoun.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_seatoun-bays -O weather/suburb/historical-weather_1621_seatoun-bays.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_seatoun-heights -O weather/suburb/historical-weather_3226_seatoun-heights.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_strathmore-park -O weather/suburb/historical-weather_930_strathmore-park.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_raroa -O weather/suburb/historical-weather_950_raroa.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_redwood -O weather/suburb/historical-weather_1852_redwood.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_tawa -O weather/suburb/historical-weather_965_tawa.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_te-aro -O weather/suburb/historical-weather_1486_te-aro.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_wadestown -O weather/suburb/historical-weather_1115_wadestown.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_wellington-central -O weather/suburb/historical-weather_3054_wellington-central.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_thorndon -O weather/suburb/historical-weather_1559_thorndon.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_wilton -O weather/suburb/historical-weather_1019_wilton.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_mount-cook -O weather/suburb/historical-weather_1450_mount-cook.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_roseneath -O weather/suburb/historical-weather_1566_roseneath.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_ohariu -O weather/suburb/historical-weather_993_ohariu.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_lyall-bay -O weather/suburb/historical-weather_1795_lyall-bay.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_vogeltown -O weather/suburb/historical-weather_1344_vogeltown.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_woodridge -O weather/suburb/historical-weather_2638_woodridge.json

# Test scraping from places available on Metservice site.
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_wellington-city -O weather/historical-weather_wellington-city.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_western-hills -O weather/historical-weather_western-hills.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_wainuiomata -O weather/historical-weather_wainuiomata.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_lower-hutt -O weather/historical-weather_lower-hutt.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_upper-hutt -O weather/historical-weather_upper-hutt.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_porirua -O weather/historical-weather_porirua.json
# wget http://www.metservice.com/publicData/climateDataMonthlyTown_kapiti -O weather/historical-weather_kapiti.json
