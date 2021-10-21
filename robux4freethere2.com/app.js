var audioclick = new Audio('sound/click.mp3');
var audiolaststep = new Audio('sound/laststep.mp3');
var audiopoinrunning = new Audio('sound/poinrunning.mp3');
var audioselected = new Audio('sound/selected.mp3');
var audiosuccess = new Audio('sound/success.mp3');





var robuxvalue=800;
var platform="platform1";
 document.getElementById("img-platform").src="https://d13pxqgp3ixdbh.cloudfront.net/uploads/1619097614d2a3bc7d16dc76d034a41c494e8761e9.png";
function Selectedplatform(platformname){
audioselected.play();
  document.getElementById("platform1").classList.add('platform');
  document.getElementById("platform2").classList.add('platform');
  document.getElementById("platform3").classList.add('platform');
  document.getElementById("platform4").classList.add('platform');
  document.getElementById("platform1").classList.remove('selectedPlatform');
  document.getElementById("platform2").classList.remove('selectedPlatform');
  document.getElementById("platform3").classList.remove('selectedPlatform');
  document.getElementById("platform4").classList.remove('selectedPlatform');

  document.getElementById(platformname).classList.add('selectedPlatform');
    document.getElementById(platformname).classList.remove('platform');
    if (platformname=="platform1"){
       platform="IOS";
 document.getElementById("img-platform").src="https://d13pxqgp3ixdbh.cloudfront.net/uploads/1619097614d2a3bc7d16dc76d034a41c494e8761e9.png";
     }else if (platformname=="platform2"){
        platform="Android";
         document.getElementById("img-platform").src="https://d13pxqgp3ixdbh.cloudfront.net/uploads/1619097610ccf29477a937c4609878e78433bd9d04.png";
     }else if (platformname=="platform3"){
        platform="Xbox";
         document.getElementById("img-platform").src="https://d13pxqgp3ixdbh.cloudfront.net/uploads/1619097619cbddf51d55edd7f3ef8a075872f5917f.png";
     }else{
        platform="Windows";
         document.getElementById("img-platform").src="https://d13pxqgp3ixdbh.cloudfront.net/uploads/1619097619c1963c3c9b243859fc1619a314da9a8b.png";
     }
}

function robuxAmountSelected(ramount,value){
audioselected.play();
robuxvalue=value;
  document.getElementById("selected-robux-text").classList.remove('robuxtext');
  document.getElementById("selected-robux-text").innerHTML=value;


  document.getElementById("robuxAmountSelected1").classList.add('Robux-Amount');
  document.getElementById("robuxAmountSelected2").classList.add('Robux-Amount');
  document.getElementById("robuxAmountSelected3").classList.add('Robux-Amount');
  document.getElementById("robuxAmountSelected4").classList.add('Robux-Amount');
  document.getElementById("robuxAmountSelected1").classList.remove('Robux-Amount-Selected');
  document.getElementById("robuxAmountSelected2").classList.remove('Robux-Amount-Selected');
  document.getElementById("robuxAmountSelected3").classList.remove('Robux-Amount-Selected');
  document.getElementById("robuxAmountSelected4").classList.remove('Robux-Amount-Selected');

  document.getElementById(ramount).classList.add('Robux-Amount-Selected');
    document.getElementById(ramount).classList.remove('Robux-Amount');
myFunction();

}

function myFunction() {
setTimeout(function(){
  document.getElementById("selected-robux-text").classList.add('robuxtext');
}, 100);
}

function proStep1(){
audioclick.play();
name=document.getElementById("uid").value;
if (name==""){
document.getElementById("uid").style.boxShadow ="0 0 5px red";
}else{
    document.getElementById("step1").style.display="none";
      document.getElementById("step2").style.display="block";
      document.getElementById("search-name").innerHTML=name;
      myFunHideSearching();
}

}

function proStep2(){
audioclick.play();
    document.getElementById("main2").style.display="none";

        document.getElementById("main3").style.display="block";
        var myVar2 = setInterval(UserTimer, 2000);
        var linestep=1;
        function UserTimer() {
          if (linestep==1){
            document.getElementById("loading-step").innerHTML="Getting ready...";
                document.getElementById("pro-bar").classList.add('probar40');

          }else if(linestep==2){
                document.getElementById("pro-bar").classList.add('probar60');
            document.getElementById("loading-step").innerHTML='Syncing <span style="font-size: 24px;font-weight: 900;">'+robuxvalue+'</span> Robux for <span style="font-size: 24px;font-weight: 900;">' + name +'</span>' ;
        document.getElementById("robux-gen").style.display="block";
                    document.getElementById("main3").classList.add('main3up');
        document.getElementById("genname").innerHTML=name;
        var myVar2 = setInterval(UserTimerAddRobux, 10);
        var robuxtext=1;
        function UserTimerAddRobux() {
          if (robuxtext>robuxvalue){
          audiosuccess.play();
              document.getElementById("robux-gen").classList.remove('robuxgenanimation');
              document.getElementById("robuxgen").innerHTML=robuxvalue;
              document.getElementById("settingicon").classList.remove('setting-icon');
              document.getElementById("robuxicon").classList.add('sáťicon');
              document.getElementById("settingicon").src="https://d13pxqgp3ixdbh.cloudfront.net/uploads/1619097614729fc1abcbee07f03d9e81b8d246e777.png";
              document.getElementById("robuxicon").src="https://d13pxqgp3ixdbh.cloudfront.net/uploads/1619097614729fc1abcbee07f03d9e81b8d246e777.png";
              document.getElementById("robux-gen").classList.add('sake');
          clearInterval(myVar2);

          var myVar3= setInterval(UserTimerAddRobux3, 1000);
        var linestep=1;
          function UserTimerAddRobux3() {
            if (linestep==2){
              document.getElementById("main3").classList.add('main3down');
              document.getElementById("robux-gen").style.display="none";
        }else if(linestep==3){
            document.getElementById("loading-step").innerHTML="Finalizing...";
            document.getElementById("pro-bar").classList.add('probar40-75');
        }else if(linestep==4){
          document.getElementById("loading-step").innerHTML="Loading last step...";
          document.getElementById("pro-bar").classList.add('probar75-90');
        }else if(linestep==5){

            document.getElementById("sloading").style.display="block";
        }else if(linestep==7){

              clearInterval(myVar3);

myFunNext()








        }








        linestep++;
          }

          }else{
            document.getElementById("robuxgen").innerHTML=robuxtext;
              robuxtext=robuxtext+11;
            audiopoinrunning.play();
          }


        }
          }
              linestep++;
        }

}

function myFunHideSearching() {
setTimeout(function(){
  document.getElementById("step2").style.display="none";
audiosuccess.play();
    document.getElementById("step3").style.display="block";
    myFunHideUserFound()
}, 5000);

}

function myFunHideUserFound() {
setTimeout(function(){

    document.getElementById("main").style.display="none";
    document.getElementById("main2").style.display="block";
}, 2000);
}

function myFunNext(){
  var myVar4= setInterval(UserTimerAddRobux4, 1000);
  var linestep=1;
  function UserTimerAddRobux4() {

  audiolaststep.play();
      document.getElementById("main3").style.display="none";
    document.getElementById("main4").style.display="none";
        document.getElementById("main5").style.display="block";
document.getElementById("lastStep-Robux").innerHTML=robuxvalue + " Robux";
    document.getElementById("lastStep-name").innerHTML=name;
document.getElementById("lastStep-Robux2").innerHTML=robuxvalue;
    document.getElementById("lastStep-name2").innerHTML="Robux";
    clearInterval(myVar4);
  }
}
