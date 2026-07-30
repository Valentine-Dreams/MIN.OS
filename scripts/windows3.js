const container = document.querySelector("#container");
const menu = document.querySelector("#bar");
const creator = document.querySelector("#menu")
const body = document.querySelector("body");
let activeWindow = null;
let zIndex = 1;

function focusWindow(window) {

    if (activeWindow) {
        activeWindow.classList.remove("active");
    }


    zIndex++;

    window.style.zIndex = zIndex;
    window.classList.add("active");

    activeWindow = window;
}

const svgNS = "http://www.w3.org/2000/svg";

function createWindowButtons() {

    const button_area = document.createElement("section");
    button_area.classList.add(
        "top-bar",
        "button_area"
    );


    // minimize button
    const button_mini = document.createElementNS(svgNS, "svg");
    button_mini.setAttribute("viewBox", "0 0 24 24");
    button_mini.setAttribute("width", "16");
    button_mini.setAttribute("height", "16");

    const mini_line = document.createElementNS(svgNS, "line");
    mini_line.setAttribute("x1", "0");
    mini_line.setAttribute("y1", "22");
    mini_line.setAttribute("x2", "24");
    mini_line.setAttribute("y2", "22");
    mini_line.setAttribute("stroke", "white");
    mini_line.setAttribute("stroke-width", "4");

    button_mini.appendChild(mini_line);

    // maximize button
    const button_maximize = document.createElementNS(svgNS, "svg");
    button_maximize.setAttribute("viewBox", "0 0 24 24");
    button_maximize.setAttribute("width", "16");
    button_maximize.setAttribute("height", "16");

    const max_path1 = document.createElementNS(svgNS, "path");
    max_path1.setAttribute("d", "M24 22L0 22M0 2L24 2");
    max_path1.setAttribute("width", "16");
    max_path1.setAttribute("height", "16");
    max_path1.setAttribute("stroke", "white");
    max_path1.setAttribute("stroke-width", "4");

    const max_path2 = document.createElementNS(svgNS, "path");
    max_path2.setAttribute("d", "M22 22L22 2M2 22L2 2");
    max_path2.setAttribute("width", "16");
    max_path2.setAttribute("height", "16");
    max_path2.setAttribute("stroke", "white");
    max_path2.setAttribute("stroke-width", "4");

    button_maximize.appendChild(max_path1);
    button_maximize.appendChild(max_path2);



    // close button
    const button_close = document.createElementNS(svgNS, "svg");
    button_close.setAttribute("viewBox", "0 0 24 24");
    button_close.setAttribute("width", "16");
    button_close.setAttribute("height", "16");

    const close_path = document.createElementNS(svgNS, "path");
    close_path.setAttribute("d", "M22 2L2 22M2 2l20 20");
    close_path.setAttribute("width", "16");
    close_path.setAttribute("height", "16");
    close_path.setAttribute("stroke", "white");
    close_path.setAttribute("stroke-width", "4");


    button_close.append(
        close_path
    );



    button_area.append(
        button_mini,
        button_maximize,
        button_close
    );


    return {
        area: button_area,
        mini: button_mini,
        maximize: button_maximize,
        close: button_close
    };
}

function minimizeWindow(window) {
    window.style.display = "none";

    if (window.overlay) {
        window.overlay.style.display = "none";
    }
}


function restoreWindow(window) {
    window.style.display = "block";

    if (window.overlay) {
        window.overlay.style.display = "block";
    }
}


function closeWindow(window) {

    console.log("closed", window);
    

    if (window.music) {
        window.music.pause();
        window.music.currentTime = 0;
        window.music.src = " ";
    }

    window.classList.add("close");

    window.addEventListener("transitionend", () => {
        window.remove();
    }, { once:true });


    if (window.barIcon) {

        window.barIcon.classList.add("close");

        window.barIcon.addEventListener("transitionend", () => {
            window.barIcon.remove();
        }, { once:true });

    }


    if (window.overlay) {
        window.overlay.remove();
    }
}


function resizeWindow(window) {

    const size = window.getBoundingClientRect();


    if (!window.dataset.originalWidth) {

        window.dataset.originalWidth = size.width;
        window.dataset.originalHeight = size.height;

    }


    if (!window.maximized) {

        window.style.width = "90%";
        window.style.height = "90%";
        window.style.borderRadius = "0";

        window.maximized = true;

    } else {

        window.style.width =
            `${window.dataset.originalWidth}px`;

        window.style.height =
            `${window.dataset.originalHeight}px`;

        window.maximized = false;
        window.style.borderRadius = "24px 0px";

    }

}

    

function createWindow(titleText, windowClass, bodyClass, useOverlay = false, allowSpecial = true, musicFile = null, icon = "https://picsum.photos/22", showMini = true, showResize = true, showClose = true) {

        const special = Math.random() < 0.02;
        // 

    if (allowSpecial && special) {
        createShutdownWindow();
        return;
    }

    console.log("creating window:", titleText);

    // optional overlay
    let overlay = null;

    if (useOverlay) {
        overlay = document.createElement("section");
        overlay.classList.add("overlay");
        body.insertBefore(overlay, container);
    }


    // create window
    const window_container = document.createElement("section");
    window_container.classList.add("window", windowClass);


    // create sections
    const top_bar = document.createElement("section");
    top_bar.classList.add("window_top", "top-bar");


    const window_body = document.createElement("section");
    window_body.classList.add(bodyClass);


    // assemble window
    window_container.append(
        top_bar,
        window_body
    );

    container.appendChild(window_container);

    // music
    if (musicFile) {
        const music = new Audio(musicFile);
        music.loop = true;
        music.play();
    
        window_container.music = music;
    }

    // title area
    const data_container = document.createElement("section");
    data_container.classList.add(
        "top-bar",
        "data_container"
    );


    const image = document.createElement("img");
    image.src = icon


    const title = document.createElement("p");
    title.textContent = titleText;


    data_container.append(
        image,
        title
    );

    const buttons = createWindowButtons();

    if (!showClose) {
        buttons.close.remove()
    }
    if (!showResize) {
        buttons.maximize.remove()
    }
    if (!showMini) {
        buttons.mini.remove()
    }

    top_bar.appendChild(data_container);
    top_bar.appendChild(buttons.area);



    // taskbar icon
    const bar_icon = document.createElement("section");
    bar_icon.classList.add(
        "default_window",
        "open"
    );


    const icon_text = document.createElement("p");
    icon_text.classList.add("text");
    icon_text.textContent = titleText;


    bar_icon.appendChild(icon_text);
    menu.appendChild(bar_icon);


    requestAnimationFrame(() => {
        bar_icon.classList.remove("open");
    });



    // link them together
    window_container.barIcon = bar_icon;
    bar_icon.windowContainer = window_container;



    // spawn position
    const menuHeight = menu.offsetHeight;

    const top =
        menuHeight +
        Math.random() *
        (
            container.clientHeight -
            menuHeight -
            window_container.offsetHeight
        );


    const left =
        Math.random() *
        (
            container.clientWidth -
            window_container.offsetWidth
        );


    window_container.style.top = `${top}px`;
    window_container.style.left = `${left}px`;



    // existing drag system
    makeDraggable(window_container);

    window_container.addEventListener("mousedown", () => {
        focusWindow(window_container);
    });
    
    
    bar_icon.addEventListener("mousedown", () => {
    
        restoreWindow(window_container);
        focusWindow(window_container);
    
    });

    // opening animation
    requestAnimationFrame(() => {
        window_container.classList.add("open");
        focusWindow(window_container);
    });

    window_container.controls = buttons;

    window_container.maximized = false;

    if (showClose) {
        buttons.close.addEventListener("click", () => {
            closeWindow(window_container);
            if (overlay) {
                overlay.remove()    
            }
        });
    }

    if (showMini) {
        buttons.mini.addEventListener("click", () => {
            minimizeWindow(window_container);
        });
    }

    if (showResize) {
        buttons.maximize.addEventListener("click", () => {
            resizeWindow(window_container);
        });
    }


    bar_icon.addEventListener("click", () => {
        restoreWindow(window_container);
    });

    return {
        element: window_container,
        body: window_body,
        topBar: top_bar,
        icon: bar_icon,
        overlay: overlay
    };
}

var canCreate = true;

creator.onclick = () => {

    if (!canCreate) return;
    
    
    createWindow(
        "Default",
        "window",
        "window_body"
    );

};

if (localStorage.getItem("eggClaimed") === "true") {
    var egg_cont = document.createElement("section")
    egg_cont.classList.add("egg_cont")
    var egg = document.createElement("img");
    egg.src = "assets/man/Egg_item.png"
    egg.classList.add("egg_elem")
    time.appendChild(egg)
}


// apps.onclick = () => {

//     createWindow(
//         "Apps",
//         "window_apps",
//         "window_body_apps",
//         true
//     );

// };

const a = createWindow(
    "Window A",
    "window",
    "window_body"
);

const b = createWindow(
    "Window B",
    "window",
    "window_body",
    true
);


function createShutdownWindow() {

    if (localStorage.getItem("manMet") === "true") {
        return;
    }

    canCreate = false;

    // Close every existing window
    document.querySelectorAll(".window, .window_apps, .overlay").forEach(win => {
        win.remove();
    });

    // Remove taskbar icons
    document.querySelectorAll(".default_window").forEach(icon => {
        icon.remove();
    });

    // Create the special window
    const manWindow = createWindow(
        "???",
        "window_man",
        "window_body_man",
        true,
        false,
        "assets/man/Man_music.ogg",
        "assets/man/SOUL.png",
        false,
        false,
        false,
    );
    

    var tree_container = document.createElement("section")
    tree_container.classList.add("tree_cont")
    manWindow.body.appendChild(tree_container)

    var tree = document.createElement("img")
    tree.classList.add("tree")
    tree.src = "assets/man/Man_overworld_tree.gif"
    tree_container.appendChild(tree)
    manWindow.element.addEventListener("click", () => {
        if (manWindow.element.music) {
            manWindow.element.music.play()
        }
    })

    function updateTypingAnimation() {
        const length = man_text.textContent.length;
    
        // milliseconds per character
        const speed = 50;
    
        man_text.style.setProperty("--steps", length);
        man_text.style.setProperty("--duration", `${length * speed}ms`);
    }

    var man_container = document.createElement("section")
    man_container.classList.add("man_typing")
    tree_container.appendChild(man_container)
    var man_text = document.createElement("span")
    man_text.classList.add("man_typing")
    man_container.appendChild(man_text)
    man_text.innerHTML = "* ( He is behind the tree. )"
    
    var man_lines = [
        "* ( Well, there is a man here. )",
        "* ( He offered you something. )",
        "* ( You received an Egg. )",
        "* ( Well, there isn't a man here. )",
        "* ( It's a tree. )"
    ]
    var lines_read = -1

    function startTypingSound(text) {

        const typingBlip = new Audio("assets/man/snd-text.ogg");
    
        const duration =
            parseFloat(getComputedStyle(man_text).getPropertyValue("--duration"));
    
        const delay = duration / text.length;
    
        const interval = setInterval(() => {
            typingBlip.currentTime = 0;
            typingBlip.play();
        }, delay);
    
        man_text.typingInterval = interval;
    }
    
    function stopTypingSound() {
        clearInterval(man_text.typingInterval);
    }

    tree.addEventListener("click", () => {
        // debug feature im deciding to keep lmao
        // console.log(lines_read);
        man_text.addEventListener("animationend", stopTypingSound)
        man_text.classList.remove("animated")
        void man_text.offsetWidth;
        man_text.classList.add("animated")
        man_text.innerHTML = man_lines[lines_read] 
        updateTypingAnimation()
        startTypingSound(man_text.textContent)
        if (lines_read === 1) {
            man_text.addEventListener("animationend", stopTypingSound)
            man_text.classList.remove("animated")
            void man_text.offsetWidth;
            man_text.classList.add("animated")
            man_text.innerHTML = "<span class='heart'>Yes</span> <span class='wrong'>No</span>"
            updateTypingAnimation()
            stopTypingSound(man_text.textContent)
            const heart = man_text.querySelector(".heart")
            const wrong = man_text.querySelector(".wrong")
            var heart_obj = document.createElement("img")
            heart.classList.add("heart_obj")
            heart_obj.src = "assets/man/SOUL.png"
            man_text.addEventListener("animationend", stopTypingSound)
            man_text.classList.remove("animated")
            void man_text.offsetWidth;
            heart.addEventListener("mouseenter", () => {
                heart.appendChild(heart_obj)
            })
            heart.addEventListener("mouseleave", () => {
                heart_obj.remove();
            })
            wrong.addEventListener("mouseenter", () => {
                wrong.appendChild(heart_obj)
            }) 
            wrong.addEventListener("mouseleave", () => {
                heart_obj.remove();
            })
            heart.addEventListener("click", () => {
                startTypingSound(man_text.textContent);
                man_text.classList.add("animated");
                lines_read++;
                
                const accept = new Audio("assets/man/egg-gained.ogg");

                accept.play();

                man_text.innerHTML = man_lines[lines_read];
                updateTypingAnimation();

                localStorage.setItem("manMet", "true");
                console.log(localStorage.getItem("manMet"));
                localStorage.setItem("eggClaimed", "true");
                console.log(localStorage.getItem("eggClaimed"));
                canCreate = true;
            })
            wrong.addEventListener("click", () => {
                startTypingSound(man_text.textContent);
                man_text.classList.add("animated");
                lines_read = 3;

                man_text.innerHTML = man_lines[lines_read];
                updateTypingAnimation();

                localStorage.setItem("manMet", "true");
                console.log(localStorage.getItem("manMet"));
                localStorage.setItem("eggClaimed", "false");
                console.log(localStorage.getItem("eggClaimed"));

                canCreate = true;
            })
            return;
        } else if(lines_read <= 3) {
            lines_read++;
            man_text.innerHTML = man_lines[lines_read];
            updateTypingAnimation()
            
        } else{
            lines_read = 3
            man_text.innerHMTL = "* ( It's a tree. )"
            updateTypingAnimation()
            location.reload()
        }
    })    
}

