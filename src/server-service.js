import users from './assets/hard-coded-users.js';

export default class ServiceServer {

    printUsers() {
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

    static printAllUsers() {

        users.forEach(val => {
            console.log(val.user_name);

        })

    }

    static addUser(userName, password, photo) {
        users.push({ user_name: userName, nickname: "temp", password: password, picture_url: photo })
        // users.push(userName,'temp',password, 'temp');
        console.log(userName);
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

    static getChats(currentUser, chatWith) {
        
        let chats = [];
        users.forEach(user => {
            if (user.user_name === currentUser) {
                chats = user.chats;
            }
        })
      
        if (chatWith in chats) {
            return chats[chatWith];
        }
        return []
    }

    static addMsg(msg, currentUser, chatWith) {
        debugger;
       
        users.forEach(user => {
            if (user.user_name === currentUser && chatWith in user.chats) {
                debugger
                user.chats[chatWith].push({ is_it_me: msg.isItMe, text: msg.text, date: msg.date, media: msg.media });

            }
        })


    }

}
