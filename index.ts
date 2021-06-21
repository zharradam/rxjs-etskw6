import { of } from "rxjs";
import { map } from "rxjs/operators";

console.clear();

var source = ['1','2','3','foo','1','2','4','5','bar','8','13'];

var result = source
.map(x => parseInt(x))
.filter(x => !isNaN(x))
.reduce((x,y) => x + y);

console.log(result);
