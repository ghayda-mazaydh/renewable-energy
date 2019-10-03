var marks = function () {
var grade = prompt ('enter your grade 0-100');

var i;
var percentage;
var a;

while (grade > 100) {  
    
    
    grade = prompt ('try again'); 
    
}
    a = prompt ('how many time you want to see your result');
    
    for (i=1; i <= a; i++) {
        if (grade > 0 && grade < 50) {
        percentage += 'fail';
 
    } else if (grade >= 50 && grade <= 100) {
         percentage = percentage +  'good';}
}     
return percentage;
}; 







