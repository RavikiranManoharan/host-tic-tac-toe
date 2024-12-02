var plyr = 0

var plar1=[]

var plar2=[]

var tie=0

var len=0

function pls1()
{
	tie++
	
	//console.log(plar1.length)

	plyr++;
	//console.log(plyr)

		a = document.getElementById("1").textContent="X";
		
		document.getElementById("btn1").style.display="none";
		
		plar1[0]=1
	
	len++;

	
	autoply()
	
	check1()
	
	check2()
}

function pls2()
{
	tie++
	
	plyr++;
	//console.log(plyr)
	
		a = document.getElementById("2").textContent="X";
		
		document.getElementById("btn2").style.display="none";
		
		plar1[1]=2
	
	len++;
	
	autoply()
	
	check1()
	
	check2()
}

function pls3()
{
	tie++
	
	plyr++;
	//console.log(plyr)
		a = document.getElementById("3").textContent="X";
		
		document.getElementById("btn3").style.display="none";
		
		plar1[2]=3
	
	len++;
	
	autoply()
	
	check1()
	
	check2()
}

function pls4()
{
	tie++
	
	plyr++;
	//console.log(plyr)
	
		a = document.getElementById("4").textContent="X";
		
		document.getElementById("btn4").style.display="none";
		
		plar1[3]=4
	
	len++;
	
	autoply()
	
	check1()
	
	check2()
}

function pls5()
{
	tie++
	
	plyr++;
	//console.log(plyr)
		a = document.getElementById("5").textContent="X";
		
		document.getElementById("btn5").style.display="none";
		
		plar1[4]=5
	
	len++;
	
	autoply()
	
	check1()
	
	check2()
}

function pls6()
{
	tie++
	
	len++;
	
	plyr++;
	//console.log(plyr)
		a = document.getElementById("6").textContent="X";
		
		document.getElementById("btn6").style.display="none";
		
		plar1[5]=6
	
	autoply()
	
	check1()
	
	check2()
}

function pls7()
{
	tie++
	
	plyr++;
	//console.log(plyr)
		a = document.getElementById("7").textContent="X";
		
		document.getElementById("btn7").style.display="none";
		
		plar1[6]=7

	len++;
	
	autoply()
	
	check1()
	
	check2()
}

function pls8()
{
	tie++
	
	len++;
	
	plyr++;
	//console.log(plyr)
		a = document.getElementById("8").textContent="X";
		
		document.getElementById("btn8").style.display="none";
		
		plar1[7]=8
	
	autoply()
	
	check1()
	
	check2()
}

function pls9()
{
	len++;
	
	tie++
	
	plyr++;
	//console.log(plyr)
		
		a = document.getElementById("9").textContent="X";
		
		document.getElementById("btn9").style.display="none";
		
		plar1[8]=9
	
	autoply()
	
	check1()
	
	check2()
}

function check1()
{
	//console.log(plar1)
	
	var plr = localStorage.getItem("player");
	
	if(plar1.includes(1) && plar1.includes(2) && plar1.includes(3))
	{
		var a = document.getElementById("rlt").textContent=plr.toUpperCase()+" "+"WON";
		
		var b = document.getElementById("1").style.color="grey";
		var c = document.getElementById("2").style.color="grey";
		var d = document.getElementById("3").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(plar1.includes(1) && plar1.includes(5) && plar1.includes(9))
	{
		var a = document.getElementById("rlt").textContent=plr.toUpperCase()+" "+"WON";
		
		var b = document.getElementById("1").style.color="grey";
		var c = document.getElementById("5").style.color="grey";
		var d = document.getElementById("9").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(plar1.includes(1) && plar1.includes(4) && plar1.includes(7))
	{
		var a = document.getElementById("rlt").textContent=plr.toUpperCase()+" "+"WON";
		
		var b = document.getElementById("1").style.color="grey";
		var c = document.getElementById("4").style.color="grey";
		var d = document.getElementById("7").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(plar1.includes(2) && plar1.includes(5) && plar1.includes(8))
	{
		var a = document.getElementById("rlt").textContent=plr.toUpperCase()+" "+"WON";
		
		var b = document.getElementById("2").style.color="grey";
		var c = document.getElementById("5").style.color="grey";
		var d = document.getElementById("8").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(plar1.includes(3) && plar1.includes(5) && plar1.includes(7))
	{
		var a = document.getElementById("rlt").textContent=plr.toUpperCase()+" "+"WON";
		
		var b = document.getElementById("3").style.color="grey";
		var c = document.getElementById("5").style.color="grey";
		var d = document.getElementById("7").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(plar1.includes(3) && plar1.includes(6) && plar1.includes(9))
	{
		var a = document.getElementById("rlt").textContent=plr.toUpperCase()+" "+"WON";
		
		var b = document.getElementById("3").style.color="grey";
		var c = document.getElementById("6").style.color="grey";
		var d = document.getElementById("9").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(plar1.includes(4) && plar1.includes(5) && plar1.includes(6))
	{
		var a = document.getElementById("rlt").textContent=plr.toUpperCase()+" "+"WON";
		
		var b = document.getElementById("4").style.color="grey";
		var c = document.getElementById("5").style.color="grey";
		var d = document.getElementById("6").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(plar1.includes(7) && plar1.includes(8) && plar1.includes(9))
	{
		var a = document.getElementById("rlt").textContent=plr.toUpperCase()+" "+"WON";
		
		var b = document.getElementById("7").style.color="grey";
		var c = document.getElementById("8").style.color="grey";
		var d = document.getElementById("9").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(tie>=9)
	{
		var a = document.getElementById("rlt").textContent="TIE";
		
		var b = document.getElementById("1").style.color="purple";
		var c = document.getElementById("2").style.color="purple";
		var d = document.getElementById("4").style.color="purple";
		
		var b = document.getElementById("5").style.color="purple";
		var c = document.getElementById("6").style.color="purple";
		var d = document.getElementById("7").style.color="purple";
	
		var b = document.getElementById("8").style.color="purple";
		var d = document.getElementById("3").style.color="purple";
		var d = document.getElementById("9").style.color="purple";
		
		var e = document.getElementById("pg2").style.display="block";
		
	}
	
	check2()
	
}

function check2()
{
	//console.log("check2 called")
	
	//console.log(plar2.includes(1))
	
	var plr = "computer";
	
	//console.log(plr)
	
	if(plar2.includes(1) && plar2.includes(2) && plar2.includes(3))
	{
		console.log("ck2")
		
		var a = document.getElementById("rlt").textContent="COMPUTER WON";
		
		var b = document.getElementById("1").style.color="grey";
		var c = document.getElementById("2").style.color="grey";
		var d = document.getElementById("3").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
		
	}
	else if(plar2.includes(1) && plar2.includes(5) && plar2.includes(9))
	{
		console.log("ck2")
		
		var a = document.getElementById("rlt").textContent="COMPUTER WON";
		
		var b = document.getElementById("1").style.color="grey";
		var c = document.getElementById("5").style.color="grey";
		var d = document.getElementById("9").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(plar2.includes(1) && plar2.includes(4) && plar2.includes(7))
	{
		console.log("ck2")
		
		var a = document.getElementById("rlt").textContent="COMPUTER WON";
		
		var b = document.getElementById("1").style.color="grey";
		var c = document.getElementById("4").style.color="grey";
		var d = document.getElementById("7").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(plar2.includes(2) && plar2.includes(5) && plar2.includes(8))
	{
		console.log("ck2")
		
		var a = document.getElementById("rlt").textContent="COMPUTER WON";
		
		var b = document.getElementById("2").style.color="grey";
		var c = document.getElementById("5").style.color="grey";
		var d = document.getElementById("8").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(plar2.includes(3) && plar2.includes(5) && plar2.includes(7))
	{
		console.log("ck2")
		
		var a = document.getElementById("rlt").textContent="COMPUTER WON";
		
		var b = document.getElementById("3").style.color="grey";
		var c = document.getElementById("5").style.color="grey";
		var d = document.getElementById("7").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(plar2.includes(3) && plar2.includes(6) && plar2.includes(9))
	{
		console.log("ck2")
		
		var a = document.getElementById("rlt").textContent="COMPUTER WON";
		
		var b = document.getElementById("3").style.color="grey";
		var c = document.getElementById("6").style.color="grey";
		var d = document.getElementById("9").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(plar2.includes(4) && plar2.includes(5) && plar2.includes(6))
	{
		console.log("ck2")
		
		var a = document.getElementById("rlt").textContent="COMPUTER WON";
		
		var b = document.getElementById("4").style.color="grey";
		var c = document.getElementById("5").style.color="grey";
		var d = document.getElementById("6").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(plar2.includes(7) && plar2.includes(8) && plar2.includes(9))
	{
		console.log("ck2")
		
		var a = document.getElementById("rlt").textContent="COMPUTER WON";
		
		var b = document.getElementById("7").style.color="grey";
		var c = document.getElementById("8").style.color="grey";
		var d = document.getElementById("9").style.color="grey";
		
		var e = document.getElementById("pg2").style.display="block";
		
			var k = document.getElementsByClassName("btns")
		k[0].style.display="none";
		k[1].style.display="none";
		k[2].style.display="none";
		k[3].style.display="none";
		k[4].style.display="none";
		k[5].style.display="none";
		k[6].style.display="none";
		k[7].style.display="none";
		k[8].style.display="none";
	}
	else if(tie>=9)
	{
		console.log("ck2")
		
		var a = document.getElementById("rlt").textContent="TIE";
		
		var b = document.getElementById("1").style.color="purple";
		var c = document.getElementById("2").style.color="purple";
		var d = document.getElementById("4").style.color="purple";
		
		var b = document.getElementById("5").style.color="purple";
		var c = document.getElementById("6").style.color="purple";
		var d = document.getElementById("7").style.color="purple";
	
		var b = document.getElementById("8").style.color="purple";
		var d = document.getElementById("3").style.color="purple";
		var d = document.getElementById("9").style.color="purple";
		
		var e = document.getElementById("pg2").style.display="block";
		
	}
	
}

function submit()
{
	var pl1 = document.getElementById("pl1").value;
	
	var pl2 = document.getElementById("pl2").value;
	
	console.log(pl1)
	console.log(pl2)
	
	localStorage.setItem("playerone",pl1);
	
	localStorage.setItem("playertwo",pl2);
	
	if(pl1== null && pl2== null)
	{
		window.alert("Requirement not fulfilled");
	}
	else
	{
		window.location.href="tictactoe.html"
	}
}

function replay()
{
	window.location.reload();
}

var insr = 0

function instr()
{
	insr++
	
	if(insr%2==1)
	{
		a = document.getElementById("pg3").style.display="block";
	}
	else
	{
		a = document.getElementById("pg3").style.display="none";
	}
}

var nu = 0

var carr=[]

function autoply()
{
	
	setTimeout(()=>{
			
		var num = Math.floor(Math.random()*(10-1))+1;
		
		//console.log(num)
		
		if(plar1.includes(num))
		{
			autoply();
			
			check2();
		}
		else
		{
			
			if(len>plar2.length)
			{
				
				if(carr.includes(num))
				{
					//console.log("rc")
					autoply();
					check2();
				}
				else
				{	
					plar2[nu]=num;
				
					carr[nu]=num;
					
					tie++
					
					//console.log(num)
					//console.log(tie)
					
					nu++
				
					var put = document.getElementById(num).textContent="O";
				
					//console.log(num);
						
					if(num==1)
					{ 
						var a = document.getElementById("btn1").style.display="none";
					}
					else if(num==2)
					{ 
						var a = document.getElementById("btn2").style.display="none";
					}
					else if(num==3)
					{ 
						var a = document.getElementById("btn3").style.display="none";
					}
					else if(num==4)
					{ 
						var a = document.getElementById("btn4").style.display="none";
					}
					else if(num==5)
					{ 
						var a = document.getElementById("btn5").style.display="none";
					}
					else if(num==6)
					{ 
						var a = document.getElementById("btn6").style.display="none";
					}
					else if(num==7)
					{ 
						var a = document.getElementById("btn7").style.display="none";
					}
					else if(num==8)
					{ 
						var a = document.getElementById("btn8").style.display="none";
					}
					else if(num==9)
					{ 
						var a = document.getElementById("btn9").style.display="none";
					}
				check2();
				}
			}
			else
			{
				
				plar2[nu]=num;
				
				tie++
				
				carr[nu]=num;
				
				len=2
				nu++
				
				var put = document.getElementById(num).textContent="O";
				
				//console.log(num);
				
				if(num==1)
				{ 
					var a = document.getElementById("btn1").style.display="none";
				}
				else if(num==2)
				{ 
					var a = document.getElementById("btn2").style.display="none";
				}
				else if(num==3)
				{ 
					var a = document.getElementById("btn3").style.display="none";
				}
				else if(num==4)
				{ 
					var a = document.getElementById("btn4").style.display="none";
				}
				else if(num==5)
				{ 
					var a = document.getElementById("btn5").style.display="none";
				}
				else if(num==6)
				{ 
					var a = document.getElementById("btn6").style.display="none";
				}
				else if(num==7)
				{ 
					var a = document.getElementById("btn7").style.display="none";
				}
				else if(num==8)
				{ 
					var a = document.getElementById("btn8").style.display="none";
				}
				else if(num==9)
				{ 
					var a = document.getElementById("btn9").style.display="none";
				}
			check2();
				
			}
			//if(num==1)
		}
		
		check2();
			
	},1500);
	
	check2();
	
}


function submit1()
{
	pl = document.getElementById("pl").value;
	
	localStorage.setItem("player",pl);
	
	window.location.href="tictactoe2.html"
}

//testing

tre();

var i = 0

function tre()
{
	while(i>0)
	{
		a=document.getElementById("one");
		console.log(a)
		console.log("sfd")
		i++;
	}
}
