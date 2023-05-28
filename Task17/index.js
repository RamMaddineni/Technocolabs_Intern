class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  nameGetter() {
    return this._nameGetter;
  }
  levelGetter() {
    return this._level;
  }
  numberOfStudentsGetter() {
    return this._numberOfStudents;
  }
  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`
    );
  }
  static pickSubstituteTeacher(substituteTeachers) {
    let i = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[i];
  }
  numberOfStudentsSetter(numberOfStudents) {
    if (typeof numberOfStudents == "number") {
      this._numberOfStudents = numberOfStudents;
    } else
      console.log("Invalid input : numberOfStudents must be set to a Number.");
  }
}
// const shl = new School("RBPS", "primary", 29);
// console.log(shl.levelGetter());
// shl.numberOfStudentsSetter(2);
// shl.quickFacts();
class Primary extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  pickupPolicyGetter() {
    return this._pickupPolicy;
  }
}
class High extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  sportsTeamsGetter() {
    return this._sportsTeams;
  }
}
class Middle {}

const lorraineHansbury = new Primary(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
lorraineHansbury.quickFacts();

console.log(
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ])
);

const alSmith = new High("Al E.Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
console.log(alSmith.sportsTeamsGetter());
