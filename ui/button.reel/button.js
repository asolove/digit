var AbstractButton = require("montage/ui/base/abstract-button").AbstractButton;

exports.Button = AbstractButton.specialize({

    hasTemplate: {value: true},

    constructor : {
        value: function Button() {
            this.super();
            this.classList.add("digit-Button");
        }
    },

    meaning: {value:"normal"},
    size: {value:"normal"},

    draw: {
        value: function(firstDraw) {
            this.super();
            this.classList.add("digit-Button--meaning-" + this.meaning);
            this.classList.add("digit-Button--size-" + this.size);
        }
    }

});
