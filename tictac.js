<script>
var x = "D:\tictactoe\into.png";
var o = "D:\tictactoe\zero.png";
var blank = "D:\tictactoe\blank.png";

var a,b,c,d,e,f,g,h,i = 0;
var num,win,lost,tie,game,ok = 0;


//checking game over
fuction gamecheck() {
	if((a==1) && (b==1) && (c==1)) || ((d==1) && (e==1) && (f==1)) || ((g==1) && (h==1) && (i==1)) game = 1;
	if((a==1) && (d==1) && (g==1)) || ((b==1) && (e==1) && (h==1)) || ((c==1) && (f==1) && (i==1)) game = 1;
	if((a==1) && (e==1) && (i==1)) || ((c==1) && (e==1) && (g==1)) game = 1;
	if((a==2) && (b==2) && (c==2)) || ((d==2) && (e==2) && (f==2)) || ((g==2) && (h==2) && (i==2)) game = 2;
	if((a==2) && (d==2) && (g==2)) || ((b==2) && (e==2) && (h==2)) || ((c==2) && (f==2) && (i==2)) game = 2;
	if((a==2) && (e==2) && (i==2)) || ((c==2) && (e==2) && (g==2)) game = 2;
}
function checkblank(ch)
{
	if (ch == "A") && a==0
	{
		ok = 1;
		if(cf == 1) a=1;
		if(cf == 2) a=2;
	}
	if (ch == "B") && b==0
	{
		ok = 1;
		if(cf == 1) b=1;
		if(cf == 2) b=2;
	}
	if (ch == "C") && c==0
	{
		ok = 1;
		if(cf == 1) c=1;
		if(cf == 2) c=2;
	}
	if (ch == "D") && d==0
	{
		ok = 1;
		if(cf == 1) d=1;
		if(cf == 2) d=2;
	}
	if (ch == "E") && e==0
	{
		ok = 1;
		if(cf == 1) e=1;
		if(cf == 2) e=2;
	}
	if (ch == "F") && f==0
	{
		ok = 1;
		if(cf == 1) f=1;
		if(cf == 2) f=2;
	}
	if (ch == "G") && g==0
	{
		ok = 1;
		if(cf == 1) g=1;
		if(cf == 2) g=2;
	}
	if (ch == "H") && h==0
	{
		ok = 1;
		if(cf == 1) h=1;
		if(cf == 2) h=2;
	}
	if (ch == "I") && i==0
	{
		ok = 1;
		if(cf == 1) i=1;
		if(cf == 2) i=2;
	}
}

function choice1(ch)
{
	if(all!=0){}
	else
	{
		checkblank(ch);
		if(ok==1)
			document.images[ch].src = x;
		else
			taken();
	}
	gamecheck();
	
	choice2();
}

function progress()
{
	if(all == 1)
	{
		alert("Congratulations! You won the game");
		win = win+1;
	}
	if (all == 2)
	{
		alert("Sorry you lost! Try again!");
		lost = lost+1;
	}
	if (all == 3)
	{
		alert("It's a tie!");
		tie = tie+1;
	}
	if (all!=0)
		reset();
}

function reset()
{
	a = 0;
	b = 0;
	c = 0;
	d = 0;
	e = 0;
	f = 0;
	g = 0;
	h = 0;
	i = 0;
	
}
function taken()
{
alert("Already occupied!");
}

function choice2()
{
}

</script>