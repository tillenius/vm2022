function Game(dateandtime, home, away, homegoal, awaygoal, odds1, oddsx, odds2, idmatch, idhome, idaway, resultidx ) {
  this.dateandtime=dateandtime
  this.home=home;
  this.away=away;
  this.homegoal=homegoal;
  this.awaygoal=awaygoal;
  this.odds1=odds1;
  this.oddsx=oddsx;
  this.odds2=odds2;
  this.idmatch=idmatch;
  this.idhome=idhome;
  this.idaway=idaway;
  this.resultidx=resultidx;
}

gameList = new Array();

gameList.push(new Game("20 nov 17:00", "Qatar"                 ,"Ecuador"        , 0,2,  3.21, 3.10,  2.49, 400128082, "QAT","ECU", 0 )); 
gameList.push(new Game("21 nov 14.00", "England"               ,"Iran"           , 6,2,  1.37, 4.65, 11.20, 400235458, "ENG","IRN", 1 )); 
gameList.push(new Game("21 nov 17.00", "Senegal"               ,"Nederländerna"  , 0,2,  6.10, 3.89,  1.56, 400235449, "SEN","NED", 2 )); 
gameList.push(new Game("21 nov 20.00", "USA"                   ,"Wales"          , 1,1,  2.55, 2.99,  3.02, 400235455, "USA","WAL", 3 )); 
gameList.push(new Game("22 nov 11.00", "Argentina"             ,"Saudiarabien"   , 1,2,  1.17, 7.35, 15.75, 400235461, "ARG","KSA", 4 )); 
gameList.push(new Game("22 nov 14.00", "Danmark"               ,"Tunisien"       , 0,0,  1.44, 4.25,  7.45, 400235466, "DEN","TUN", 5 )); 
gameList.push(new Game("22 nov 17.00", "Mexiko"                ,"Polen"          , 0,0,  2.81, 2.85,  2.84, 400235463, "MEX","POL", 6 )); 
gameList.push(new Game("22 nov 20.00", "Frankrike"             ,"Australien"     , 4,1,  1.25, 5.95, 11.10, 400235470, "FRA","AUS", 7 )); 
gameList.push(new Game("23 nov 11.00", "Marocko"               ,"Kroatien"       , 0,0,  3.95, 3.21,  2.03, 400235481, "MAR","CRO", 8 )); 
gameList.push(new Game("23 nov 14.00", "Tyskland"              ,"Japan"          , 1,2,  1.46, 4.50,  6.35, 400235476, "GER","JPN", 9 )); 
gameList.push(new Game("23 nov 17.00", "Spanien"               ,"Costa Rica"     , 7,0,  1.16, 7.55, 15.50, 400235472, "ESP","CRC", 10 ));
gameList.push(new Game("23 nov 20.00", "Belgien"               ,"Kanada"         , 1,0,  1.50, 4.20,  6.50, 400235477, "BEL","CAN", 11 ));
gameList.push(new Game("24 nov 11.00", "Schweiz"               ,"Kamerun"        , 1,0,  1.69, 3.60,  5.25, 400235488, "SUI","CMR", 12 ));
gameList.push(new Game("24 nov 14.00", "Uruguay"               ,"Sydkorea"       , 0,0,  1.79, 3.42,  4.85, 400235491, "URU","KOR", 13 ));
gameList.push(new Game("24 nov 17.00", "Portugal"              ,"Ghana"          , 3,2,  1.37, 4.60,  8.60, 400235493, "POR","GHA", 14 ));
gameList.push(new Game("24 nov 20.00", "Brasilien"             ,"Serbien"        , 2,0,  1.43, 4.55,  6.95, 400235484, "BRA","SRB", 15 ));
gameList.push(new Game("25 nov 11.00", "Wales"                 ,"Iran"           , 0,2,  2.35, 3.04,  3.30, 400235453, "WAL","IRN", 16 ));
gameList.push(new Game("25 nov 14.00", "Qatar"                 ,"Senegal"        , 1,3,  3.45, 3.25,  2.17, 400235448, "QAT","SEN", 17 ));
gameList.push(new Game("25 nov 17.00", "Nederländerna"         ,"Ecuador"        , 1,1,  1.55, 3.99,  6.10, 400235452, "NED","ECU", 18 ));
gameList.push(new Game("25 nov 20.00", "England"               ,"USA"            , 0,0,  1.56, 3.87,  6.10, 400235457, "ENG","USA", 19 ));
gameList.push(new Game("26 nov 11.00", "Tunisien"              ,"Australien"     , 0,1,  2.63, 3.06,  2.85, 400235469, "TUN","AUS", 20 ));
gameList.push(new Game("26 nov 14.00", "Polen"                 ,"Saudiarabien"   , 2,0,  1.63, 3.75,  5.55, 400235459, "POL","KSA", 21 ));
gameList.push(new Game("26 nov 17.00", "Frankrike"             ,"Danmark"        , 2,1,  2.01, 3.29,  3.90, 400235467, "FRA","DEN", 22 ));
gameList.push(new Game("26 nov 20.00", "Argentina"             ,"Mexiko"         , 2,0,  1.52, 4.00,  6.40, 400235462, "ARG","MEX", 23 ));
gameList.push(new Game("27 nov 11.00", "Japan"                 ,"Costa Rica"     , 0,1,  1.61, 3.86,  5.65, 400235471, "JPN","CRC", 24 ));
gameList.push(new Game("27 nov 14.00", "Belgien"               ,"Marocko"        , 0,2,  1.53, 4.10,  6.05, 400235480, "BEL","MAR", 25 ));
gameList.push(new Game("27 nov 17.00", "Kroatien"              ,"Kanada"         , 4,1,  1.73, 3.67,  4.80, 400235482, "CRO","CAN", 26 ));
gameList.push(new Game("27 nov 20.00", "Spanien"               ,"Tyskland"       , 1,1,  2.53, 3.30,  2.77, 400235474, "ESP","GER", 27 ));
gameList.push(new Game("28 nov 11.00", "Kamerun"               ,"Serbien"        , 3,3,  4.55, 3.53,  1.80, 400235487, "CMR","SRB", 28 ));
gameList.push(new Game("28 nov 14.00", "Sydkorea"              ,"Ghana"          , 2,3,  2.66, 2.98,  2.88, 400235489, "KOR","GHA", 29 ));
gameList.push(new Game("28 nov 17.00", "Brasilien"             ,"Schweiz"        , 1,0,  1.49, 4.25,  6.55, 400235485, "BRA","SUI", 30 ));
gameList.push(new Game("28 nov 20.00", "Portugal"              ,"Uruguay"        , 2,0,  2.08, 3.29,  3.66, 400235492, "POR","URU", 31 ));
gameList.push(new Game("29 nov 16.00", "Ecuador"               ,"Senegal"        , 1,2,  2.73, 3.15,  2.67, 400235451, "ECU","SEN", 33 ));
gameList.push(new Game("29 nov 16.00", "Nederländerna"         ,"Qatar"          , 2,0,  1.25, 5.90, 11.80, 400235450, "NED","QAT", 32 ));
gameList.push(new Game("29 nov 20.00", "Wales"                 ,"England"        , 0,3,  5.90, 3.86,  1.58, 400235454, "WAL","ENG", 34 ));
gameList.push(new Game("29 nov 20.00", "Iran"                  ,"USA"            , 0,1,  3.97, 3.42,  1.94, 400235456, "IRN","USA", 35 ));
gameList.push(new Game("30 nov 16.00", "Australien"            ,"Danmark"        , 1,0,  6.60, 4.40,  1.46, 400235468, "AUS","DEN", 36 ));
gameList.push(new Game("30 nov 16.00", "Tunisien"              ,"Frankrike"      , 1,0, 10.20, 5.00,  1.32, 400235465, "TUN","FRA", 37 ));
gameList.push(new Game("30 nov 20.00", "Polen"                 ,"Argentina"      , 0,2,  5.25, 3.79,  1.65, 400235464, "POL","ARG", 38 ));
gameList.push(new Game("30 nov 20.00", "Saudiarabien"          ,"Mexiko"         , 1,2,  5.30, 3.67,  1.67, 400235460, "KSA","MEX", 39 ));
gameList.push(new Game("01 dec 16.00", "Kroatien"              ,"Belgien"        , 0,0,  3.33, 3.33,  2.19, 400235478, "CRO","BEL", 40 ));
gameList.push(new Game("01 dec 16.00", "Kanada"                ,"Marocko"        , 1,2,  3.02, 3.28,  2.37, 400235479, "CAN","MAR", 41 ));
gameList.push(new Game("01 dec 20.00", "Japan"                 ,"Spanien"        , 2,1,  7.25, 4.55,  1.42, 400235475, "JPN","ESP", 42 ));
gameList.push(new Game("01 dec 20.00", "Costa Rica"            ,"Tyskland"       , 2,4, 12.70, 5.80,  1.24, 400235473, "CRC","GER", 43 ));
gameList.push(new Game("02 dec 16.00", "Ghana"                 ,"Uruguay"        , 0,2,  4.85, 3.54,  1.76, 400235494, "GHA","URU", 44 ));
gameList.push(new Game("02 dec 16.00", "Sydkorea"              ,"Portugal"       , 2,1,  5.95, 4.10,  1.54, 400235490, "KOR","POR", 45 ));
gameList.push(new Game("02 dec 20.00", "Serbien"               ,"Schweiz"        , 2,3,  2.70, 3.22,  2.66, 400235486, "SRB","SUI", 46 ));
gameList.push(new Game("02 dec 20.00", "Kamerun"               ,"Brasilien"      , 1,0, 12.40, 5.95,  1.24, 400235483, "CMR","BRA", 47 ));

gameList.push(new Game("3 dec 16:00", "Nederländerna"         ,"USA"        , 3, 1, 0, 0, 0, 400128136, "NED","USA", 0 ));
gameList.push(new Game("3 dec 20.00", "Argentina"             ,"Australien" , 2, 1, 0, 0, 0, 400128131, "ARG","AUS", 1 ));
gameList.push(new Game("4 dec 16.00", "Frankrike"             ,"Polen"      , 3, 1, 0, 0, 0, 400128135, "FRA","POL", 2 ));
gameList.push(new Game("4 dec 20.00", "England"               ,"Senegal"    , 3, 0, 0, 0, 0, 400128134, "ENG","SEN", 3 ));
gameList.push(new Game("5 dec 16.00", "Japan"                 ,"Kroatien"   , 1, 1, 0, 0, 0, 400128132, "JPN","CRO", 4 ));
gameList.push(new Game("5 dec 20.00", "Brasilien"             ,"Sydkorea"   , 4, 1, 0, 0, 0, 400128133, "BRA","KOR", 5 ));
gameList.push(new Game("6 dec 16.00", "Marocko"               ,"Spanien"    , 0, 0, 0, 0, 0, 400128137, "MAR","ESP", 6 ));
gameList.push(new Game("6 dec 20.00", "Portugal"              ,"Schweiz"    , 6, 1, 0, 0, 0, 400128130, "POR","SUI", 7 ));

gameList.push(new Game(" 9 dec 16.00", "Kroatien"              ,"Brasilien"  , 1, 1, 0, 0, 0, 400128141, "CRO","BRA", 0 ));
gameList.push(new Game(" 9 dec 20:00", "Nederländerna"         ,"Argentina"  , 2, 2, 0, 0, 0, 400128139, "NED","ARG", 1 ));
gameList.push(new Game("10 dec 16.00", "Marocko"               ,"Portugal"   , 1, 0, 0, 0, 0, 400128140, "MAR","POR", 2 ));
gameList.push(new Game("10 dec 20.00", "England"               ,"Frankrike"  , 1, 2, 0, 0, 0, 400128138, "ENG","FRA", 3 ));

// 285075
gameList.push(new Game("13 dec 20.00", "Argentina"             ,"Kroatien"   , 3, 0, 0, 0, 0, 400128143, "ARG","CRO", 0 ));
gameList.push(new Game("14 dec 20:00", "Frankrike"             ,"Marocko"    , 2, 0, 0, 0, 0, 400128142, "FRA","MAR", 1 ));

// 285076
//gameList.push(new Game("17 dec 16.00", "RU61"                  ,"RU62"       , -1, -1, 0, 0, 0, 400128144, "","", 0 ));

// 285077
gameList.push(new Game("18 dec 16.00", "Argentina"               ,"Frankrike"  , 3, 3, 0, 0, 0, 400128145, "ARG","FRA", 0 ));
