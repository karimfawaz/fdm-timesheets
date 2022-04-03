let TimeSheet = class {

    constructor(date, from, to) {
        this.status = "pending";
        this.date = date;
        this.from = from;
        this.to = to
    }
}
export let DB = {
    loggedIn: false,
    timesheets:[
        new TimeSheet("today",1,2),
        new TimeSheet("today",1,2),
        new TimeSheet("today",1,2),

    ]
}



export const login = () => {
    DB.loggedIn = true;

}

export const logout = () => {
    DB.loggedIn = false;

}

