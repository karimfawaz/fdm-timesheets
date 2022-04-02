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
        TimeSheet("today",1,2),
        TimeSheet("today",1,2),
        TimeSheet("today",1,2),

    ]
}



export const login = () => {
    DB.loggedIn = true;

}

export const logout = () => {
    DB.loggedIn = false;

}

