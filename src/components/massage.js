class massage {
    constructor(text, isItMe, date, media) {
        this.text = text;
        this.isItMe = isItMe;
        this.date = date;
        this.media = media;
    }

    getIsItMe() {
        return this.isItMe;
    }

} 

 export default massage;