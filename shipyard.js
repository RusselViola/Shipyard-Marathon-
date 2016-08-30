

function Ship(name) {
  this.name = name;
  this.crew = [];
  this.propulsion = null;
};

Ship.prototype.mountPropulsion = function(propulsion) {
  this.propulsion = propulsion;
  console.log("Propulsion mounted!");
};

Ship.prototype.takeoff = function() {
  if(this.propulsion.fire()){
    console.log("PCHOOOOOOOOOooooooooo*");
  } else {
    console.log("Takeoff failed to fire.");
  }
};

Ship.prototype.loadCrew = function(crewList) {
    for (var i = 0; i < crewList.length; i++) {
      this.crew.push(crewList[i]);
      console.log("Welcome aboard, " + crewList[i].name + "!");
    }
}

Ship.prototype.captain = function() {
  var number = this.crew.length;
  var random_number = Math.floor(Math.random()*number);
  var captain = this.crew[random_number];
  return captain;
}

var ourShip = new Ship("Space-Wizards");

var crewNames = ["Mary Elaine", "Myles", "Steve", "Noah", "Keyan", "Jeff", "Brady", "Russel", "Nick", "Liz", "Charlie"];

function CrewMember(name) {
  this.name = name;
  this.trained = false;
}

function trainCrew(crew) {
  var trainedCrew = [];
  for (var i = 0; i < crew.length; i++){
    var member = new CrewMember(crew[i]);
    member.trained = true;
    trainedCrew.push(member);
  }
  return trainedCrew;
}
var crewMembers = trainCrew(crewNames);

var rocket = {
  fuel: 0,
  addFuel: function(amount) {
    this.fuel += amount;
    console.log(this.fuel);
  },
  fire: function() {
    if (this.fuel >= 1) {
      this.fuel--;
      console.log("The engines have been fired!");
      console.log("The amount of fuel left is:" + this.fuel);
      return true;
    } else {
      console.log("The engines failed to fire.");
      return false;
    }
  }
};

var launchPad = function(ship, crewList, rocket) {
  console.log('Bike Shedding on pre-launch procedures...');
  console.log("Welcome to " + ship.name)
  ship.loadCrew(crewList);
  console.log("Your captain is " + ship.captain().name);
  ship.mountPropulsion(rocket);
  ship.propulsion.addFuel(10);
  ship.takeoff();
};


var fleet = {
  ships: [],
  name: "The Grand Fleet",
  build: function(array) {
    for(var i =0; i < array.length; i++) {
      ship = new Ship(array[i]);
      this.ships.push(ship);
      console.log("Greetings, all crewmembers of the mighty " + ship.name)
    }
  }
}
launchPad(ourShip, crewMembers, rocket);

var shipNames = ["Nona", "Ponta", "Sonta Morioa", "Enterprise", "Serenity"]
fleet.build(shipNames);
