let TimeSheet = class {

    constructor(status, from, to) {
        this.status = status;
        this.from = from;
        this.to = to
    }
}

let User = class {
    constructor(ID, name, username, password, BAN, timesheets) {
        this.ID = ID;
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
        new User(200473224, "David", "consultant1", "consultant123", 267264045,
            [
                new TimeSheet("pending", new Date("2022-04-04T09:00:00"), new Date("2022-04-04T13:00:00")),
                
                
            ]
        ),
    ],

}



export const login = (username, password) => {
    if (DB.users.filter(user => username = user.username)[0].password === password) {
        DB.loggedIn = true;
        DB.currentUser = DB.users.filter(user => username = user.username)[0];
    }


}

export const logout = () => {
    DB.loggedIn = false;
    DB.currentUser = null;

}

