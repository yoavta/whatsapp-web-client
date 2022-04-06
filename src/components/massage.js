class massage {
    constructor(text, isItMe, date, media, mediaType) {
        this.text = text;
        this.isItMe = isItMe;
        this.date = date;
        this.media = media;
        this.mediaType = media.mediaType
    }

    getIsItMe() {
        return this.isItMe;
    }

} 

 export default massage;