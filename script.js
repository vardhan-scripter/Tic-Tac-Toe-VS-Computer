var s = 0;
var t = 1;
var start = 1;
var circles = [0];
var squares = [0];
var won=0;
var player1 = "";
function starting() {
    player1 = document.getElementById('name').value;
    if (player1) {
        document.getElementById('player1').innerHTML = player1;
        document.getElementById('scorecard').style.display = 'none';
        document.getElementById('container').style.display = 'block';
        document.getElementById('head').innerHTML = "Please start Your Game " + player1;
        tictactoe();
    }
}
function tictactoe() {
    var can = document.getElementById('mycanvas');
    var ctx = can.getContext('2d');
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 300);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 300);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 100);
    ctx.lineTo(300, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, 200);
    ctx.lineTo(300, 200);
    ctx.stroke();
}
function circle(p, q, r) {
    if (s == 0 && start == 1) {
        var can = document.getElementById('mycanvas');
        var ctx = can.getContext('2d');
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(p, q, 30, 0, 2 * Math.PI);
        ctx.strokeStyle = "lightgreen";
        ctx.stroke();
        t = 0;
        s = 1;
        start = 0;
        circles.push(r);
        produce();
        forcirclesonly(circles);
        check();
        document.getElementById('circle' + r).style.display = "none";
        if(!won){
        document.getElementById('head').innerHTML = "Now Computer Turn";
    }
    }
}
function square(p, q, r) {
    if (t == 0 && start == 0) {
        var can = document.getElementById('mycanvas');
        var ctx = can.getContext('2d');
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(p, q);
        ctx.lineTo(p + 60, q + 60);
        ctx.strokeStyle = "skyblue";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(p + 60, q);
        ctx.lineTo(p, q + 60);
        ctx.stroke();
        s = 0;
        t = 1;
        start = 1;
        squares.push(r);
        console.log(squares);
        check();
        forsquaresonly(squares);
        document.getElementById('circle' + r).style.display = "none";
        if(!won){
        document.getElementById('head').innerHTML = "Now " + player1 + " Turn";
    }
    }
}
function check() {
    if ((circles.includes(1) || squares.includes(1)) && (circles.includes(2) || squares.includes(2)) && (circles.includes(3) || squares.includes(3)) && (circles.includes(4) || squares.includes(4)) && (circles.includes(5) || squares.includes(5)) && (circles.includes(6) || squares.includes(6)) && (circles.includes(7) || squares.includes(7)) && (circles.includes(8) || squares.includes(8)) && (circles.includes(9) || squares.includes(9))) {
        setTimeout(function() {
            document.getElementById('mycanvas').style.display = 'none'
            document.getElementById('newcanvas').style.display = 'block';
            var can = document.getElementById('newcanvas');
            var ctx = can.getContext('2d');
            ctx.lineWidth = 30;
            ctx.beginPath();
            ctx.moveTo(50, 50);
            ctx.lineTo(250, 250);
            ctx.strokeStyle = "skyblue";
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(250, 50);
            ctx.lineTo(50, 250);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(150, 150, 100, 0, 2 * Math.PI);
            ctx.strokeStyle = "lightgreen";
            ctx.stroke();
            if (!won) {
            document.getElementById('head').innerHTML = "Match Drawn";
        }
        }, 1000);
    }
}
function forcirclesonly(a) {
    if (a.length >= 4 && ((a.includes(1) && a.includes(2) && a.includes(3)) || (a.includes(4) && a.includes(5) && a.includes(6)) || (a.includes(7) && a.includes(8) && a.includes(9)) || (a.includes(1) && a.includes(4) && a.includes(7)) || (a.includes(2) && a.includes(5) && a.includes(8)) || (a.includes(3) && a.includes(6) && a.includes(9)) || (a.includes(1) && a.includes(5) && a.includes(9)) || (a.includes(3) && a.includes(5) && a.includes(7)))) {
        document.getElementById('head').innerHTML = player1 + " Won The Game";
        for (var i = 1; i < 10; i++) {
            document.getElementById('circle' + i).style.display = "none";
        }
        won=1;
        circledrawer(a);
    }
}
function forsquaresonly(a) {
    if (a.length >= 4 && ((a.includes(1) && a.includes(2) && a.includes(3)) || (a.includes(4) && a.includes(5) && a.includes(6)) || (a.includes(7) && a.includes(8) && a.includes(9)) || (a.includes(1) && a.includes(4) && a.includes(7)) || (a.includes(2) && a.includes(5) && a.includes(8)) || (a.includes(3) && a.includes(6) && a.includes(9)) || (a.includes(1) && a.includes(5) && a.includes(9)) || (a.includes(3) && a.includes(5) && a.includes(7)))) {
        document.getElementById('head').innerHTML = "Computer Won The Game";
        for (var i = 1; i < 10; i++) {
            document.getElementById('circle' + i).style.display = "none";
        }
        won=1;
        squaredrawer(a);
    }
}
function circledrawer(a) {
    var can = document.getElementById('mycanvas');
    var ctx = can.getContext('2d');
    ctx.lineWidth = 10;
    ctx.strokeStyle = "lightgreen";
    if (a.includes(1) && a.includes(2) && a.includes(3)) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(250, 50);
        ctx.stroke();
    } else if (a.includes(4) && a.includes(5) && a.includes(6)) {
        ctx.beginPath();
        ctx.moveTo(50, 150);
        ctx.lineTo(250, 150);
        ctx.stroke();
    } else if (a.includes(7) && a.includes(8) && a.includes(9)) {
        ctx.beginPath();
        ctx.moveTo(50, 250);
        ctx.lineTo(250, 250);
        ctx.stroke();
    } else if (a.includes(1) && a.includes(4) && a.includes(7)) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(50, 250);
        ctx.stroke();
    } else if (a.includes(2) && a.includes(5) && a.includes(8)) {
        ctx.beginPath();
        ctx.moveTo(150, 50);
        ctx.lineTo(150, 250);
        ctx.stroke();
    } else if (a.includes(3) && a.includes(6) && a.includes(9)) {
        ctx.beginPath();
        ctx.moveTo(250, 50);
        ctx.lineTo(250, 250);
        ctx.stroke();
    } else if (a.includes(1) && a.includes(5) && a.includes(9)) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(250, 250);
        ctx.stroke();
    } else if (a.includes(3) && a.includes(5) && a.includes(7)) {
        ctx.beginPath();
        ctx.moveTo(250, 50);
        ctx.lineTo(50, 250);
        ctx.stroke();
    }
    setTimeout(function() {
        var element = document.getElementById("mycanvas");
        element.parentNode.removeChild(element);
        var para = document.createElement("canvas");
        para.setAttribute('id', 'newcanvas');
        para.setAttribute('style', 'position: absolute;top: 30%;left: 40%;');
        para.setAttribute('width', '300');
        para.setAttribute('height', '300');
        var element = document.getElementById("body");
        element.appendChild(para);
        var can = document.getElementById('newcanvas');
        var ctx = can.getContext('2d');
        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.arc(150, 150, 100, 0, 2 * Math.PI);
        ctx.strokeStyle = "lightgreen";
        ctx.stroke();
    }, 1000);
}
function squaredrawer(a) {
    var can = document.getElementById('mycanvas');
    var ctx = can.getContext('2d');
    ctx.lineWidth = 10;
    ctx.strokeStyle = "skyblue";
    if (a.includes(1) && a.includes(2) && a.includes(3)) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(250, 50);
        ctx.stroke();
    } else if (a.includes(4) && a.includes(5) && a.includes(6)) {
        ctx.beginPath();
        ctx.moveTo(50, 150);
        ctx.lineTo(250, 150);
        ctx.stroke();
    } else if (a.includes(7) && a.includes(8) && a.includes(9)) {
        ctx.beginPath();
        ctx.moveTo(50, 250);
        ctx.lineTo(250, 250);
        ctx.stroke();
    } else if (a.includes(1) && a.includes(4) && a.includes(7)) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(50, 250);
        ctx.stroke();
    } else if (a.includes(2) && a.includes(5) && a.includes(8)) {
        ctx.beginPath();
        ctx.moveTo(150, 50);
        ctx.lineTo(150, 250);
        ctx.stroke();
    } else if (a.includes(3) && a.includes(6) && a.includes(9)) {
        ctx.beginPath();
        ctx.moveTo(250, 50);
        ctx.lineTo(250, 250);
        ctx.stroke();
    } else if (a.includes(1) && a.includes(5) && a.includes(9)) {
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(250, 250);
        ctx.stroke();
    } else if (a.includes(3) && a.includes(5) && a.includes(7)) {
        ctx.beginPath();
        ctx.moveTo(250, 50);
        ctx.lineTo(50, 250);
        ctx.stroke();
    }
    setTimeout(function() {
        var element = document.getElementById("mycanvas");
        element.parentNode.removeChild(element);
        var para = document.createElement("canvas");
        para.setAttribute('id', 'newcanvas');
        para.setAttribute('style', 'position: absolute;top: 30%;left: 40%;');
        para.setAttribute('width', '300');
        para.setAttribute('height', '300');
        var element = document.getElementById("body");
        element.appendChild(para);
        var can = document.getElementById('newcanvas');
        var ctx = can.getContext('2d');
        ctx.lineWidth = 30;
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(250, 250);
        ctx.strokeStyle = "skyblue";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(250, 50);
        ctx.lineTo(50, 250);
        ctx.stroke();
    }, 1000);
}
function produce() {
    if ((circles.includes(1) && circles.includes(2) && !circles.includes(3) && !squares.includes(3)) || (squares.includes(1) && squares.includes(2) && !squares.includes(3) && !circles.includes(3))) {
        square(220, 20, 3);
    } else if ((circles.includes(1) && !circles.includes(2) && circles.includes(3) && !squares.includes(2)) || (squares.includes(1) && !squares.includes(2) && squares.includes(3) && !circles.includes(2))) {
        square(120, 20, 2);
    } else if ((!circles.includes(1) && circles.includes(2) && circles.includes(3) && !squares.includes(1)) || (!squares.includes(1) && squares.includes(2) && squares.includes(3) && !circles.includes(1))) {
        square(20, 20, 1);
    } else if ((circles.includes(4) && circles.includes(5) && !circles.includes(6) && !squares.includes(6)) || (squares.includes(4) && squares.includes(5) && !squares.includes(6) && !circles.includes(6))) {
        square(220, 120, 6);
    } else if ((circles.includes(4) && !circles.includes(5) && circles.includes(6) && !squares.includes(5)) || (squares.includes(4) && !squares.includes(5) && squares.includes(6) && !circles.includes(5))) {
        square(120, 120, 5);
    } else if ((!circles.includes(4) && circles.includes(5) && circles.includes(6) && !squares.includes(4)) || (!squares.includes(4) && squares.includes(5) && squares.includes(6) && !circles.includes(4))) {
        square(20, 120, 4);
    } else if ((circles.includes(7) && circles.includes(8) && !circles.includes(9) && !squares.includes(9)) || (squares.includes(7) && squares.includes(8) && !squares.includes(9) && !circles.includes(9))) {
        square(220, 220, 9);
    } else if ((circles.includes(7) && !circles.includes(8) && circles.includes(9) && !squares.includes(8)) || (squares.includes(7) && !squares.includes(8) && squares.includes(9) && !circles.includes(8))) {
        square(120, 220, 8);
    } else if ((!circles.includes(7) && circles.includes(8) && circles.includes(9) && !squares.includes(7)) || (!squares.includes(7) && squares.includes(8) && squares.includes(9) && !circles.includes(7))) {
        square(20, 220, 7);
    } else if ((circles.includes(1) && circles.includes(4) && !circles.includes(7) && !squares.includes(7)) || (squares.includes(1) && squares.includes(4) && !squares.includes(7) && !circles.includes(7))) {
        square(20, 220, 7);
    } else if ((circles.includes(1) && !circles.includes(4) && circles.includes(7) && !squares.includes(4)) || (squares.includes(1) && !squares.includes(4) && squares.includes(7) && !circles.includes(4))) {
        square(20, 120, 4);
    } else if ((!circles.includes(1) && circles.includes(4) && circles.includes(7) && !squares.includes(1)) || (!squares.includes(1) && squares.includes(4) && squares.includes(7) && !circles.includes(1))) {
        square(20, 20, 1);
    } else if ((circles.includes(2) && circles.includes(5) && !circles.includes(8) && !squares.includes(8)) || (squares.includes(2) && squares.includes(5) && !squares.includes(8) && !circles.includes(8))) {
        square(120, 220, 8);
    } else if ((circles.includes(2) && !circles.includes(5) && circles.includes(8) && !squares.includes(5)) || (squares.includes(2) && !squares.includes(5) && squares.includes(8) && !circles.includes(5))) {
        square(120, 120, 5);
    } else if ((!circles.includes(2) && circles.includes(5) && circles.includes(8) && !squares.includes(2)) || (!squares.includes(2) && squares.includes(5) && squares.includes(8) && !circles.includes(2))) {
        square(120, 20, 2);
    } else if ((circles.includes(3) && circles.includes(6) && !circles.includes(9) && !squares.includes(9)) || (squares.includes(3) && squares.includes(6) && !squares.includes(9) && !circles.includes(9))) {
        square(220, 220, 9);
    } else if ((circles.includes(3) && !circles.includes(6) && circles.includes(9) && !squares.includes(6)) || (squares.includes(3) && !squares.includes(6) && squares.includes(9) && !circles.includes(6))) {
        square(220, 120, 6);
    } else if ((!circles.includes(3) && circles.includes(6) && circles.includes(9) && !squares.includes(3)) || (!squares.includes(3) && squares.includes(6) && squares.includes(9) && !circles.includes(3))) {
        square(120, 20, 3);
    } else if ((circles.includes(1) && circles.includes(5) && !circles.includes(9) && !squares.includes(9)) || (squares.includes(1) && squares.includes(5) && !squares.includes(9) && !circles.includes(9))) {
        square(220, 220, 9);
    } else if ((circles.includes(1) && !circles.includes(5) && circles.includes(9) && !squares.includes(5)) || (squares.includes(1) && !squares.includes(5) && squares.includes(9) && !circles.includes(5))) {
        square(120, 120, 5);
    } else if ((!circles.includes(1) && circles.includes(5) && circles.includes(9) && !squares.includes(1)) || (!squares.includes(1) && squares.includes(5) && squares.includes(9) && !circles.includes(1))) {
        square(20, 20, 1);
    } else if ((circles.includes(3) && circles.includes(5) && !circles.includes(7) && !squares.includes(7)) || (squares.includes(3) && squares.includes(5) && !squares.includes(7) && !circles.includes(7))) {
        square(20, 220, 7);
    } else if ((circles.includes(3) && !circles.includes(5) && circles.includes(7) && !squares.includes(5)) || (squares.includes(3) && !squares.includes(5) && squares.includes(7) && !circles.includes(5))) {
        square(120, 120, 5);
    } else if ((!circles.includes(3) && circles.includes(5) && circles.includes(7) && !squares.includes(3)) || (!squares.includes(3) && squares.includes(5) && squares.includes(7) && !circles.includes(3))) {
        square(220, 20, 3);
    } else if (!circles.includes(1) && !circles.includes(2) && !circles.includes(3) && !squares.includes(1) && !squares.includes(2) && !squares.includes(3)) {
        let position = Math.floor(Math.random() * (+4 - +1)) + +1;
        console.log(position);
        if (position == 1)
            square(20, 20, 1);
        else if (position == 2)
            square(120, 20, 2);
        else if (position == 3)
            square(220, 20, 3);
    } else if (!circles.includes(4) && !circles.includes(5) && !circles.includes(6) && !squares.includes(4) && !squares.includes(5) && !squares.includes(6)) {
        let position = Math.floor(Math.random() * (+7 - +4)) + +4;
        console.log(position);
        if (position == 4)
            square(20, 120, 4);
        else if (position == 5)
            square(120, 120, 5);
        else if (position == 6)
            square(220, 120, 6);
    } else if (!circles.includes(7) && !circles.includes(8) && !circles.includes(9) && !squares.includes(7) && !squares.includes(8) && !squares.includes(9)) {
        let position = Math.floor(Math.random() * (+10 - +7)) + +7;
        console.log(position);
        if (position == 7)
            square(20, 220, 7);
        if (position == 8)
            square(120, 220, 8);
        if (position == 9)
            square(220, 220, 9);
    } else if (!circles.includes(1) && !circles.includes(4) && !circles.includes(7) && !squares.includes(1) && !squares.includes(4) && !squares.includes(7)) {
        let array = [1, 4, 7];
        let position = Math.floor(Math.random() * (+3 - +0)) + +0;
        console.log(position);
        if (array[position] == 1)
            square(20, 20, 1);
        if (array[position] == 4)
            square(20, 120, 4);
        if (array[position] == 7)
            square(20, 220, 7);
    } else if (!circles.includes(2) && !circles.includes(5) && !circles.includes(8) && !squares.includes(2) && !squares.includes(5) && !squares.includes(8)) {
        let array = [2, 5, 8];
        let position = Math.floor(Math.random() * (+3 - +0)) + +0;
        console.log(position);
        if (array[position] == 2)
            square(120, 20, 2);
        if (array[position] == 5)
            square(120, 120, 5);
        if (array[position] == 8)
            square(120, 220, 8);
    } else if (!circles.includes(3) && !circles.includes(6) && !circles.includes(9) && !squares.includes(3) && !squares.includes(6) && !squares.includes(9)) {
        let array = [3, 6, 9];
        let position = Math.floor(Math.random() * (+3 - +0)) + +0;
        console.log(position);
        if (array[position] == 3)
            square(220, 20, 3);
        if (array[position] == 6)
            square(220, 120, 6);
        if (array[position] == 9)
            square(220, 220, 9);
    } else if (!circles.includes(1) && !circles.includes(5) && !circles.includes(9) && !squares.includes(1) && !squares.includes(5) && !squares.includes(9)) {
        let array = [2, 5, 9];
        let position = Math.floor(Math.random() * (+3 - +0)) + +0;
        console.log(position);
        if (array[position] == 1)
            square(20, 20, 1);
        if (array[position] == 5)
            square(120, 120, 5);
        if (array[position] == 6)
            square(220, 220, 9);
    } else if (!circles.includes(3) && !circles.includes(5) && !circles.includes(7) && !squares.includes(3) && !squares.includes(5) && !squares.includes(7)) {
        let array = [3, 5, 7];
        let position = Math.floor(Math.random() * (+3 - +0)) + +0;
        console.log(position);
        if (array[position] == 3)
            square(120, 20, 3);
        if (array[position] == 5)
            square(120, 120, 5);
        if (array[position] == 7)
            square(20, 220, 7);
    } else if (!circles.includes(1) && !circles.includes(2) && !circles.includes(3) && squares.includes(1) && !squares.includes(2) && !squares.includes(3)) {
        square(120, 20, 2);
    } else if (!circles.includes(4) && !circles.includes(5) && !circles.includes(6) && squares.includes(4) && !squares.includes(5) && !squares.includes(6)) {
        square(120, 120, 5);
    } else if (!circles.includes(7) && !circles.includes(8) && !circles.includes(9) && squares.includes(7) && !squares.includes(8) && !squares.includes(9)) {
        square(120, 220, 8);
    } else if (!circles.includes(1) && !circles.includes(4) && !circles.includes(7) && squares.includes(1) && !squares.includes(4) && !squares.includes(7)) {
        square(20, 120, 4);
    } else if (!circles.includes(2) && !circles.includes(5) && !circles.includes(8) && squares.includes(2) && !squares.includes(5) && !squares.includes(8)) {
        square(120, 120, 5);
    } else if (!circles.includes(3) && !circles.includes(6) && !circles.includes(9) && squares.includes(3) && !squares.includes(6) && !squares.includes(9)) {
        square(220, 120, 6);
    } else if (!circles.includes(1) && !circles.includes(5) && !circles.includes(9) && squares.includes(1) && !squares.includes(5) && !squares.includes(9)) {
        square(120, 120, 1);
    } else if (!circles.includes(3) && !circles.includes(5) && !circles.includes(7) && squares.includes(3) && !squares.includes(5) && !squares.includes(7)) {
        square(120, 120, 5);
    } else if (!circles.includes(1) && !circles.includes(2) && !circles.includes(3) && squares.includes(1) && squares.includes(2) && !squares.includes(3)) {
        square(220, 220, 3);
    } else if (!circles.includes(4) && !circles.includes(5) && !circles.includes(6) && squares.includes(4) && squares.includes(5) && !squares.includes(6)) {
        square(220, 120, 6);
    } else if (!circles.includes(7) && !circles.includes(8) && !circles.includes(9) && squares.includes(7) && squares.includes(8) && !squares.includes(9)) {
        square(220, 220, 9);
    } else if (!circles.includes(1) && !circles.includes(4) && !circles.includes(7) && squares.includes(1) && squares.includes(4) && !squares.includes(7)) {
        square(20, 220, 7);
    } else if (!circles.includes(2) && !circles.includes(5) && !circles.includes(8) && squares.includes(2) && squares.includes(5) && !squares.includes(8)) {
        square(120, 220, 8);
    } else if (!circles.includes(3) && !circles.includes(6) && !circles.includes(9) && squares.includes(3) && squares.includes(6) && !squares.includes(9)) {
        square(220, 220, 9);
    } else if (!circles.includes(1) && !circles.includes(5) && !circles.includes(9) && squares.includes(1) && squares.includes(5) && !squares.includes(9)) {
        square(220, 220, 9);
    } else if (!circles.includes(3) && !circles.includes(5) && !circles.includes(7) && squares.includes(3) && squares.includes(5) && !squares.includes(7)) {
        square(20, 220, 7);
    } else if (!circles.includes(1) && !circles.includes(2) && !circles.includes(3) && squares.includes(1) && !squares.includes(2) && squares.includes(3)) {
        square(120, 20, 2);
    } else if (!circles.includes(4) && !circles.includes(5) && !circles.includes(6) && squares.includes(4) && !squares.includes(5) && squares.includes(6)) {
        square(120, 120, 5);
    } else if (!circles.includes(7) && !circles.includes(8) && !circles.includes(9) && squares.includes(7) && !squares.includes(8) && squares.includes(9)) {
        square(120, 220, 8);
    } else if (!circles.includes(1) && !circles.includes(4) && !circles.includes(7) && squares.includes(1) && !squares.includes(4) && squares.includes(7)) {
        square(20, 120, 4);
    } else if (!circles.includes(2) && !circles.includes(5) && !circles.includes(8) && squares.includes(2) && !squares.includes(5) && squares.includes(8)) {
        square(120, 120, 5);
    } else if (!circles.includes(3) && !circles.includes(6) && !circles.includes(9) && squares.includes(3) && !squares.includes(6) && squares.includes(9)) {
        square(220, 120, 6);
    } else if (!circles.includes(1) && !circles.includes(5) && !circles.includes(9) && squares.includes(1) && !squares.includes(5) && squares.includes(9)) {
        square(120, 120, 5);
    } else if (!circles.includes(3) && !circles.includes(5) && !circles.includes(7) && squares.includes(3) && !squares.includes(5) && squares.includes(7)) {
        square(120, 120, 5);
    } else if ((circles.includes(1) && !circles.includes(2) && !circles.includes(3) && !squares.includes(1) && squares.includes(2) && !squares.includes(3)) || (!circles.includes(1) && circles.includes(2) && !circles.includes(3) && squares.includes(1) && !squares.includes(2) && !squares.includes(3))) {
        square(220, 20, 3);
    } else if ((circles.includes(1) && !circles.includes(2) && !circles.includes(3) && !squares.includes(1) && !squares.includes(2) && squares.includes(3)) || (!circles.includes(1) && !circles.includes(2) && circles.includes(3) && squares.includes(1) && !squares.includes(2) && !squares.includes(3))) {
        square(120, 20, 2);
    } else if ((!circles.includes(1) && circles.includes(2) && !circles.includes(3) && !squares.includes(1) && !squares.includes(2) && squares.includes(3)) || (!circles.includes(1) && !circles.includes(2) && circles.includes(3) && !squares.includes(1) && squares.includes(2) && !squares.includes(3))) {
        square(20, 20, 1);
    } else if ((circles.includes(4) && !circles.includes(5) && !circles.includes(6) && !squares.includes(4) && squares.includes(5) && !squares.includes(6)) || (!circles.includes(4) && circles.includes(5) && !circles.includes(6) && squares.includes(4) && !squares.includes(5) && !squares.includes(6))) {
        square(220, 120, 6);
    } else if ((circles.includes(4) && !circles.includes(5) && !circles.includes(6) && !squares.includes(4) && !squares.includes(5) && squares.includes(6)) || (!circles.includes(4) && !circles.includes(5) && circles.includes(6) && squares.includes(4) && !squares.includes(5) && !squares.includes(6))) {
        square(120, 120, 5);
    } else if ((!circles.includes(4) && circles.includes(5) && !circles.includes(6) && !squares.includes(4) && !squares.includes(5) && squares.includes(6)) || (!circles.includes(4) && !circles.includes(5) && circles.includes(6) && !squares.includes(4) && squares.includes(5) && !squares.includes(6))) {
        square(120, 20, 4);
    } else if ((circles.includes(7) && !circles.includes(8) && !circles.includes(9) && !squares.includes(7) && squares.includes(8) && !squares.includes(9)) || (!circles.includes(7) && circles.includes(8) && !circles.includes(9) && squares.includes(7) && !squares.includes(8) && !squares.includes(9))) {
        square(220, 220, 9);
    } else if ((circles.includes(7) && !circles.includes(8) && !circles.includes(9) && !squares.includes(7) && !squares.includes(8) && squares.includes(9)) || (!circles.includes(7) && !circles.includes(8) && circles.includes(9) && squares.includes(7) && !squares.includes(8) && !squares.includes(9))) {
        square(120, 220, 8);
    } else if ((!circles.includes(7) && circles.includes(8) && !circles.includes(9) && !squares.includes(7) && !squares.includes(8) && squares.includes(9)) || (!circles.includes(7) && !circles.includes(8) && circles.includes(9) && !squares.includes(7) && squares.includes(8) && !squares.includes(9))) {
        square(20, 220, 7);
    } else if ((circles.includes(1) && !circles.includes(5) && !circles.includes(9) && !squares.includes(1) && squares.includes(5) && !squares.includes(9)) || (!circles.includes(1) && circles.includes(5) && !circles.includes(9) && squares.includes(1) && !squares.includes(5) && !squares.includes(9))) {
        square(220, 220, 9);
    } else if ((circles.includes(1) && !circles.includes(5) && !circles.includes(9) && !squares.includes(1) && !squares.includes(5) && squares.includes(9)) || (!circles.includes(1) && !circles.includes(5) && circles.includes(9) && squares.includes(1) && !squares.includes(5) && !squares.includes(9))) {
        square(120, 120, 5);
    } else if ((!circles.includes(1) && circles.includes(5) && !circles.includes(9) && !squares.includes(1) && !squares.includes(5) && squares.includes(9)) || (!circles.includes(1) && !circles.includes(5) && circles.includes(9) && !squares.includes(1) && squares.includes(5) && !squares.includes(9))) {
        square(20, 20, 1);
    } else if ((circles.includes(3) && !circles.includes(5) && !circles.includes(7) && !squares.includes(3) && squares.includes(5) && !squares.includes(7)) || (!circles.includes(3) && circles.includes(5) && !circles.includes(7) && squares.includes(3) && !squares.includes(5) && !squares.includes(7))) {
        square(20, 220, 7);
    } else if ((circles.includes(3) && !circles.includes(5) && !circles.includes(7) && !squares.includes(3) && !squares.includes(5) && squares.includes(7)) || (!circles.includes(3) && !circles.includes(5) && circles.includes(7) && squares.includes(3) && !squares.includes(5) && !squares.includes(7))) {
        square(120, 120, 5);
    } else if ((!circles.includes(3) && circles.includes(5) && !circles.includes(7) && !squares.includes(3) && !squares.includes(5) && squares.includes(7)) || (!circles.includes(3) && !circles.includes(5) && circles.includes(7) && !squares.includes(3) && squares.includes(5) && !squares.includes(7))) {
        square(120, 20, 3);
    }
}