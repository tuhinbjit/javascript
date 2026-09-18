// class User {
//     login() { console.log("Logged in"); }
// }


// function User() { }
// User.prototype.login = function () { console.log("Logged in"); };









// netflix
class User {
    static totalUsers = 0;

    username = "Unknown";
    email = "";

    constructor(userName, userEmail) {
        this.username = userName;
        this.email = userEmail;
        User.totalUsers++;
    }

    playMovie() {
        console.log("Playing free movies with ads...");
    }

    static getActiveUsers() {
        return User.totalUsers;
    }
}

const user1 = new User("Fahim", "fahim@mail.com");
const user2 = new User("Sadia", "sadia@mail.com");

console.log(user1.username);
// user1.playMovie();
console.log(User.getActiveUsers());














const premUser1 = new PremiumUser("Rakib", "rakib@mail.com");
premUser1.playMovie();
premUser1.downloadMovie();



class PremiumUser extends User {

    constructor(userName, userEmail, planDuration) {
        super(userName, userEmail);
        this.duration = planDuration;
    }
    downloadMovie() {
        console.log("Downloading in 4K resolution!");
    }
}
const premUser2 = new PremiumUser("Tanvir", "tanvir@mail.com", "1 Month");
premUser2.playMovie();