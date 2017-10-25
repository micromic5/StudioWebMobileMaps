let test = 'testitest';

let myObj = {
    myProp: 'testProp',
    myFunction: function () {
        console.log(this.myProp);
    }
}
myObj.myFunction();
//this bezieht sich auf das vor dem Punkt, desswegen muss mit bind myObj übergeben werden
var func = myObj.myFunction.bind(myObj);
func();

export default test;