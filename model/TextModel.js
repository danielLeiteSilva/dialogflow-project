class TextModel {
    constructor() {
        this.text = new Object()
    }

    setTextObject(...objectText) {
        if (Array.isArray(objectText[0])) {
            this.text.text = objectText
                .reduce((prev, next) =>
                    prev.concat(next))    
        } else {
            this.text.text = objectText
        }
    }

    getTextObject() {
        return this.object
    }
}

module.exports = TextModel