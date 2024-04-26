function alert_paragraph_color() {
    var border_R = document.getElementById("border_R").value;
    //alert(border_R);
    var border_G = document.getElementById("border_G").value;
    //alert(border_G);
    var border_B = document.getElementById("border_B").value;
    //alert(border_B);
    var bg_R = document.getElementById("bg_R").value;
    //alert(bg_R);
    var bg_G = document.getElementById("bg_G").value;
    //alert(bg_G);
    var bg_B = document.getElementById("bg_B").value;
    //alert(bg_B);
    var borderWidth = document.getElementById("border_width").value;



document.getElementById("paragraph").style.borderColor = `rgb(${border_R},${border_G},${border_B})`;

document.getElementById("paragraph").style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;

document.getElementById("paragraph").style.borderWidth = borderWidth + 'px';
}


function validate() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    if (pass1 != pass2) {
        alert("Passwords don't match!");
        return; 
    }
    if (pass1.length < 8 || pass2.length < 8) {
        alert("Password too short!");
        return;
    }
    alert("The two passwords are good!");
}