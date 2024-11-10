function getFormvalue(event){
    event.preventDefault();
    let input = document.querySelectorAll("input[type='text']");
    let firstName = input[0].value;
    let lastName = input[1].value;
    alert(`${firstName} ${lastName}`);
}