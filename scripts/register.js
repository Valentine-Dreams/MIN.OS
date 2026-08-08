if (localStorage.getItem("registered") === null) {
    localStorage.setItem("registered", "false")    
}


window.onload = registerWindow
function registerWindow() {
    if (localStorage.getItem("registered") === "false") {
        // console.log("something happened");
        
        var regWindow = document.createElement("section")
        regWindow.classList.add("regWindow")
        body.insertBefore(regWindow, container)

        var regCont = document.createElement("section")
        regCont.classList.add("regCont")
        regWindow.appendChild(regCont)

        var registerText = document.createElement("p")
        registerText.classList.add("registerText")
        registerText.innerHTML = "Please sign up :) </br><span class='registerTextSmall'>No promise it won't get databreached!</span>"
        regCont.appendChild(registerText)


        var userField = document.createElement("input")
        userField.setAttribute("type", "text")
        userField.setAttribute("placeholder", "Your chosen username here...")
        userField.classList.add("field")
        regCont.appendChild(userField)

        var logInRem = document.createElement("p")
        logInRem.classList.add("registerTextSmall", "warningText")
        logInRem.innerHTML = "Please add an username to sign up"
        regCont.appendChild(logInRem)

        document.addEventListener("click", (evt) => {
            if (userField.contains(evt.target)) {
                userField.classList.add("selected")
            } else {
                userField.classList.remove("selected")
            }
        })

        var regSubmit = document.createElement("button")
        regSubmit.textContent = "Sign Up"
        regSubmit.classList.add("submit")
        var warned = false
        regSubmit.addEventListener("click", () => {
            var username = document.querySelector(".field").value
            // console.log(username);
            
            if (username === "" && warned === false) {
                // console.log("ermmmmm");
                logInRem.style.display = "block";
                warned = true;      
            }
            if (username != "") {
                // console.log("yay");
                logInRem.style.display = "none";
                warned = false;                
                localStorage.setItem("registered", "true")
                location.reload()    
            }
            
        })
        regCont.appendChild(regSubmit)
    }    
}
