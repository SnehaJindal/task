class School{
    constructor(name,level,numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }

    set numberOfStudents(numberOfStudents){
        if(typeof numberOfStudents==='number')
            this._numberOfStudents = numberOfStudents;
        else
            console.log(`Invalid input: numberOfStudents must be set to a Number.`)
    }

    quickFacts(){
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }

    pickSubstituteTeacher(substituteTeachers){
        const randomNumberIndex = Math.floor(Math.random()*substituteTeachers.length);
        return substituteTeachers[randomNumberIndex];
    }
}

class PrimarySchool extends School{
    constructor(name,level,numberOfStudents,pickupPolicy){
        super(name,'primary',level,numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
        return this._pickupPolicy;
    }
}

class HighSchool extends School{
    constructor(name,level,numberOfStudents,sportsTeams){
        super(name,'high',level,numberOfStudents)
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
        console.log(this._sportsTeams);
    }
}

const lorraineHansbury = new PrimarySchool(
    "Lorraine Hansbury",
    "",
    "514",
    "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool(
    "Al E. Smith",
    "",
    "415",
    "['Baseball', 'Basketball', 'Volleyball', 'Track and Field']",
);

 