var soal = { "a":[1,1,3,2,3,1,3,4], "b":[2,4,2,4,5,3,7,8], "c":[6,2,5,12,14,10,9,6] };
//document.getElementById('id').innerHTML = `i = ${i}`;

function acaknomor(y) {
	return Math.floor(Math.random()*y);
}

var i = acaknomor(soal.a.length);
console.log(i);

function acak() {
	var question = `${soal.a[i]}x<sup>2</sup> + ${soal.b[i]}x + ${soal.c[i]}`;
	document.getElementById('soal').innerHTML= question;
	var button = document.getElementById('soaltampil');
    $(button).prop("disabled","none", true);
	console.log(i);
}


function validasi() {
	console.log(i);
	var x1value = document.getElementById('x1').value;
	var x2value = document.getElementById('x2').value;
	var d = (soal.b[i]*soal.b[i])-(4*soal.a[i]*soal.c[i]);
	var x1 = (-soal.b[i] + Math.sqrt(d))/(2*soal.a[i]);
	var x2 = (-soal.b[i] - Math.sqrt(d))/(2*soal.a[i]);
	var bol1 = isNaN(x1);
	var bol2 = isNaN(x2);
	console.log(bol1);
	var tes = `i = ${i} x1 = ${x1} x2 = ${x2} d = ${d} x1v = ${x1value} x2v = ${x2value}`;
		if (x1value == x1 && x2value == x2) {
				var hasil = `HASIL!<br>JAWABAN BENAR!<br>x1 = ${x1} dan x2 = ${x2}<br>
				<input type="button" value="Refresh Page" onClick="window.location.href=window.location.href" class="btn btn-light text-center border rounded-pill border-primary d-xl-flex justify-content-xl-center">`;
				document.getElementById('result').innerHTML= hasil;
		}
		if ((x1value == '*' && bol1 == true) && (x2value == '*' && bol2 == true)) {
			var hasil = `HASIL!<br>JAWABAN BENAR!<br>x1 dan x2 merupakan Akar Imajiner<br>x1 = ${x1} dan x2 = ${x2}
			<br><input type="button" value="Refresh Page" onClick="window.location.href=window.location.href" class="btn btn-light text-center border rounded-pill border-primary d-xl-flex justify-content-xl-center">`;
			document.getElementById('result').innerHTML= hasil;
		}
		else {
			var hasil = `HASIL!<br>JAWABAN KAMU SALAH!<br>Hasil x1 = ${x1} dan hasil x2 = ${x2}<br>jawaban kamu x1 = ${x1value} dan x2 = ${x2value}
									<br>Terus Latihan dan Jangan Menyerah<br>
									<input type="button" value="Refresh Page" onClick="window.location.href=window.location.href" class="btn btn-light text-center border rounded-pill border-primary d-xl-flex justify-content-xl-center">`;
			document.getElementById('result').innerHTML= hasil;
		}
	}

function hitung(){
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var c = document.getElementById('c').value;
	var d = (b*b)-(4*a*c);
	document.getElementById("result").innerHTML = `RESULT!!`;
	document.getElementById("d").innerHTML = `<br>Diskriminan = ${d} <br>`;

	if (d>0) {
	var x1 = (-b + Math.sqrt (d))/(2*a);
		document.getElementById("x1").innerHTML= `x1 = ${x1} <br>`;
	var x2 = (-b - Math.sqrt (d))/(2*a);
		document.getElementById("x2").innerHTML= `x2 = ${x2} <br>`;
	var ket = ("Mempunyai 2 akar real berbeda");
		document.getElementById("ket").innerHTML= `keterangan = ${ket} <br> <input type="button" value="Refresh Page" onClick="window.location.href=window.location.href" class="btn btn-light text-center border rounded-pill border-primary d-xl-flex justify-content-xl-center">`;
	} else if (d==0) {
		var x1 = -b /2*a
			document.getElementById("x1").innerHTML= `x1 = ${x1} <br>`;
		var x2 = -b /2*a
			document.getElementById("x2").innerHTML= `x2 = ${x2} <br>`;
		var ket = ("Mempunyai 2 akar yang sama dan rasional");
		document.getElementById("ket").innerHTML= `keterangan = ${ket} <br> <input type="button" value="Refresh Page" onClick="window.location.href=window.location.href" class="btn btn-light text-center border rounded-pill border-primary d-xl-flex justify-content-xl-center">`;
	} else if (d<0) {
		var x1 = ("Tidak ada akar");
			document.getElementById("x1").innerHTML= `x1 = ${x1} <br>`;
		var x2 = ("Tidak ada akar");
			document.getElementById("x2").innerHTML= `x2 = ${x2} <br>`;
		var ket = ("Akar Imajiner");
		document.getElementById("ket").innerHTML= `keterangan = ${ket} <br> <input type="button" value="Refresh Page" onClick="window.location.href=window.location.href" class="btn btn-light text-center border rounded-pill border-primary d-xl-flex justify-content-xl-center">`;
	}
}
