import users from './assets/hard-coded-users.js';

export default class ServiceServer {


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
        users.push({user_name: userName, nickname: "temp", password: password, picture_url: photo, chats: []})
        // users.push(userName,'temp',password, 'temp');
        console.log(userName);
    }

    static getUserUrl(userName) {
        let url = "https://cdn-icons.flaticon.com/png/512/2102/premium/2102647.png?token=exp=1649580878~hmac=0b7dfdb65a1a911aeb173696948d554e";

        users.forEach(val => {
            if (val.user_name === userName) {
                url = val.picture_url;
            }
        })
        return url;
    }

    static getUsers(currentUser) {
        let chats = [];
        users.forEach(user => {
            if (user.user_name === currentUser) {
                chats = user.chats;
            }
        })
        return chats;
    }

    static getUsersNames(currentUser) {
        let chats = ServiceServer.getUsers(currentUser);
        let keys = [];
        for (let k in chats) keys.push(k);
        return keys;

    }

    static getChats(currentUser, chatWith) {
        let chats = ServiceServer.getUsers(currentUser);
        if (chatWith in chats) {
            return chats[chatWith];
        }
        return []
    }

    static addMsg(msg, currentUser, chatWith) {

        users.forEach(user => {
            if (user.user_name === currentUser && chatWith in user.chats) {
                user.chats[chatWith].push({is_it_me: msg.isItMe, text: msg.text, date: msg.date, media: msg.media, mediaType: msg.mediaType});

            }
        })

    }


    static getLastMessage(currentUser, chatWith){

        const chats = ServiceServer.getChats(currentUser,chatWith);

        if (chats){
            return chats.slice(-1)[0];
        }
        return null;
    }
    printUsers() {
        users.forEach(val => {
            console.log(val.nickname)
        });
    }

}
