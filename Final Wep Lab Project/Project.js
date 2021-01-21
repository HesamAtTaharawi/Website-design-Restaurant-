function A() {
    document.getElementById("f4").setAttribute("style","display:none;");
    document.getElementById("f5").setAttribute("style","display:none;");
    document.getElementById("f6").setAttribute("style","display:none;");
    document.getElementById("f7").setAttribute("style","display:none;");
    document.getElementById("f8").setAttribute("style","display:none;");
    document.getElementById("f9").setAttribute("style","display:none;");
    document.getElementById("f1").setAttribute("style","display:block;");
    document.getElementById("f2").setAttribute("style","display:block;");
    document.getElementById("f3").setAttribute("style","display:block;");
    document.getElementById("b2").setAttribute("style","border-bottom-color: black; border-width: 3px; color:black;");
    document.getElementById("b3").setAttribute("style","border-bottom-color: black; border-width: 3px; color:black;");
    document.getElementById("b1").setAttribute("style","border-bottom-color: #821517;border-width: 5px;color: #821517;");
}

function A1() {
    document.getElementById("f1").setAttribute("style","display:none;");
    document.getElementById("f2").setAttribute("style","display:none;");
    document.getElementById("f3").setAttribute("style","display:none;");
    document.getElementById("f7").setAttribute("style","display:none;");
    document.getElementById("f8").setAttribute("style","display:none;");
    document.getElementById("f9").setAttribute("style","display:none;");
    document.getElementById("f4").setAttribute("style","display:block;");
    document.getElementById("f5").setAttribute("style","display:block;");
    document.getElementById("f6").setAttribute("style","display:block;");
    document.getElementById("b1").setAttribute("style","border-bottom-color: black; border-width: 3px; color:black;");
    document.getElementById("b3").setAttribute("style","border-bottom-color: black; border-width: 3px; color:black;");
    document.getElementById("b2").setAttribute("style","border-bottom-color: #821517;border-width: 5px;color: #821517;");

}

function A2() {
    document.getElementById("f1").setAttribute("style","display:none;");
    document.getElementById("f2").setAttribute("style","display:none;");
    document.getElementById("f3").setAttribute("style","display:none;");
    document.getElementById("f4").setAttribute("style","display:none;");
    document.getElementById("f5").setAttribute("style","display:none;");
    document.getElementById("f6").setAttribute("style","display:none;");
    document.getElementById("f7").setAttribute("style","display:block;");
    document.getElementById("f8").setAttribute("style","display:block;");
    document.getElementById("f9").setAttribute("style","display:block;");
    document.getElementById("b1").setAttribute("style","border-bottom-color: black; border-width: 3px; color:black;");
    document.getElementById("b2").setAttribute("style","border-bottom-color: black; border-width: 3px; color:black;");
    document.getElementById("b3").setAttribute("style","border-bottom-color: #821517;border-width: 5px;color: #821517;");

}

function f3(){
    if(document.getElementById("r").value==""){
    document.getElementById("ff").setAttribute("style"," display: block;color:red;")
    }else{
    document.getElementById("ff").setAttribute("style"," display: none;")
    }
}
function f4(){

if(document.getElementById("d1").value==""){
    document.getElementById("h1").setAttribute("style"," display: block;color:red;");
}else{
document.getElementById("h1").setAttribute("style"," display: none;");
}
if(document.getElementById("d2").value==""){
document.getElementById("h2").setAttribute("style"," display: block;color:red;");
}else{
document.getElementById("h2").setAttribute("style"," display: none;");
}
if(document.getElementById("d3").value==""){
document.getElementById("h3").setAttribute("style"," display: block;color:red;");
}else{
document.getElementById("h3").setAttribute("style"," display: none;");
}
if(document.getElementById("d1").value!=""&&document.getElementById("d2").value!=""&&document.getElementById("d3").value!=""){
      
   var n=confirm("هل أنت متأكد من أرسال الرسالة؟");
   if(n==true){
       alert("تم أرسال الرسالة");
   }else{
       alert("تم ألغاء الرسالة");
   }
}
}