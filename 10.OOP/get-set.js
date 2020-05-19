const data = {
    locations: [],
    get location() {
        return this._location;
    },
    set location(value) {
        this._location = value.trim();
        this.locations.push(this._location);
    },

    // set need variable, get also need variable.
    get ttt() {},
    set ttt(value) {},
};

data.location = '  Philadelphia   ';
data.location = ' New York';
console.log(data);
console.log(data.location);

data.ttt = 'son';
console.log(data.ttt);
