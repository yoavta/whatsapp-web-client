class Message {
    constructor(text, isItMe, date, media, mediaType) {
        this.text = text;
        this.isItMe = isItMe;
        this.date = date;
        this.media = media;
        this.mediaType = mediaType
    }

    getIsItMe() {
        return this.isItMe;
    }

} 

 export default Message;