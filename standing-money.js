function calcStanding() {
  
  var homeBets = new Array();
  var drawBets = new Array();
  var awayBets = new Array();
  
  for (var j=0; j<gameList.length; j++) {
    if (gameList[j].homegoal > -1 && gameList[j].awaygoal > -1) {
      var hb = 0;
      var db = 0;
      var ab = 0;
      for (var i=0; i<gamblerList.length; i++) {
        if (gamblerList[i].home[j] > gamblerList[i].away[j])
          hb++;
        if (gamblerList[i].home[j] == gamblerList[i].away[j])
          db++;
        if (gamblerList[i].home[j] < gamblerList[i].away[j])
          ab++;
      }
      homeBets.push(hb);
      drawBets.push(db);
      awayBets.push(ab); 
    } else {
      homeBets.push(0);
      drawBets.push(0);
      awayBets.push(0);
    }
  }
  
  for (var i=0; i<gamblerList.length; i++) {
    var points = new Array();
    var correctness = new Array();
    var total = 0;
    for (var j=0; j<gameList.length; j++) {
      if (gameList[j].homegoal > gameList[j].awaygoal) {
        if (gamblerList[i].home[j] > gamblerList[i].away[j]) {
          points.push(gameList[j].odds1*1000 - 1000);
          correctness.push(1);
        } else {
          points.push(-1000);
          correctness.push(0);
        }
      } else if(gameList[j].homegoal < gameList[j].awaygoal) {
        if (gamblerList[i].home[j] < gamblerList[i].away[j]) {
          points.push(gameList[j].odds2*1000 - 1000);
          correctness.push(1);
        } else {
          points.push(-1000);
          correctness.push(0);
        }
      } else {
        if (gamblerList[i].home[j] == gamblerList[i].away[j]) {
          points.push(gameList[j].oddsx*1000 - 1000);
          correctness.push(1);
        } else {
          points.push(-1000);
          correctness.push(0);
        }
      }
      total += points[j];
    }
    gamblerList[i].points=points;
    gamblerList[i].correctness=correctness;
    gamblerList[i].total=total;
  }
  
  standing = new Array();
  for (var i=0; i<gamblerList.length; i++) {
    standing.push(i);
  }
  
  for (var i=0; i<standing.length-1; i++) {
    for (var j=i; j<standing.length; j++) {
      if (gamblerList[standing[j]].total > gamblerList[standing[i]].total) {
        var tmp=standing[i];
        standing[i]=standing[j];
        standing[j]=tmp;
      }
    }
  }
  
}

function updateTable() {
  calcStanding();
  var pos = 1;
  var prevScore = gamblerList[standing[0]].total;
  for (var i=0; i<gamblerList.length; i++) {
    var stdTD = document.getElementById("std" + i);
    if (gamblerList[standing[i]].total < prevScore) {
      pos = i+1;
      prevScore = gamblerList[standing[i]].total;
    }
    stdTD.replaceChild(document.createTextNode(pos + ". " + gamblerList[standing[i]].name),stdTD.firstChild);
    //var stdImg = document.getElementById("stdimg" + i);
    //if (gamblerList[standing[i]].mode =="FREE")
    //  stdImg.style.visibility="visible";
    //else
    //  stdImg.style.visibility="hidden";
    var totTD = document.getElementById("tot" + i);
    totTD.replaceChild(document.createTextNode(gamblerList[standing[i]].total),totTD.firstChild);
    for (var j=0; j<gameList.length; j++) {
      var bsTD = document.getElementById("bs" + i + "." + j);
      if (bsTD) {
        if (gamblerList[i].correctness[j] == 0) {
          bsTD.style.background="#FFFFCC";
        }
        if (gamblerList[i].correctness[j] == 1) {
          bsTD.style.background="#90EE90";
        }
        if (gamblerList[i].correctness[j] == 2) {
          bsTD.style.background="#33FF33";
        }        
      }
      bsTD = document.getElementById("hbs" + i + "." + j);
      if (bsTD) {
        if (gamblerList[i].correctness[j] == 0) {
          bsTD.style.background="#FFFFCC";
        }
        if (gamblerList[i].correctness[j] == 1) {
          bsTD.style.background="#90EE90";
        }
        if (gamblerList[i].correctness[j] == 2) {
          bsTD.style.background="#33FF33";
        }        
      }
      var ptTD = document.getElementById("pt" + i + "." + j);
      if (ptTD) {
        ptTD.style.color="black";
        ptTD.replaceChild(document.createTextNode(Math.round(gamblerList[i].points[j])),ptTD.firstChild);
      }
      ptTD = document.getElementById("hpt" + i + "." + j);
      if (ptTD) {
        ptTD.style.color="black";
        ptTD.replaceChild(document.createTextNode(Math.round(gamblerList[i].points[j])),ptTD.firstChild);
      }
    }
    //var totptTD = document.getElementById("totpt" + i);
    //totptTD.replaceChild(document.createTextNode(gamblerList[i].total),totptTD.firstChild); 
  }
}


function updateStanding() {
  for (var i=0; i<gameList.length; i++) {
    var hscore = document.getElementById("h" + i);
    var bscore = document.getElementById("b" + i);
    if (hscore != null) {
      var hgoal = hscore.value;
      var bgoal = bscore.value;
      if (hgoal.match(/^[0-9]+$/) && bgoal.match(/^[0-9]+$/)) {
        gameList[i].homegoal = parseInt(hgoal);
        gameList[i].awaygoal = parseInt(bgoal);
      } else {
        gameList[i].homegoal = -1;
        gameList[i].awaygoal = -1;
      }
    }
  }
  updateTable();
  drawChart();
}

function clearChanges() {
  for (var i=0; i<gameList.length; i++) {
    var hscore = document.getElementById("h" + i);
    var bscore = document.getElementById("b" + i);
    if (hscore != null && ! hscore.disabled) {
      hscore.value = "";
      bscore.value = "";
      gameList[i].homegoal = -1;
      gameList[i].awaygoal = -1;
    }
  }
  updateTable();
  drawChart();
}

calcStanding();
