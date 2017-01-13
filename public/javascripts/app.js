var app = new Vue({
    el: '#wrapper',
    data: {
        newThing: "",
        things: [],
        pickedThing: ""
    },
    methods: {
        addThing: function() {
            if (!!this.newThing) {
                this.things.push(this.newThing);
                this.newThing = "";
            }
        },
        pickThing: function() {
            var thing = this.things[Math.floor(Math.random()*this.things.length)];
            this.pickedThing = thing;
        },
        clearThings: function() {
            this.things = [];
            this.pickedThing = "";
            this.newThing = "";
        }
    }
});