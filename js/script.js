function sum() {
    if ($("#num1").val().trim().length > 0 && $("#num2").val().trim().length > 0) {
        let n1, n2, r
        n1 = document.getElementById("num1").value
        n2 = document.getElementById("num2").value
        r = parseFloat(n1) + parseFloat(n2)
        alert("La suma de los número es = " + r);
    }
    else {
        alert("Por favor complete los demas campos");
    }
}
function pitagoras() {
    if ($("#a").val().trim().length > 0 && $("#b").val().trim().length > 0) {
        let a, b, h, r
        a = document.getElementById("a").value
        b = document.getElementById("b").value
        h = (parseFloat(a) ** 2) + (parseFloat(b) ** 2)
        r = Math.sqrt(h)
        alert("La Hipotenusa es = " + r);
    }
    else {
        alert("Por favor complete los demas campos");
    }
}
function bmi() {
    if ($("#weight").val().trim().length > 0 && $("#height").val().trim().length > 0) {
        let w, h, r
        w = document.getElementById("weight").value
        h = document.getElementById("height").value
        r = parseInt(w) / (parseFloat(h) ** 2)
        alert("Tu BMI es = " + r);
    }
    else {
        alert("Por favor complete los demas campos");
    }
}
function repeat() {
    if ($("#phrase").val().trim().length > 0 && $("#number").val().trim().length > 0) {
        let p, n
        p = document.getElementById("phrase").value
        n = document.getElementById("number").value
        for (let i = 1; i <= n; i++) {
            alert(p + " #" + i);
        }
    }
    else {
        alert("Por favor complete los demas campos");
    }
}
function multipleN() {
    if ($("#n").val().trim().length > 0) {
        let n, r
        let vec = []
        n = document.getElementById("n").value
        r = parseInt(n)
        for (let i = 0; i <= 100; i++) {
            if (i % r == 0) {
                vec.push(i)
            }
        }
        alert("Los Múltiplos de " + r + " desde 0 a 100 son = " + vec)
    }
    else {
        alert("Por favor complete los demas campos");
    }
}
function rankn() {
    if ($("#n1").val().trim().length > 0 && $("#n2").val().trim().length > 0) {
        let s, e, start, end
        let vec = []
        s = document.getElementById("n1").value
        start = parseInt(s)
        e = document.getElementById("n2").value
        end = parseInt(e)
        for (let i = start; i <= end; i++) {
            vec.push(i)
        }
        alert(vec)
    }
    else {
        alert("Por favor complete los demas campos");
    }
}
function generations() {
    if ($("#year").val().trim().length > 0) {
        let y, a
        y = document.getElementById("year").value
        a = parseInt(y)
        if (a < 1945) {
            alert("Perteneces a la Gran generación!")
        } if (a >= 1945 && a <= 1964) {
            alert("Eres un Baby boomer!")
        } if (a >= 1965 && a <= 1981) {
            alert("Perteneces a la Generación X!")
        } if (a >= 1982 && a <= 1994) {
            alert("Eres un Millenial!")
        } if (a >= 1995) {
            alert("Perteneces a la Generación Z!")
        }
    }
    else {
        alert("Por favor complete los demas campos");
    }
}
function speed() {
    if ($("#distance").val().trim().length > 0 && $("#seconds").val().trim().length > 0) {
        let d, t, v
        d = parseInt(document.getElementById("distance").value)
        t = parseFloat(document.getElementById("seconds").value)
        v = d / t
        alert("La velocidad es = " + v + " m/s")
    }
    else {
        alert("Por favor complete los demas campos");
    }
}
function hi() {
    if ($("#name").val().trim().length > 0) {
        let n
        n = document.getElementById("name").value
        alert("Hola " + n + "! gracias por revisar los ejercicios :)")
    }
    else {
        alert("Por favor complete los demas campos");
    }
}