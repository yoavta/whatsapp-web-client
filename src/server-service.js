import users from './assets/hard-coded-users.js';

export default class ServiceServer{

    printUsers(){
                users.forEach(val => {
            console.log(val.nickname)
        });
    }

    static checkValidUser(userName, password) {
        let flag = false;
        users.forEach(val => {
            if (val.user_name === userName) {
                flag = (val.password === password);
            }
        })
        return flag;
    }

        static getUserUrl(userName) {
        let url = null;
        users.forEach(val => {
            if (val.user_name === userName) {
                url = val.picture_url;
            }
        })
        return url;
    }


        static getUsers() {
        let res = [];
        users.forEach(val => res.push(val))
        return res;
    }
}
