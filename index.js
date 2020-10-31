const greatWhiteShark = {
  myKingdom: 'Animalia',
  myPyhlum: 'Chordata',
  myClass: 'Chondrichtyes',
  myOrder: 'Lamniformes',
  myFamily: 'Lamnidae',
  myGenus: 'Charcharodon',
  mySpecies: 'charcharias',
  coservationStatus: "vunerable",
  getScientificName: function() {
    scienticName = this.myGenus + ' ' + this.mySpecies;
    return(scienticName);
  }
} 

console.log(greatWhiteShark);

greatWhiteShark.getScientificName();