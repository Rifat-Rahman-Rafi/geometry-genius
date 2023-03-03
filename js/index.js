// first-card

let no=0;

function intNumberCheck(a){

    return Number.isInteger(a)
}

function floatNumberCheck(a){

    return Number.isFinite(a)
}


function checkNumber(a,b)
{
    if ((typeof a === 'string' || typeof b === 'string') && (a<=0 || b<=0)&&(typeof a === 'undefined'|| typeof b === 'undefined')) 
    {
        alert('Please enter a value in the input field');
      } 

      if (a === ''||b=='') {
       
        alert('Please enter a value in the input field');
    }
    
}





// triangleCalculate

function triangleCalculate(a,b)
{
    
        let area=0.5*a*b;


        if(intNumberCheck(area)==false)
        {
            
              area=area.toFixed(2);
        }

        

        return area;
    
}
document.getElementById('first-btn').addEventListener('click',function(){
  
    const firstName=document.getElementById('first-name').innerText;

    // console.log(firstName)


    const first=document.getElementById('b').value;
    const second= document.getElementById('h').value;
    
    document.getElementById('b').value=''
    document.getElementById('h').value=''
  

    //console.log(first,second)

    if (first === ''||second==''||triangleCalculate(first,second)=='NaN'|| triangleCalculate(first,second)<=0) {
       
        alert('Please enter a value in the input field');
    }
    else 
    {
     let ans=triangleCalculate(first,second)
    const container=document.getElementById('table-container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${++no}</td>
    <td>${firstName}</td>
    <td>${ans}cm&sup2</td>
    
    <button class="mt-5 btn btn-wide w-29 bg-primary border:none">Covert to m&sup2
    </button>
    <br></br>
   
    `;
    container.appendChild(tr)

    }
})










// sec-button



function rectangleCalculate(a,b){

   
        let area=a*b;


        if(intNumberCheck(area)==false)
        {
           // console.log("HELLO")
              area=area.toFixed(2);
        }

        

        return area;
    
}




document.getElementById('sec-btn').addEventListener('click',function(){
  
    const firstName=document.getElementById('sec-name').innerText;

    // console.log(firstName)


    const first=document.getElementById('w').value;
    const second= document.getElementById('i').value;
    
    document.getElementById('w').value=''
    document.getElementById('i').value=''
  

    //console.log(first,second)

    if (first === ''||second==''||rectangleCalculate(first,second)=='NaN' || rectangleCalculate(first,second)<=0) {
       
        alert('Please enter a value in the input field');
    }
    else 
    {
    
     let ans=rectangleCalculate(first,second)
    const container=document.getElementById('table-container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${++no}</td>
    <td>${firstName}</td>
    <td>${ans}cm&sup2</td>
    
    <button class="mt-5 btn btn-wide w-29 bg-primary border:none">Covert to m&sup2
    </button>
    <br></br>
   
   
    
    `;
    container.appendChild(tr)

    }
})






// third-card

document.getElementById('trd-btn').addEventListener('click',function(){
  
    const firstName=document.getElementById('trd-name').innerText;

    // console.log(firstName)


    const first=document.getElementById('b1').innerText;
    const second= document.getElementById('h1').innerText;
    
    // document.getElementById('b1').value=''
    // document.getElementById('h1').value=''
  

    //console.log(first,second)


    
     let ans=rectangleCalculate(first,second)
    const container=document.getElementById('table-container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${++no}</td>
    <td>${firstName}</td>
    <td>${ans}cm&sup2</td>
    
    <button class="mt-5 btn btn-wide w-29 bg-primary border:none">Covert to m&sup2
    </button>
    <br></br>
   
   
    
    `;
    container.appendChild(tr)

    
})



// fourth-card


document.getElementById('fourth-btn').addEventListener('click',function(){
  
    const firstName=document.getElementById('fourth-name').innerText;

    // console.log(firstName)


    const first=document.getElementById('d1').innerText;
    const second= document.getElementById('d2').innerText;
    
    // document.getElementById('b1').value=''
    // document.getElementById('h1').value=''
  

    //console.log(first,second)


    
     let ans=triangleCalculate(first,second)
    const container=document.getElementById('table-container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${++no}</td>
    <td>${firstName}</td>
    <td>${ans}cm&sup2</td>
    
    <button class="mt-5 btn btn-wide w-29 bg-primary border:none">Covert to m&sup2
    </button>
    <br></br>
   
   
    
    `;
    container.appendChild(tr)

    
})


// fifth-card

document.getElementById('fifth-btn').addEventListener('click',function(){
  
    const firstName=document.getElementById('fifth-name').innerText;

    // console.log(firstName)


    const first=document.getElementById('p').innerText;
    const second= document.getElementById('b2').innerText;
    
    // document.getElementById('b1').value=''
    // document.getElementById('h1').value=''
  

    //console.log(first,second)


    
     let ans=triangleCalculate(first,second)
    const container=document.getElementById('table-container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${++no}</td>
    <td>${firstName}</td>
    <td>${ans}cm&sup2</td>
    
    <button class="mt-5 btn btn-wide w-29 bg-primary border:none">Covert to m&sup2
    </button>
    <br></br>
   
   
    
    `;
    container.appendChild(tr)

    
})

// six-card



function ellipseCalculate(a,b)
{
    
        let area=3.1416*a*b;


        if(intNumberCheck(area)==false)
        {
            //console.log("HELLO")
              area=area.toFixed(2);
        }

        

        return area;
    
}


document.getElementById('six-btn').addEventListener('click',function(){
  
    const firstName=document.getElementById('six-name').innerText;

    // console.log(firstName)


    const first=document.getElementById('aa').innerText;
    const second= document.getElementById('bb').innerText;
    
    // document.getElementById('b1').value=''
    // document.getElementById('h1').value=''
  

    //console.log(first,second)


    
     let ans=ellipseCalculate(first,second)
    const container=document.getElementById('table-container');
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td>${++no}</td>
    <td>${firstName}</td>
    <td>${ans}cm&sup2</td>
    
    <button class="mt-5 btn btn-wide w-29 bg-primary border:none">Covert to m&sup2
    </button>
    <br></br>
   
   
    
    `;
    container.appendChild(tr)

    
})
















// rendom-color-1






const cards = document.querySelectorAll(".rendom-color-1");

// Define a function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change the background color of each card on hover
cards.forEach(card => {
  card.addEventListener("mouseover", function() {
    card.style.backgroundColor = getRandomColor();
  });
  
  card.addEventListener("mouseout", function() {
    card.style.backgroundColor = "";
  });
});
