//set server side cookies
document.getElementById("myImg").src = "https://us-central1-homework-4-f09d0.cloudfunctions.net/sessionize";
console.log("cookies set. database info logged.");
let arr = []; 

/*check is css is on*/
var cssenabled = true; // must be proven otherwise
var testcss = document.createElement('div');
testcss.style.position = 'absolute';
document.getElementsByTagName('body')[0].appendChild(testcss);
if (testcss.currentStyle) var currstyle = testcss.currentStyle['position'];
else if (window.getComputedStyle) var currstyle = document.defaultView.getComputedStyle(testcss, null).getPropertyValue('position');
var cssenabled = (currstyle == 'static') ? false : true;
document.getElementsByTagName('body')[0].removeChild(testcss);

//STATIC DATA
let staticObj = {
    cookies: String(navigator.cookieEnabled),
    useragent: String(navigator.userAgent),
    userLanguage: String(navigator.language),
    JavaEnabled: String(navigator.javaEnabled()),
    CSSEnabled: String(cssenabled)
}

let dims = {
    AvailableScreenWidth: String(window.screen.availWidth),
    AvailableScreenHeight: String(window.screen.availHeight),
    ScreenWidth: String(window.innerWidth),
    ScreenHeight: String(window.innerHeight),
    EffectiveConnectionType: String(navigator.connection.effectiveType)
}

var t = performance.timing;
let firstPerf = {
    loadend: String(t.loadEventEnd),
    loadstart: String(t.loadEventStart),
    ResponseEnd: String(t.responseEnd),
}
let secondPerf = {
    StartedProcessing: String(t.domLoading),
    NavigationStart: String(t.navigationStart),
    TotalTimeTook: String((t.loadEventEnd- t.navigationStart) + " milliseconds")
}

arr.push(staticObj);
arr.push(dims);
arr.push(firstPerf);
arr.push(secondPerf);


// Will execute sendToFirestore every 10 seconds 
var intervalID = window.setInterval(sendToFirestore, 20000);

// //send to database every couple seconds
function sendToFirestore() {
    let obj = JSON.stringify(arr);
    alert("SENDING TO FIRESTORE");
    console.log("sending to firestore");
    navigator.sendBeacon('https://us-central1-homework-4-f09d0.cloudfunctions.net/collect', 
    obj);
    arr = [];
}

///RECORD THE DYNAMIC DATA DOWN HERE

/*DYNAMIC INFORMATION COLLECTION*/
/*to detect idle time*/
var last, diff, uniquedata;

function logClick(e) {
    if(last) {
        diff = event.timeStamp - last;

        if(diff > 1999) { /*log the idle time*/
            let newObj = {
                "Idle Time": diff,
            }
            arr.push(newObj);
        }
    }

    let newObj = {
        type: e.type,
        x: e.clientX,
        y: e.clientY,
        but: e.button
    }
    arr.push(newObj);
    last = event.timeStamp; //time of last event
}

function logKey(e) {
    if(last) {
        diff = event.timeStamp - last;

        if(diff > 1999) { /*log the idle time*/
            let newObj = {
                "Idle Time": diff,
            }
            arr.push(newObj);
        }
    }

    let newObj = {
        type : e.type,
        keycode : String.fromCharCode(e.keyCode)
    }
    arr.push(newObj);
    last = event.timeStamp; //time of last event
}

function logMouse(e) {
    if(last) {
        diff = event.timeStamp - last;

        if(diff > 1999) { /*log the idle time*/
            let newObj = {
                "Idle Time": diff,
            }
            arr.push(newObj);

        }
    }

    let newObj = {
        type : e.type,
        x : e.clientX,
        y : e.clientY
    }

    last = event.timeStamp; //time of last event
    arr.push(newObj);
}


function logScroll(e) {
    if(last) {
        diff = event.timeStamp - last;

        if(diff > 1999) { /*log the idle time*/
            let newObj = {
                "Idle Time": diff,
            }
            arr.push(newObj);
        }
    }

    let newObj = {
        type : e.type,
        xoff : window.pageXOffset,
        yoff : window.pageYOffset,
        y : window.scrollY
    }
    arr.push(newObj);
    last = event.timeStamp; //time of last event
}

function logUnload(e) {
    if(last) {
        diff = event.timeStamp - last;

        if(diff > 1999) { /*log the idle time*/
            let newObj = {
                "Idle Time": diff,
            }    
            arr.push(newObj);
        }
    }

    let newObj = {
        type : e.type,
        last : event.timeStamp //time of last event
    }
    arr.push(newObj);
    last = event.timeStamp; //time of last event
}

/*events you will listen for*/
window.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', logClick, false);
    document.addEventListener('keypress', logKey, false);
    document.addEventListener('keyup', logKey, false);
    document.addEventListener('mousemove', logMouse, false);
    window.addEventListener('scroll', logScroll, false);
    window.addEventListener('beforeunload',logUnload, false);
    document.addEventListener('mouseover', logMouse, false);
	document.addEventListener('mousemove', logMouse, false);
	document.addEventListener('mouseout', logMouse, false);
});

//send info one last time before unload
window.onunload = function() {
    this.sendToFirestore();
    this.console.log("unloading, sending to firestore.");
}