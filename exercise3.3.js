var fs = require('fs');


  fs.appendFile('ukinode.txt', 'Uki is located in rasavinthoddam jaffna nearby nallur temple. Uki consists many activities like personal coaching, English classes, Fitness club and Gavel club. Uki conducts gardening activities by the fitness club and we have beautiful nature environment.' ,
   function (err) {
    if (err) throw err;
    console.log('Updated!');
  });
