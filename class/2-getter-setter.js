class PremiumUser extends User {
  _duration = 0; //locker

  constructor(userName, userEmail, planDuration) {
    super(userName, userEmail);
    this.duration = planDuration;
  }

  get duration() {
    return this._duration + " Months";
  }

  // cashier
  set duration(value) {
    if (value < 1) {
      console.log("Invalid duration!");
      return;
    }
    this._duration = value;
  }
}

const premUser3 = new PremiumUser("Nadia", "nadia@mail.com", 3);
premUser3.duration = -2; 
console.log(premUser3.duration);