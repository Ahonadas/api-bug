var bgimage
function preload(){
  callAPI()
}
function setup() {
  createCanvas(1200,1200);
  //oddnumbers()
 // divisibleby5ver2()
  //extractlastdigit(45)
  //extractlastdigit(73)
  //extractlastdigit(86)
  //seperate2digits(91)
  //sumoflast2digits(736)
 // buzznumber(50)
 // adding2digits(73) 
 //age(70)
 //testarr()
 //displayelements()
 //diseven()
 //evenposi()

}
function draw() {
  if(bgimage)
  {
    console.log("hi")
  background(bgimage) 
}
  console.log("draw"+n)
}
function oddnumbers() {
  for(i=1;i<=50;i=i+2)
  {
    console.log(i)
  }
}
function divisibleby5() {
  for(i=0;i<=50;i=i+5)
  {
    console.log(i)
  }
}

function divisibleby5ver2(){
  for(i=0;i<=50;i=i+1){
    if(i%5==0){
      console.log(i)
    }
  }
}
function extractlastdigit(e){
   var ld = e%10
   console.log(ld)
}
function seperate2digits(s){
var sd = Math.trunc(s/10)
var td = s%10
console.log(sd,td)
}
function sumoflast2digits(l){
var sl = l%100
var ol = l%10
var ol =Math.trunc (l/1)
console.log(sl,ol)
}
function adding2digits(y){
var rem = y%10
var quo = Math.trunc(y/10)
var add = rem+quo
console.log(add)
}
function buzznumber(b){
  var div = b%7
  if(b%7==0||b%10==7)
  {console.log
    ("This number is a buzz number.")
  }else{
    console.log("This number is not a buzz number")
  }
}

function age (a){
if(a<=12){
  console.log("This person is a kid.")
}else if(a>=13&&a<=18){
  console.log("This person is a teenager.")
}else if(a>=19){
  console.log("This person is an adult.")
}
}
function testarr(){
  var array=["ahona",5.5, "45", 77]
  console.log(array)
  array.push(100)
  console.log(array)
  array.pop()
  console.log(array)
}

function displayelements(){
  var arr=["ahona das",55,"15",21,2.6]
  var i
  for(i=0;i<=4;i=i+1){
    console.log(i,arr[i])
  }
}
function diseven(){
  var array=[12,15,21,02,31,33,6]
  for(i=0;i<array.length;i=i+1){
    if (array[i]%2==0) {
      console.log(i,array[i])
    }
  
  }
}
function evenposi(){
  var ar=[-15,6,-17,-20,20,-8,9]
  for(i=0;i<ar.length;i=i+1){
    if (ar[i]%2==0&&ar[i]>0) {
      console.log(i,ar[i])
    }
   
}
}
async function callAPI(){
 var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
 var data = await responce.json()
 var time = data.datetime
 var hour = time.slice(11,13)
 if (hour>=6&&hour<=17) {
   bgimage = loadImage("bg.png")
 }
 else{
   console.log("bye")
   bgimage = loadImage("bg2.jpg")
 }
 console.log(hour)
}
