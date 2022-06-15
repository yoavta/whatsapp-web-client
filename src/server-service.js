import users from './assets/hard-coded-users.js';

export default class ServiceServer {
    static splitUrl = 'localhost:7093'
    static baseUrl = 'http://'+ServiceServer.splitUrl+'/api/'
     static currentUser;


    static setCurrentUser(user){
        ServiceServer.currentUser = user;
    }
    static async getUser(userName) {
        let res;
        await fetch(ServiceServer.baseUrl + 'user/' + userName,
            ).then(data => data.json()).then(data => res = data);
        return await res;
    }

    static async getContacts() {
        let contacts = [];
        await fetch(ServiceServer.baseUrl + "contacts/",{headers:{'connectedUser' : ServiceServer?.currentUser.userName}}).then(data => data.json()).then(data => contacts = data.reverse());
        return contacts;
    }

    static async getUsers() {
        let users = [];
        await fetch(ServiceServer.baseUrl + "user/",{headers:{'connectedUser' : ServiceServer?.currentUser.userName}}).then(data => data.json()).then(data => users = data.reverse());
        return users;
    }

    static async getChat(chatWith) {

        let chats = [];
        await fetch(ServiceServer.baseUrl + "messages/" + chatWith + "/messagesType",
            {headers:{'connectedUser' : ServiceServer?.currentUser.userName}}).then(data => data.json()).then(data => chats = data);
        return chats;
    }


    static async checkValidUser(userName, password) {
        return await fetch(ServiceServer.baseUrl + "User/" + userName + "/" + password,
            ).then(data => data.json());


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
                    'Content-Type': 'application/json;charset=UTF-8',
                    'connectedUser' : ServiceServer.currentUser?.userName
                }
            });

    }


    static async addMsg(msg, currentUser, chatWith) {
        let result = 0;

        let content;
        if (msg.mediaType === 'text') {
            content = msg.text;
        } else {
            content = msg.media;
        }

        const message = {
            "sender": currentUser.userName.toString(),
            "reciver": chatWith.toString(),
            "content": content.toString(),
            "mediaType": msg.mediaType.toString()
        }
        await fetch(ServiceServer.baseUrl + 'messages/' + chatWith + '/messagesType',
            {
                method: 'POST',
                body: JSON.stringify(message),
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'connectedUser' : ServiceServer.currentUser?.userName
                }
            }).then(() => {
                result = result + 1
        });

        const transfer = {
            "from": currentUser.userName.toString(),
            "to": chatWith.toString(),
            "content": content.toString(),
        }

        let contactData;
        await fetch(ServiceServer.baseUrl + 'contacts/' + chatWith, {headers: { 'connectedUser' : ServiceServer.currentUser?.userName}}).then(data => data.json()).then(json => contactData = json);
        const url = 'http://' + contactData.server + '/api/transfer/';
        await fetch(url,
            {
                method: 'POST',
                body: JSON.stringify(transfer),
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'connectedUser' : ServiceServer.currentUser?.userName
                },
            }).then(() => result = result + 1)

        return result;

    }


    static async addConversation(nickname, userName, serverName) {

        let result = 0;

        const newUser = {
            "id": userName,
            "name": nickname,
            "server": serverName
        }
        await fetch(ServiceServer.baseUrl + 'Contacts',
            {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'connectedUser' : ServiceServer.currentUser?.userName
                }
            }).then(() => result = result + 1)

        const invitations = {
            "from": ServiceServer.currentUser?.userName,
            "to": userName,
            "server": ServiceServer.splitUrl
        }
        const sendUrl = 'http://' + serverName + '/api/invitations/';

        await fetch(sendUrl,
            {
                method: 'POST',
                body: JSON.stringify(invitations),
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8',
                    'connectedUser' : ServiceServer.currentUser?.userName
                }
            }).then(() => result = result + 1);

        return result;
    }


    static userExists(userName) { // todo: fix
        let bool = false
        users.forEach(val => {

            if (val.user_name === userName) {
                bool = true
            }
        })
        return bool;
    }

}
