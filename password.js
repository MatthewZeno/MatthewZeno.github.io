function checkPassword(){
    // capture user entered password from our input element
        var passwordBoxObject =  document.getElementById("passwordBox");
        var passwordEntered = passwordBoxObject.value;
        console.log("user entered password",passwordEntered)
        /*console.log  can be used for debugging 
        and .dir is used to see the value and much more */

        // console.log(passwordBoxObject)
        // console.dir(passwordBoxObject)

    // check if the password is correct 
        var sitePassword = 'codeclub';
        if (passwordEntered == sitePassword){
            // allow navigation
            console.log("Allow");
            window.location.assign("members.html");
        }else {
            // block navigation
            console.log("Block");

            // add new style rule to the incorrect_password element
            var paraElem = document.getElementById("incorrect-password").style.
            color = "red"

            // adding text to the incorrect element
            // var paraElem = document.getElementById("incorrect-password");
            // paraElem.innerHTML = "Incorrect password. Please try again..."

            var paraElem = document.getElementById("incorrect-password")
            .innerHTML = "Incorrect password. Please try again...";
        }
    // allow or block user navigation to the members page
}

           
            /* declaring a object and properties within  it */
            // var person = {
            //     name:"Harry",
            //     age:23,
            //     sayHello() {
            //         alert("Hello!");
            //     }
            // };

            // person.sayHello();
