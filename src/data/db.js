


let TimeSheet = class {

    constructor(ID, status, date, hours) {
        this.ID = ID;
        this.status = status;
        this.date = date;
        this.hours = hours;
    }
}

let Consultant = class {
    constructor(ID, type, name, username, password, BAN, timesheets, rate) {
        this.ID = ID;
        this.type = type;
        this.name = name;
        this.username = username;
        this.password = password;
        this.BAN = BAN;
        this.timesheets = timesheets;
        this.rate = rate;
    }
}



let Manager = class {
    constructor(ID, type, name, username, password) {
        this.ID = ID;
        this.type = type;
        this.name = name;
        this.username = username;
        this.password = password;

    }
}

let Finance = class {
    constructor(ID, type, name, username, password) {
        this.ID = ID;
        this.type = type;
        this.name = name;
        this.username = username;
        this.password = password;

    }
}

export let DB = {
    loggedIn: false,
    currentUser: new Consultant(200473224, "consultant", "David", "david1", "consultant123", 267264045,
        [
            new TimeSheet(1, "pending", new Date("2022-04-04"), 4),
            new TimeSheet(2, "pending", new Date("2022-04-02"), 2),
            new TimeSheet(3, "approved", new Date("2022-03-24"), 4),
            new TimeSheet(4, "rejected", new Date("2022-03-24"), 10),
            
            
            
        ], 15.46
        ),
        users: [
            new Consultant(200473224, "consultant", "David", "david1", "consultant123", 267264045,
            [
                new TimeSheet(1, "pending", new Date("2022-04-04"), 4),
                new TimeSheet(2, "pending", new Date("2022-04-02"), 2),
                new TimeSheet(3, "approved", new Date("2022-03-24"), 4),
                new TimeSheet(4, "rejected", new Date("2022-03-24"), 10),
                
                
                
            ], 15.46
            ),
            
            new Manager(200345895, "manager", "Jeff", "jeff123", "manager2022"),
            new Finance(200146789, "finance", "John", "john2022", "finance123"),
            
            
        ],
        counter: 5,
        
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

export const addtimesheet = (date, hours) => {
    DB.currentUser?.timesheets.push(new TimeSheet(DB.counter,"pending", new Date(date), hours));
    DB.counter +=1; 
}


export const withdrawtimesheet = (index) => {

    DB.currentUser?.timesheets.splice(index, 1);

}
