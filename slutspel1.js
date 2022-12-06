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
gameList.push(new Game("3 dec 16:00", "Nederländerna"         ,"USA"        , 3, 1, 0, 0, 0, 400128136, "NED","USA", 0 ));
gameList.push(new Game("3 dec 20.00", "Argentina"             ,"Australien" , 2, 1, 0, 0, 0, 400128131, "ARG","AUS", 1 ));
gameList.push(new Game("4 dec 16.00", "Frankrike"             ,"Polen"      , 3, 1, 0, 0, 0, 400128135, "FRA","POL", 2 ));
gameList.push(new Game("4 dec 20.00", "England"               ,"Senegal"    , 3, 0, 0, 0, 0, 400128134, "ENG","SEN", 3 ));
gameList.push(new Game("5 dec 16.00", "Japan"                 ,"Kroatien"   , 1, 1, 0, 0, 0, 400128132, "JPN","CRO", 4 ));
gameList.push(new Game("5 dec 20.00", "Brasilien"             ,"Sydkorea"   , 4, 1, 0, 0, 0, 400128133, "BRA","KOR", 5 ));
gameList.push(new Game("6 dec 16.00", "Marocko"               ,"Spanien"    , 0, 0, 0, 0, 0, 400128137, "MAR","ESP", 6 ));
gameList.push(new Game("6 dec 20.00", "Portugal"              ,"Schweiz"    , 6, 1, 0, 0, 0, 400128130, "POR","SUI", 7 ));

gameList.push(new Game(" 9 dec 16.00", "Kroatien"              ,"Brasilien"  , -1, -1, 0, 0, 0, 400128141, "CRO","BRA", 0 ));
gameList.push(new Game(" 9 dec 20:00", "Nederländerna"         ,"Argentina"  , -1, -1, 0, 0, 0, 400128139, "NED","ARG", 1 ));
gameList.push(new Game("10 dec 16.00", "Marocko"               ,"Portugal"   , -1, -1, 0, 0, 0, 400128140, "MAR","POR", 2 ));
gameList.push(new Game("10 dec 20.00", "England"               ,"Frankrike"  , -1, -1, 0, 0, 0, 400128138, "ENG","FRA", 3 ));

// 285075
//gameList.push(new Game("13 dec 20.00", "W57"                   ,"W58"        , -1, -1, 0, 0, 0, 400128143, "","", 0 ));
//gameList.push(new Game("14 dec 20:00", "W59"                   ,"W60"        , -1, -1, 0, 0, 0, 400128142, "","", 1 ));

// 285076
//gameList.push(new Game("17 dec 16.00", "RU61"                  ,"RU62"       , -1, -1, 0, 0, 0, 400128144, "","", 0 ));

// 285077
//gameList.push(new Game("18 dec 16.00", "W61"                   ,"W62"        , -1, -1, 0, 0, 0, 400128145, "","", 0 ));
