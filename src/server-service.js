import users from './assets/hard-coded-users.js';

export default class ServiceServer {
    static baseUrl = 'https://localhost:7093/'






    //
    //
    //
    //
    // static checkValidUser(userName, password) {
    //     let flag = false;
    //     users.forEach(val => {
    //         if (val.user_name === userName) {
    //             flag = (val.password === password);
    //         }
    //     })
    //     return flag;
    // }
    //
    // static addUser(userName, nickname, password, photo) {
    //     users.push({user_name: userName, nickname: nickname, password: password, picture_url: photo, chats: []})
    // }
    //
    // static userExists(userName) {
    //     let bool = false
    //     users.forEach(val => {
    //         if (val.user_name === userName) {
    //             bool = true
    //         }
    //     })
    //     return bool;
    // }
    //

     static async getUser(userName) {
        let res ;
        await fetch(ServiceServer.baseUrl+ 'user/' + userName).then(data => data.json()).then(data=> res = data);
        return await res;
    }

static async getContacts(){
        let contacts = [];
         await fetch(ServiceServer.baseUrl+  "contacts/" ).then(data => data.json()).then(data=> contacts = data.reverse());
         return contacts;
}
static async getUsers() {
        let users = [];
         await fetch(ServiceServer.baseUrl+  "user/" ).then(data => data.json()).then(data=> users = data.reverse());
         return  users;
    }
    static async  getChat(chatWith) {

        let chats = [];
        await fetch(ServiceServer.baseUrl+  "Message/" + chatWith +"/messagesType" ).then(data => data.json()).then(data=> chats = data);
        return  chats;
    }


        static async checkValidUser(userName, password) {
           return  await fetch(ServiceServer.baseUrl+  "User/" + userName +"/" + password ).then(data => data.json());

    }
    //
    // static getUserNickname(userName) {
    //     let nickname = userName
    //
    //     users.forEach(val => {
    //         if (val.user_name === userName) {
    //             nickname = val.nickname;
    //
    //         }
    //     })
    //     return nickname;
    // }
    //
    // static getUsers(currentUser) {
    //     let chats = [];
    //     users.forEach(user => {
    //         if (user.user_name === currentUser) {
    //             chats = user.chats;
    //         }
    //     })
    //     return chats;
    // }
    //
    // static getUsersNames(currentUser) {
    //     let chats = ServiceServer.getUsers(currentUser);
    //     let keys = [];
    //     for (let k in chats) keys.push(k);
    //     return keys;
    //
    // }
    //
    // static toDate(str) {
    //     return parseInt(str[0] + str[1] + str[3] + str[4]);
    // }
    //
    // static getUsersNamesSortedByLastMassage(currentUser, lastMassageCount) {
    //     let chats = ServiceServer.getUsers(currentUser);
    //     let map = new Map();
    //     for (let k in chats) {
    //         map.set(k, chats[k][chats[k].length - 1]);
    //     }
    //
    //     let result = [];
    //
    //     const mapSize = map.size;
    //     for (let i = 0; i < mapSize; i++) {
    //         let minDate = this.toDate('99:99');
    //         let minUser = null;
    //
    //         for (const [key, value] of map.entries()) {
    //
    //             if (!value){
    //                 minUser = key;
    //                 continue;
    //
    //             }
    //             if (this.toDate(value.date) <= minDate) {
    //                 minUser = key;
    //                 minDate = this.toDate(value.date);
    //             }
    //         }
    //
    //         result.push(minUser);
    //         map.delete(minUser);
    //     }
    //     // let keys = [];
    //     // for (let k in chats) keys.push(k);
    //     // return keys;
    //
    //     return result.reverse();
    //
    // }
    //
    // static getChats(currentUser, chatWith) {
    //     let chats = ServiceServer.getUsers(currentUser);
    //     if (chatWith in chats) {
    //         return chats[chatWith];
    //     }
    //     return []
    // }
    //
    // static addMsg(msg, currentUser, chatWith) {
    //
    //     users.forEach(user => {
    //         if (user.user_name === currentUser && chatWith in user.chats) {
    //             user.chats[chatWith].push({
    //                 is_it_me: msg.isItMe,
    //                 text: msg.text,
    //                 date: msg.date,
    //                 media: msg.media,
    //                 mediaType: msg.mediaType
    //             });
    //
    //         }
    //     })
    //
    // }
    //
    //
    // static getLastMessage(currentUser, chatWith) {
    //
    //     const chats = ServiceServer.getChats(currentUser, chatWith);
    //
    //     if (chats) {
    //         return chats.slice(-1)[0];
    //     }
    //
    //     return null;
    // }
    //
    // static addConversation(currentUser, chatWith) {
    //     users.forEach(user => {
    //         if (user.user_name === currentUser) {
    //             user.chats[chatWith] = [];
    //
    //
    //         }
    //     })
    // }
    //
    // printUsers() {
    //     users.forEach(val => {
    //         console.log(val.nickname)
    //     });
    // }

    // static checkValidUser(userName, password) {
    //     let flag = false;
    //     users.forEach(val => {
    //         if (val.user_name === userName) {
    //             flag = (val.password === password);
    //         }
    //     })
    //     return flag;
    // }

    static printAllUsers() {

        users.forEach(val => {
            console.log(val.user_name);

        })

    }

    static async addUser(userName, nickname, password, photo) {

        const defaultPicture = "https://cdn-icons-png.flaticon.com/512/149/149071.png?w=826&t=st=1650031400~exp=1650032000~hmac=c12c919506b5941e345f8213a45d0d57f85c73cf7dfcecf3c026471fcf04159e";
        const newUser = {
  "userName": userName,
  "nickName": nickname,
  "password": password,
  "pictureUrl": photo ? photo : defaultPicture
        }
        return await fetch(ServiceServer.baseUrl + 'User/',
            {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            });

    }




    static async addMsg(msg, currentUser, chatWith) {
        let content;
        if (msg.mediaType === 'text') {
            content = msg.text;
        } else {
            content = msg.media;
        }

        const message = {
            // "created":  new Date(),
            "sender": currentUser.userName.toString(),
            "reciver": chatWith.toString(),
            "content": content.toString(),
            "mediaType": msg.mediaType.toString()
        }
         return await fetch(ServiceServer.baseUrl + 'Message/' + chatWith + '/messagesType',
             {method: 'POST',
                 body:JSON.stringify(message),
                        headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            }});
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

    // static getUserUrl(userName) {
    //
    //     let url = "https://cdn-icons-png.flaticon.com/512/149/149071.png?w=826&t=st=1650031400~exp=1650032000~hmac=c12c919506b5941e345f8213a45d0d57f85c73cf7dfcecf3c026471fcf04159e";
    //     users.forEach(val => {
    //         if (val.user_name === userName) {
    //             if (val.picture_url != null) {
    //                 url = val.picture_url;
    //             }
    //
    //         }
    //     })
    //     return url;
    // }

    // static getUserNickname(userName) {
    //     let nickname = userName
    //
    //     users.forEach(val => {
    //         if (val.user_name === userName) {
    //             nickname = val.nickname;
    //
    //         }
    //     })
    //     return nickname;
    // }
    //
    // static getUsers(currentUser) {
    //     let chats = [];
    //     users.forEach(user => {
    //         if (user.user_name === currentUser) {
    //             chats = user.chats;
    //         }
    //     })
    //     return chats;
    // }

    static getUsersNames(currentUser) {
        let chats = ServiceServer.getUsers(currentUser);
        let keys = [];
        for (let k in chats) keys.push(k);
        return keys;

    }

    static toDate(str) {
        return parseInt(str[0] + str[1] + str[3] + str[4]);
    }

    // static getUsersNamesSortedByLastMassage(currentUser, lastMassageCount) {
    //     let chats = ServiceServer.getUsers(currentUser);
    //     let map = new Map();
    //     for (let k in chats) {
    //         map.set(k, chats[k][chats[k].length - 1]);
    //     }
    //
    //     let result = [];
    //
    //     const mapSize = map.size;
    //     for (let i = 0; i < mapSize; i++) {
    //         let minDate = this.toDate('99:99');
    //         let minUser = null;
    //
    //         for (const [key, value] of map.entries()) {
    //
    //             if (!value){
    //                 minUser = key;
    //                 continue;
    //
    //             }
    //             if (this.toDate(value.date) <= minDate) {
    //                 minUser = key;
    //                 minDate = this.toDate(value.date);
    //             }
    //         }
    //
    //         result.push(minUser);
    //         map.delete(minUser);
    //     }
    //     // let keys = [];
    //     // for (let k in chats) keys.push(k);
    //     // return keys;
    //
    //     return result.reverse();
    //
    // }

    // static getChats(currentUser, chatWith) {
    //     let chats = ServiceServer.getUsers(currentUser);
    //     if (chatWith in chats) {
    //         return chats[chatWith];
    //     }
    //     return []
    // }

    // static addMsg(msg, currentUser, chatWith) {
    //
    //
    //     users.forEach(user => {
    //         if (user.user_name === currentUser && chatWith in user.chats) {
    //             user.chats[chatWith].push({
    //                 is_it_me: msg.isItMe,
    //                 text: msg.text,
    //                 date: msg.date,
    //                 media: msg.media,
    //                 mediaType: msg.mediaType
    //             });
    //
    //         }
    //     })
    //
    // }


    // static getLastMessage(currentUser, chatWith) {
    //
    //     const chats = ServiceServer.getChats(currentUser, chatWith);
    //
    //     if (chats) {
    //         return chats.slice(-1)[0];
    //     }
    //
    //     return null;
    // }

    static addConversation(currentUser, chatWith) {

        users.forEach(user => {
            if (user.user_name === currentUser) {
                user.chats[chatWith] = [];


            }
        })
    }

    // printUsers() {
    //     users.forEach(val => {
    //         console.log(val.nickname)
    //     });
    // }


    static async logOut() {
        return await fetch(ServiceServer.baseUrl+ "ConnectedUser", {method: "DELETE"} );
    }

    static async signIn(userName) {
        return await fetch(ServiceServer.baseUrl+ "ConnectedUser?userName=" + userName, {method: "GET"} );
    }
}
