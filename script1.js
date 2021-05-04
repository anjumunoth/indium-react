// var , let, const
// var -- 
// let --
// ES6  ECMA script ES
/* ES5 -- late 1990's
2015 -- ES6 - ES2015 -- major changes 
*/
//alert("Thank u for joining the session");
console.log("This is a session on react");
// weakly typed language
// type inference
var i;
i=10;// number
i=10.56;//number
i="hello";//string
i='g';//string
i=` This is a string 
in multiple lines`
i=true;//boolean
i=false;//boolean
var j;
console.log("Value of j : "+j);//undefined 

// array
var arr1=[10,20,30,40,50]
console.log(arr1)
arr1[0]=100;
console.log(arr1)
arr1.push(70);
console.log("Array after addition",arr1)
console.log("Array after addition"+arr1);//append

// remove an element 
// pop
var result=arr1.pop()
console.log("Popped out element"+result);//70
// splice 
arr1=[0,1,2,3,4,5,6,7];
var res=arr1.splice(2,2);//2 and 3 will be removed
console.log("Removed elements",res);//[2,3]
console.log("Array",arr1);//[0,1,4,5,6,7]
arr1=[0,1,2,3,4,5,6,7];
arr1.splice(3,1,40,50);//[0,1,2,40,50,4,5,6,7]

arr1=[0,1,2,3,4,5,6,7];
arr1.splice(4,0,33,44,55,66);
console.log("Array",arr1);//[0,1,2,3,33,44,55,66,4,5,6,7]

arr1=[0,1,2,3,4,5,6,7];
arr1.splice(10,0,33,44,55,66);
console.log("Array",arr1);//[0,1,2,3,4,5,6,7,33,44,55,66]

arr1=[0,1,2,3,4,5,6,7];
arr1.splice(4,4,33,44,55,66);
console.log("Array",arr1);//[0,1,2,3,33,44,55,66]
//splice(pos,deleteCount,insert1,insert2..)

// object -- data and functions which work on that data
//json javascript object notation

var obj={
    "empId":101,
    "empName":"sara",
    "salary":67.879
}

obj.empId=101
obj["empId"]=121
obj.deptId="D1";// add a new field

console.log("Obj",obj)

var obj2=obj;// reference
obj2.empId=555;
console.log("Obj",obj);//{"empId":555,"empName":"sara","salary":67.879,deptId:"D1"}
// copy in es5
var obj3=Object.assign({},obj)
obj3.empId=777;
console.log("Obj",obj);//{"empId":555,"empName":"sara","salary":67.879,deptId:"D1"}
console.log("Obj3",obj3);//{"empId":777,"empName":"sara","salary":67.879,deptId:"D1"}
// copy in es6 -- spread operator
var obj4={...obj}
obj4.empId=333;
console.log("Obj",obj);//{"empId":555,"empName":"sara","salary":67.879,deptId:"D1"}
console.log("Obj4",obj4);//{"empId":333,"empName":"sara","salary":67.879,deptId:"D1"}

var obj5={...obj,location:"Chennai"}
console.log("Obj5",obj);// add a new field called as location

obj={"empId":555,"empName":"sara","salary":67.879,deptId:"D1"};
var obj6={...obj,empId:1011}
console.log("Obj6",obj6);// {empId:1011,"empName":"sara","salary":67.879,deptId:"D1"}

obj={"empId":555,"empName":"sara","salary":67.879,deptId:"D1"};
var obj7={empId:888,...obj}
console.log("Obj7",obj7);// {empId:555,"empName":"sara","salary":67.879,deptId:"D1"}

// function

function myFunc1(p1,p2)
{
    console.log(p1+p2)
}

myFunc1(10,20);//30
myFunc1(10,"20");//"1020";
myFunc1("10",20);// "1020"
myFunc1(10,true);// 11
myFunc1("10","20");//"1020"

myFunc1();//NaN
myFunc1(10);// 10 + Ud=NaN
myFunc1(10,20,30);// 30
myFunc1(10,20,30,40,50);// 30


console.log(10+"10"+10);//"101010"
console.log(10+"10"+"10");//"101010"
console.log(10+"10"+10+ 10);//"10101010"; l to r"1010" +10= "101010"+10="10101010"
console.log(10+10+"10"+10);//"201010"

// anonymous function: function without a name
// f1== function literal ;; pointer to an anonymous function
var f1=function(p1,p2)
{
    return p1+p2
}
var res=f1(10,20)
console.log("Result"+res);//30
// 1 st use case of anonymous function
var obj={empId:101,
    empName:"sara",
    salary:768,
    printDetails:function ()
    {
        console.log("Emp id"+this.empId);
    }
}

obj.printDetails();//101
//obj."sara"="tara";
//obj.pd();// no
// 2nd use case : pass a function as a param to another function
function myFunc2(p1)
{
    p1();// HI
    //f2();//no scope
}

myFunc2(function (){console.log("HI")})

// rest parameters and default values
// p2 -- rest parameter ; array of the various values passed in the function call
function myFunc3(p1,...p2)
{
    var sum1=p1;
    for(var i=0;i<p2.length;i++)
    {
        sum1+=p2[i];
    }
    console.log("Sum "+sum1);
}

// java script -- doesnot support function overloading; function overwriting
myFunc3(10);//10
myFunc3(10,20,30);//p2=[20,30];//60
myFunc3(10,20,30,40,50,60);//210; p2=[20,30,40,50,60]


/* function myFunc4(...p1,...p2)
{
    var sum1=p1[0];
    for(var i=0;i<p2.length;i++)
    {
        sum1+=p2[i];
    }
    console.log("Sum "+sum1);
}
 */
// rest param should be the last param always
// there can be only one rest param
//myFunc4(10,20,30);//error -- 
// unreachable code error

// destructuring an array, object

var p1,p2=[10,20];
console.log(p1);//ud

var i1,j1=20;
console.log("I "+i1);//ud

var [p1,p2]=[10,20,30,40,50];
console.log(p1);//10
console.log(p2);//20

var [p1,,p2]=[10,20,30,40,50];
console.log(p1);//10
console.log(p2);//30

var [p1,,p2,,p3]=[10,20,30,40,50];
console.log(p1);//10
console.log(p2);//30
console.log(p3);//50


// destructuring an object
obj={empId:101,empName:"sara",salary:67}
var {empId,salary}=obj;//var empId=obj.empId;
console.log(empId);//101
console.log(salary);//67
salary=100
console.log(obj);//{empId:101,empName:"sara",salary:67}

// es6 array functions
// map 
var arr1=[10,20,30,40,50,60];
var resArr=arr1.map(function (item){
    return item *item
})
console.log(resArr);//[100,400,900,1600,2500,3600];
// resArr, arr1 -- size -- same
// map method has traversed thro the entire array 
//and executed the function with each element in the array

var arr1=[10,20,30,40,50,60];
var resArr=arr1.map(function (item){
    if(item >30)
        return item *item
})
console.log(resArr);
//[ud,ud,ud,1600,2500,3600]

// find ,filter
//array of objects
// list of dictionary --python

var empArr=[
    {empId:101,empName:"sara",salary:67},
    {empId:102,empName:"tara",salary:167},
    {empId:103,empName:"lara",salary:637},
    {empId:104,empName:"saurav",salary:167},
    {empId:105,empName:"priya",salary:670}]

    // create an array of empId's from empArr  -- use the map method
    var empIdArr=empArr.map(function(item){
        return item.empId;
    })
    // find -- first occurence of the object which satisfies the predicate function
    var result=empArr.find(function(item){
        if(item.salary == 167 )
            return true;
        else
            return false;
    })
    console.log("Result",result);//{empId:102,empName:"tara",salary:167}

    // filter -- all occurences of the objects which satisfies the predicate function
    var resultArr=empArr.filter(function(item){
        if(item.salary == 167 )
            return true;
        else
            return false;
    })
    console.log("Result",resultArr);

    var result=empArr.find(function(item){
        if(item.salary == 1670 )
            return true;
        else
            return false;
    })
    console.log("Result",result);//ud

    var resultArr=empArr.filter(function(item){
        if(item.salary == 1670 )
            return true;
        else
            return false;
    })
    console.log("Result",resultArr);//[]

    // findIndex  -- position 
    var pos=empArr.findIndex(function(item){
        if(item.salary == 670)
            return true;
        else
            return false;
    })
    console.log("Result",pos);//4

    var pos=empArr.findIndex(function(item){
        if(item.salary == 1670)
            return true;
        else
            return false;
    })
    console.log("Result",pos);// -1

    /* var pos=empArr.filterIndex(function(item){
        if(item.salary == 670)
            return true;
        else
            return false;
    })
    console.log("Result",pos);// 4,[4]
     */
    // there is no filterIndex method 

    // fat arrow function -- lambda function
    // anonymous function using the fat arrow function

    var f1=function(p1,p2)
    {
        console.log(p1+p2)
    }

    var f1=(p1,p2) => {console.log(p1+p2)}
    var f2= p1=>{return (p1+10)}
    var f3=()=>{return "Thank u"}
    var f4= p1=>p1+10

    var res=empArr.map(item=>item.empId);
    console.log(res);//array of empId

    var pos=empArr.findIndex(item => item.salary ==167)
    var employeeId=1234567
    var obj={
        employeeId:"E1",
        empName:"sara",
        printDetails:function()
        {
            console.log("hi")
            console.log(this.employeeId);// E1
        },
        pd:(p1)=>{
            console.log("hello")
            console.log(p1.employeeId);// 1234567
        }
    }
obj.printDetails();
obj.pd(obj);

// fat arrow function this --> lexical scope(parent scope)

//var,let,const
//var  -- functional scope; can be redeclared in the same scope
// let -- block scope; cannot be redeclared in the same scope
// const -- declare a const

var i=10;
var i=10;
let j2=20;
//let j2=20;



























