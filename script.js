console.log("welcome to tic ta toe");
console.log("asdhdf");
		let music = new Audio("./music.mp3");
		let audioturn = new Audio("ting.mp3");
		let gameover = new Audio("gameover.mp3");
		let isgameover = false;


		let turn = "x";







		//funtion to change the turn
		const changeturn = ()=>{
			return turn === "x"? "0": "x"
		}

		//funtion to check for a win
		const checkwin = ()=>{
			let boxtext = document.getElementsByClassName('boxtext');
			let wins = [
				[0, 1, 2, 5, 5, 0],
				[3, 4 ,5, 5, 15, 0],
				[6, 7 ,8, 5, 25 ,0],
				[0, 3 ,6, -5, 15, 90],
				[1, 4 ,7, 5, 15, 90],
				[2, 5 ,8, 15, 12, 90],
				[0, 4 ,8, 5, 15 ,45],
				[2, 4 ,6, 5, 15, 135],
				]
			wins.forEach(e =>{
				if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
					document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won";
					isgameover = true;
					document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
					document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
					document.querySelector('.line').style.width = "20vw";
				}
			})

		}

		//game logic

		
		

		let boxes = document.getElementsByClassName('box');

		Array.from(boxes).forEach(element =>{
			let boxtext = element.querySelector('.boxtext');
			element.addEventListener('click', ()=>{

				if (boxtext.innerText === '') {
					boxtext.innerText = turn;
					turn = changeturn();
						music.play();
					audioturn.play();
					checkwin();
					if (!isgameover) {
					document.getElementsByClassName("info")[0].innerText = "Turn For "+" " + turn;				}
					}
			})
 
		})

		// Add Event Listner 
		reset.addEventListener('click', ()=>{
			let boxtext = document.querySelectorAll('.boxtext');
			Array.from(boxtext).forEach(element =>{
				element.innerText = "";
			})
			turn = "x";
			isgameover = false;
			
				document.getElementsByClassName("info")[0].innerText = "Turn For "+" " + turn;	
				document.querySelector('.line').style.width = "0";
				document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";	
		}) 