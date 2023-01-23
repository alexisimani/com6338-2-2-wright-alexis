function greet() {
   
    var name = prompt ("What is your name?", "");
    alert("Hello, " + name);
    
    var age = prompt (name + ", how old are you?", "");
    console.log (parseInt(age));

    var birthday = confirm("Have you had a birthday yet this year?");

    if ( birthday == true)
    {
        alert ("You were born in " + ((2023) - age))
    }else{
        alert("You were born in " + ((2023) - age - 1))
    }
}
