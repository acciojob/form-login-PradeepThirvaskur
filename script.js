
   function getFormvalue(event){
	   event.preventDefault(); 
	   // This line prevents the form from 
	   //being submitted in the default manner (i.e., no page refresh).
    let input= document.qyerySelectorAll("input[type]='text'");
	   let firstName=input[0];
	   let lastName=input[1];
	   alert(`${firstName} ${lastName}`);
    }

