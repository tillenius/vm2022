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
gameList.push(new Game("3 dec 16:00", "Nederländerna"         ,"USA"        , -1, -1, 0, 0, 0, 400128136, "NED","USA", 0 ));
gameList.push(new Game("3 dec 20.00", "Argentina"             ,"Australien" , -1, -1, 0, 0, 0, 400128131, "ARG","AUS", 1 ));
gameList.push(new Game("4 dec 16.00", "Frankrike"             ,"Polen"      , -1, -1, 0, 0, 0, 400128135, "FRA","POL", 1 ));
gameList.push(new Game("4 dec 20.00", "England"               ,"Senegal"    , -1, -1, 0, 0, 0, 400128134, "ENG","SEN", 1 ));
gameList.push(new Game("5 dec 16.00", "Japan"                 ,"Kroatien"   , -1, -1, 0, 0, 0, 400128132, "JPN","CRO", 1 ));
gameList.push(new Game("5 dec 20.00", "Brasilien"             ,"Sydkorea"   , -1, -1, 0, 0, 0, 400128133, "BRA","KOR", 1 ));
gameList.push(new Game("6 dec 16.00", "Marocko"               ,"Spanien"    , -1, -1, 0, 0, 0, 400128137, "MAR","ESP", 1 ));
gameList.push(new Game("6 dec 20.00", "Portugal"              ,"Schweiz"    , -1, -1, 0, 0, 0, 400128130, "POR","SUI", 1 ));
