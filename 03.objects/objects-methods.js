let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailablity: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(occupied) {
        this.guestCount += occupied;
    },
    removeParty: function(remove) {
        this.guestCount -= remove;
    },
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailablity(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailablity(4));
