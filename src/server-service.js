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

    static addUser(userName, nickname, password, photo) {
        users.push({user_name: userName, nickname: nickname, password: password, picture_url: photo, chats: []})
        // users.push(userName,'temp',password, 'temp');
        console.log(userName);
    }

    static userExists(userName) {
        let bool = false
        users.forEach(val => {

            if (val.user_name === userName) {
                bool = true

            }
        })
        return bool;
    }

    static getUserUrl(userName) {

        let url = "https://cdn-icons-png.flaticon.com/512/149/149071.png?w=826&t=st=1650031400~exp=1650032000~hmac=c12c919506b5941e345f8213a45d0d57f85c73cf7dfcecf3c026471fcf04159e";
        users.forEach(val => {
            if (val.user_name === userName) {
                if (val.picture_url != null) {
                    url = val.picture_url;
                }

            }
        })
        return url;
    }

    static getUserNickname(userName) {
        let nickname = userName

        users.forEach(val => {
            if (val.user_name === userName) {
                nickname = val.nickname;

            }
        })
        return nickname;
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

    static toDate(str){
        return parseInt(str[0]+str[1]+str[3]+str[4]);
    }

    static getUsersNamesSortedByLastMassage(currentUser, lastMassageCount) {
        let chats = ServiceServer.getUsers(currentUser);
        let map = new Map();
        for (let k in chats) {
            map.set(k,chats[k][chats[k].length - 1]);
        }

        let result = [];
                    debugger;
            const mapSize = map.size;
            for (let i=0; i< mapSize; i++) {
            let minDate = this.toDate('99:99');
            let minUser = null;

            for (const [key, value] of map.entries()) {
                if (this.toDate(value.date) <= minDate){
                    minUser=key;
                    minDate=this.toDate(value.date) ;
                }
            }

            result.push(minUser);
                map.delete(minUser);
        }
        // let keys = [];
        // for (let k in chats) keys.push(k);
        // return keys;

        return result.reverse();

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
                user.chats[chatWith].push({
                    is_it_me: msg.isItMe,
                    text: msg.text,
                    date: msg.date,
                    media: msg.media,
                    mediaType: msg.mediaType
                });

            }
        })

    }


    static getLastMessage(currentUser, chatWith) {

        const chats = ServiceServer.getChats(currentUser, chatWith);

        if (chats) {
            return chats.slice(-1)[0];
        }

        return null;
    }

    static addConversation(currentUser, chatWith) {
        users.forEach(user => {
            if (user.user_name === currentUser) {
                user.chats[chatWith] = [];


            }
        })
    }

    printUsers() {
        users.forEach(val => {
            console.log(val.nickname)
        });
    }

}
