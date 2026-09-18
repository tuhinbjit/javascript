function User(userName) {
  this.username = userName;
}

User.prototype.playMovie = function() {
  console.log("Playing movie from central VIP lounge!");
};

const user1 = new User("Fahim");
const user2 = new User("Sadia");

user1.playMovie();