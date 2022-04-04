

let TimeSheet = class {

    constructor(status, date, hours) {
        this.status = status;
        this.date = date;
        this.hours = hours;
    }
}

let User = class {
    constructor(ID, type, name, username, password, BAN, timesheets, rate) {
        this.ID = ID;
        this.type = type;
        this.name = name;
        this.username = username;
        this.password = password;
        this.BAN = BAN;

        this.timesheets = timesheets;

    }
}
export let DB = {
    loggedIn: false,
    currentUser: null,
    users: [
        new User(200473224, "consultant", "David", "consultant1", "consultant123", 267264045,
            [
                new TimeSheet("pending", new Date("2022-04-04"), 4),
                new TimeSheet("pending", new Date("2022-04-02"), 2),
                new TimeSheet("approved", new Date("2022-03-24"), 4),
                new TimeSheet("rejected", new Date("2022-03-24"), 10),



            ], 15.46
        ),
    ],

}



export const login = (username, password) => {

    if (DB.users.filter(user => username === user.username)[0].password === password) {
        DB.loggedIn = true;
        DB.currentUser = DB.users.filter(user => username === user.username)[0];

    }
    return ("/" + DB.users.filter(user => username === user.username)[0].type)



}

export const logout = () => {
    DB.loggedIn = false;
    DB.currentUser = null;

}

