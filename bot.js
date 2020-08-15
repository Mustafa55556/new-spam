const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://spam13mmm.glitch.me/`);
}, 280000);
 const config = require("./config.json")
const Discord = require("discord.js");
const developers = ['562983335488520193'];
const myid = ['562983335488520193'];
const prefix = [''];
const cmd = require("node-cmd")
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client10 = new Discord.Client();
const client11 = new Discord.Client();
const client12 = new Discord.Client();
const client13 = new Discord.Client();
const client14 = new Discord.Client();
const client15 = new Discord.Client();
const client16 = new Discord.Client();
const client17 = new Discord.Client();
const client18 = new Discord.Client();
const client19 = new Discord.Client();
const client20 = new Discord.Client();


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.login("NzM3ODMzNjI3ODc4MDMxMzcw.XyDHNg.SNDMudT8hWfAFs5xCjGXAnV4W9Q");
client2.login("NzM3ODA2MzM1OTAyNzQ0NjE4.XyCwKw.ofBKuAKglDzeUwDqrOQFGT3LoJw");
client3.login("NzM3ODQ1NDE1NjgwMDE2NDM3.XyDWEg.sUvaplL4yV9p5dxB639G_XQbZz0");
client4.login("NzM3ODUwNTQ2MjUzNDYzNjA0.XyDW-A.xNPAc97vdqCx5CxNVa8LK-7cQYw");
client5.login("NzM3ODUxNDgxODY4MjA2MDgx.XyDX0w.lrhHdAdGx3hSzCDHcHcNpVG5Q0s");
client6.login("NzM3ODUxOTkyMDc2MTg5Nzg2.XyDYUw.11lQCEcKcSGhszzqgvQEsO2oGFg");
client7.login("NzM3ODUyNTI3MzM2MzU3OTk4.XyDY0g.UgPPyiyKtkKl8KU6533yS_QXhi4");
client8.login("NzM3ODUzMjUyMDQ5MzA1NjAx.XyDZfA.ewpQlmk8pcsfGYMVXq7nvYscrmE");
client9.login("NzM3ODUzNjQxMzgxMjQ5MTY3.XyDaAw.H-pDtfui1AepZi49CXux7VWDWdc");
client10.login("NzM4MDcxODUyODU3MDMyODQ1.XyG2WQ.qpafQTWRBOjZVcOZFdbTKIk4sFU");
client11.login("NzM4MDkwODM2ODEzOTM4Nzk3.XyG22g.ogBYAojBAlFn1nxDp-G4XmC7s5E");
client12.login("NzM4MDkxMzk4MjI5OTE3NzY4.XyG3XQ.96WL-m99plS0cbcq9RZ8qcEHxH0");
client13.login("NzM4MDkzMjA1NjM1MDcyMDkw.XyG4_g.7LYcw_4P88R6GjEzQrJobL1VmQY");
client14.login("NzM4MDkyNjAxNzYwMTUzNjM0.XyG4Zw.YFmXuebIpQpZ3yfNU0yLwCDnnoA");
client15.login("NzM4MDk0MTYxNTYyOTU5OTQ0.XyG55Q.6NynUpt1aqUna5IabLobDcQrXxg");
client16.login("NzM4MDk0NzU3OTQyOTE5MjIx.XyG6aA.JCsgPAnJM1VAlA7dsfv8Ip4MerE");
client17.login("NzM4MDk1MTY4MjQyMzE5Mzky.XyG69A.21nBoXansT9QGSHIiXfzgro94Nw");
client18.login("NzM4MDk1ODA4ODMzOTEyOTA1.XyG78w.sEK5z8vvVMT_QCChI6hjhIhwbX8");
client19.login("NzM4MDk2NzU5Njg3MDg2MDkx.XyG8fg.cTxYXhLaTstX4GEKKfiQQT9awp4");
client20.login("NzM4MDk3OTIwNDY0OTEyNDg3.XyG9Xw.e5KVrAGEGp6egdpqUdJVO2RkD-M");

client.on('message', message => {
  if (message.content === prefix+'d1') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c1'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p1') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r1'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s1')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client2.on('message', message => {
  if (message.content === prefix+'d2') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c2'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p2') {
message.channel.send('#profile')
  }
   if(message.content === prefix+'r2'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s2')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client3.on('message', message => {
  if (message.content === prefix+'d3') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c3'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p3') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r3'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s3')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client4.on('message', message => {
  if (message.content === prefix+'d4') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c4'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p4') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r4'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s4')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client5.on('message', message => {
  if (message.content === prefix+'d5') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c5'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p5') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r5'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s5')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
  if (message.content === prefix+'d6') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c6'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p6') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r6'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s6')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client7.on('message', message => {
  if (message.content === prefix+'d7') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c7'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p7') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r7'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s7')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client8.on('message', message => {
  if (message.content === prefix+'d8') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c8'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p8') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r8'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s8')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client9.on('message', message => {
  if (message.content === prefix+'d9') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c9'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p9') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r9'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s9')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client10.on('message', message => {
  if (message.content === prefix+'d10') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c10'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p10') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r10'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s10')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client11.on('message', message => {
  if (message.content === prefix+'d11') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c11'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p11') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r11'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s11')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client12.on('message', message => {
  if (message.content === prefix+'d12') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c12'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p12') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r12'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s12')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client13.on('message', message => {
  if (message.content === prefix+'d13') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c13'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p13') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r13'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s13')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client14.on('message', message => {
  if (message.content === prefix+'d14') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c14'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p14') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r14'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s14')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client15.on('message', message => {
  if (message.content === prefix+'d15') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c15'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p15') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r15'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s15')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client16.on('message', message => {
  if (message.content === prefix+'d16') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c16'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p16') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r16'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s16')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client17.on('message', message => {
  if (message.content === prefix+'d17') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c17'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p17') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r17'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s17')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client18.on('message', message => {
  if (message.content === prefix+'d18') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c18'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p18') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r18'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s18')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client19.on('message', message => {
  if (message.content === prefix+'d19') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c19'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p19') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r19'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s19')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client20.on('message', message => {
  if (message.content === prefix+'d20') {
message.channel.send('#daily')
  }
  if(message.content === prefix+'c20'){
message.channel.send('#credits')
  }
  if (message.content === prefix+'p20') {
message.channel.send('#profile')
  }
  if(message.content === prefix+'r20'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if(message.content.startsWith(prefix+'s20')) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ

client.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuV西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维نبمسطبمةسشvWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client2.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxY西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ضصثقفغعهخحدكشسيبلاتنمكطئءؤرلاىyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client3.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSs西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维يبغقثصصؤرلاىىةةزممتغTtUuVvWwXxYyZz012يسقي3456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client4.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOo西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ثضصقفغعخخPpQqRrSsTtUuVvWwXxشسيبلااتتمكYyZz01234ءؤؤءوةزظزورذ56789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client5.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlM西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ضصثقفغعهخحجدmNnOoPpQqRrSشسيبلاتتنمكط\sTtUuVvWwئءؤرلاىىةوزظXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client6.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhضصثققفغعههخحجدIiJjKkLlMmNnOoPpشسيبلاتنمكط\西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维QqRrSsTtUuVvئءؤرلاىةوزظWwXxYyZz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client7.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoP西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ززةلارؤءءبانخجحعقثسpQqRrSsTtUuVنبمسطبمةسشvWwXxYyZz01234شيي56789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client8.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHئء西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ؤرلاىةوزظhIiJjKkLlMmNnOoPpQqRrSsTtUuVنبمسطبمةسشvWwXxYy÷أأ[]]×/÷‘لإ]Zz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client9.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHئء西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ؤرلاىةوزظhIiJjKkLlMmNnOoPpQqRrSsTtUuVنبمسطبمةسشvWwXxYy÷أأ[]]×/÷‘لإ]Zz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client10.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHئء西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ؤرلاىةوزظhIiJjKkLlMmNnOoPpQqRrSsTtUuVنبمسطبمةسشvWwXxYy÷أأ[]]×/÷‘لإ]Zz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client11.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHئء西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ؤرلاىةوزظhIiJjKkLlMmNnOoPpQqRrSsTtUuVنبمسطبمةسشvWwXxYy÷أأ[]]×/÷‘لإ]Zz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client12.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHئء西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ؤرلاىةوزظhIiJjKkLlMmNnOoPpQqRrSsTtUuVنبمسطبمةسشvWwXxYy÷أأ[]]×/÷‘لإ]Zz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client13.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHئء西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ؤرلاىةوزظhIiJjKkLlMmNnOoPpQqRrSsTtUuVنبمسطبمةسشvWwXxYy÷أأ[]]×/÷‘لإ]Zz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client14.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHئء西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ؤرلاىةوزظhIiJjKkLlMmNnOoPpQqRrSsTtUuVنبمسطبمةسشvWwXxYy÷أأ[]]×/÷‘لإ]Zz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client15.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHئء西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ؤرلاىةوزظhIiJjKkLlMmNnOoPpQqRrSsTtUuVنبمسطبمةسشvWwXxYy÷أأ[]]×/÷‘لإ]Zz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client16.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHئء西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ؤرلاىةوزظhIiJjKkLlMmNnOoPpQqRrSsTtUuVنبمسطبمةسشvWwXxYy÷أأ[]]×/÷‘لإ]Zz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client17.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHئء西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ؤرلاىةوزظhIiJjKkLlMmNnOoPpQqRrSsTtUuVنبمسطبمةسشvWwXxYy÷أأ[]]×/÷‘لإ]Zz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client18.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHئء西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ؤرلاىةوزظhIiJjKkLlMmNnOoPpQqRrSsTtUuVنبمسطبمةسشvWwXxYy÷أأ[]]×/÷‘لإ]Zz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client19.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHئء西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ؤرلاىةوزظhIiJjKkLlMmNnOoPpQqRrSsTtUuVنبمسطبمةسشvWwXxYy÷أأ[]]×/÷‘لإ]Zz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});

client20.on('message', message => {
if (message.content === prefix+'slow') {
        let letters = "AaBbCcDdEeFfGgHئء西字体舊字體 迪伊艾弗艾尺艾杰艾勒开哦吉吾艾儿豆贝尔维豆贝尔维贼德艾克斯豆贝尔维ؤرلاىةوزظhIiJjKkLlMmNnOoPpQqRrSsTtUuVنبمسطبمةسشvWwXxYy÷أأ[]]×/÷‘لإ]Zz0123456789".split("");
        let spaces = " ".repeat(10);
        let last = "";
        let messages = 0;
 
        setInterval(() => {
            let str = "";
            let num = Math.floor(Math.random() * 10);
            for(let i = 0; i < num; i++) {
                str += letters[Math.floor(Math.random() * letters.length)];
 
                if(i === num - 1) {
                    if(last === "") {
                        messages += 1;
                        last = `${str} ${spaces.slice(str.length + 1)}`;
                        return message.channel.send(`${str} ${spaces.slice(str.length + 1)}${messages}`);
                    } else {
                        messages += 1;
                        let spaced = `${str} ${spaces.slice(str.length + 1)}${messages}`;
                        last = spaced;
                        return message.channel.send(spaced);
                    }
                }
            }
        }, 40000);
}
});


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ





//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//POULAZ


client.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``1`` ")
    }
});

client2.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``2`` ")
    }
});

client3.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``3`` ")
    }
});

client4.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``4`` ")
    }
});

client5.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``5`` ")
    }
});

client6.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``6`` ")
    }
});

client7.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``7`` ")
    }
});

client8.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``8`` ")
    }
});

client9.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``9`` ")
    }
});

client10.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``10`` ")
    }
});

client11.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``11`` ")
    }
});

client12.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``12`` ")
    }
});

client13.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``13`` ")
    }
});

client14.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``14`` ")
    }
});

client15.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``15`` ")
    }
});

client16.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``16`` ")
    }
});

client17.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``17`` ")
    }
});

client18.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``18`` ")
    }
});

client19.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``19`` ")
    }
});

client20.on('message', message => {
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``20`` ")
    }
});

// ==== [مهم جدااا ] ==== //
const KahDEV = require("request");
const invitecode = config.invite 
client.on("ready", () => { console.log(`[BOT] ${client.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN } })}) 
}, 1000)

client2.on("ready", () => { console.log(`[BOT] ${client2.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN2 } })}) 
}, 2000)

client3.on("ready", () => { console.log(`[BOT] ${client3.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN3 } })}) 
}, 3000)

client4.on("ready", () => { console.log(`[BOT] ${client4.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN4 } })}) 
}, 4000)

client5.on("ready", () => { console.log(`[BOT] ${client5.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN5 } })}) 
}, 5000)

client6.on("ready", () => { console.log(`[BOT] ${client6.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN6 } })}) 
}, 6000)

client7.on("ready", () => { console.log(`[BOT] ${client7.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN7 } })}) 
}, 7000)

client8.on("ready", () => { console.log(`[BOT] ${client8.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN8 } })}) 
}, 8000)

client9.on("ready", () => { console.log(`[BOT] ${client9.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN9 } })}) 
}, 9000)

client10.on("ready", () => { console.log(`[BOT] ${client10.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN10 } })}) 
}, 10000)

client11.on("ready", () => { console.log(`[BOT] ${client11.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN11 } })}) 
}, 11000)

client12.on("ready", () => { console.log(`[BOT] ${client12.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN12 } })}) 
}, 12000)

client13.on("ready", () => { console.log(`[BOT] ${client13.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN13 } })}) 
}, 13000)

client14.on("ready", () => { console.log(`[BOT] ${client14.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN14 } })}) 
}, 14000)

client15.on("ready", () => { console.log(`[BOT] ${client15.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN15 } })}) 
}, 15000)

client16.on("ready", () => { console.log(`[BOT] ${client16.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN16 } })}) 
}, 16000)

client17.on("ready", () => { console.log(`[BOT] ${client17.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN17 } })}) 
}, 17000)

client18.on("ready", () => { console.log(`[BOT] ${client18.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN18 } })}) 
}, 18000)

client19.on("ready", () => { console.log(`[BOT] ${client19.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN19 } })}) 
}, 19000)

client20.on("ready", () => { console.log(`[BOT] ${client20.user.username} Ready!`); 
setTimeout(async function (){
KahDEV({ method: "POST", url: "https://discordapp.com/api/v6/invite/" + invitecode, headers: { authorization: process.env.KahTOKEN20 } })}) 
}, 20000)
// DONE //
// ======= [ Console LOG - END   ] ======== //


// ======= [ Say MODE  ] ======== //
client.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"1") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client2.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"2") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client3.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"3") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client4.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"4") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client5.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"5") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client6.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"6") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client7.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"7") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client8.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"8") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client9.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"9") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client10.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"10") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client11.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"11") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client12.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"12") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client13.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"13") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client14.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"14") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client15.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"15") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client16.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"16") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client17.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"17") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client18.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"18") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client19.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"19") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});
client20.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);


  
if (command == config.groupnm +"20") {
if (!config.kahrbaaid.includes(message.author.id)) return; 
  message.channel.send(args.join("  "))
    message.delete();
  }
});

