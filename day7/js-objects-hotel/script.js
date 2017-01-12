//John Duckett's JavaScript & jQuery

function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function() {
    return this.rooms - this.booked;
  }
}


var ttp = new Hotel('TTP Inn', 40, 10);
var qc = Hotel('QC Hotel', 100, 1);

console.log(ttp)
console.log(qc)
