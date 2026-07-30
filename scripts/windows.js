// const container = document.querySelector("#container");
// const menu = document.querySelector("#bar");
// const svgNS = "http://www.w3.org/2000/svg";
// var maximized = false;
// var activeWindow = null;
// const body = document.querySelector("body");


// // creates a default window when the event fires (each unique window will have its own variant of this code!)
// function create_default() {
//     const window_container = document.createElement("section");
//     window_container.classList.add("window");
//     const top_bar = document.createElement("section");
//     top_bar.classList.add("window_top", "top-bar");
//     const window_body = document.createElement("section");
//     window_body.classList.add("window_body");
//     container.appendChild(window_container);
//     window_container.appendChild(top_bar);
//     window_container.appendChild(window_body);
//     // adding window title and icon
//     const data_container = document.createElement("section")
//     data_container.classList.add("top-bar", "data_container")
//     top_bar.appendChild(data_container)
//     const image = document.createElement("img")
//     image.src = "https://picsum.photos/22"
//     data_container.appendChild(image)
//     const title = document.createElement("p")
//     title.innerHTML = "Default"
//     data_container.appendChild(title)
//     // adding an element to the bar for the window
//     const bar_icon = document.createElement("section")
//     bar_icon.classList.add("default_window", "open")
//     menu.appendChild(bar_icon)
//     const icon_text = document.createElement("p");
//     icon_text.classList.add("text")
//     icon_text.innerHTML=title.innerHTML
//     bar_icon.appendChild(icon_text)
//     requestAnimationFrame(() => {
//         bar_icon.classList.remove("open")
//     });
//     // joining the icon and the window itself so they are connected
//     window_container.barIcon = bar_icon;
//     bar_icon.windowContainer = window_container

//     // adding on the buttons
//     button_mini.appendChild(mini);

//     button_maximize.appendChild(maximize1);
//     button_maximize.appendChild(maximize2);

//     button_area.appendChild(button_close);

//     top_bar.appendChild(button_area);
    
//     // assuring the window doesn't get created inside a menu block making it immovable
//     const menuHeight = menu.offsetHeight;
//     const topPos = menuHeight + Math.random() * (container.clientHeight - menuHeight - window_container.offsetHeight);
//     const leftPos = Math.random() * (container.clientWidth - window_container.offsetWidth);
//     window_container.style.top = `${topPos}px`;
//     window_container.style.left = `${leftPos}px`;
//     requestAnimationFrame(() => {
//         window_container.classList.add("open");
//     });
//     // makes it draggable.. duh
//     makeDraggable(window_container);

//     // adding buttons (without functionality)
// const button_area = document.createElement("section");
// button_area.classList.add("top-bar", "button_area")

// // the minimize button (still no functionality)
// const button_mini = document.createElementNS(svgNS, "svg");
// button_mini.setAttribute("viewBox", "0 0 24 24");
// button_mini.setAttribute("width", "16");
// button_mini.setAttribute("height", "16");
// button_mini.setAttribute("fill", "white");

// const mini = document.createElementNS(svgNS, "line");
// mini.setAttribute("x1", "0");
// mini.setAttribute("y1", "22");
// mini.setAttribute("x2", "24");
// mini.setAttribute("y2", "22");
// mini.setAttribute("stroke", "white");
// mini.setAttribute("stroke-width", "4");
// mini.setAttribute("stroke-linecap", "butt");

// mini.classList.add("window_buttons")
// button_mini.appendChild(mini)
// button_area.appendChild(button_mini);

// // the maximize or whatever button erm... (still no functionality)
// const button_maximize = document.createElementNS(svgNS, "svg");
// button_maximize.setAttribute("viewBox", "0 0 24 24");
// button_maximize.setAttribute("width", "16");
// button_maximize.setAttribute("height", "16");
// button_maximize.setAttribute("fill", "white");

// const maximize1 = document.createElementNS(svgNS, "path");
// maximize1.setAttribute("d", "M24 22L0 22M0 2L24 2");
// maximize1.setAttribute("stroke", "white");
// maximize1.setAttribute("stroke-width", "4");
// maximize1.setAttribute("stroke-linecap", "butt");

// const maximize2 = document.createElementNS(svgNS, "path");
// maximize2.setAttribute("d", "M22 22L22 2M2 22L2 2");
// maximize2.setAttribute("stroke", "white");
// maximize2.setAttribute("stroke-width", "4");
// maximize2.setAttribute("stroke-linecap", "butt");

// maximize1.classList.add("window_buttons")
// maximize2.classList.add("window_buttons")

// button_maximize.appendChild(maximize1)
// button_maximize.appendChild(maximize2)
// button_area.appendChild(button_maximize)
// // the close button (you get it by now)
// const button_close = document.createElementNS(svgNS, "svg");
// button_close.setAttribute("viewBox", "0 0 24 24");
// button_close.setAttribute("width", "16");
// button_close.setAttribute("height", "16");
// button_close.setAttribute("fill", "white");

// const close_btn = document.createElementNS(svgNS, "path");
// close_btn.setAttribute("d", "M22 2L2 22M2 2l20 20");
// close_btn.setAttribute("stroke", "white");
// close_btn.setAttribute("stroke-width", "4");
// close_btn.setAttribute("stroke-linecap", "butt");

// close_btn.classList.add("window_buttons")
// button_close.appendChild(close_btn)
// }
// // creates a special apps window when the event fires
// function create_apps() {
//     const overlay = document.createElement("section")
//     overlay.classList.add("overlay");
//     body.appendChild(overlay)
//     body.insertBefore(overlay, container);
//     const window_container = document.createElement("section");
//     window_container.classList.add("window_apps");
//     const top_bar = document.createElement("section");
//     top_bar.classList.add("window_top", "top-bar");
//     const window_body = document.createElement("section");
//     window_body.classList.add("window_body_apps");
//     container.appendChild(window_container);
//     window_container.appendChild(top_bar);
//     window_container.appendChild(window_body);
//     // adding window title and icon
//     const data_container = document.createElement("section")
//     data_container.classList.add("top-bar", "data_container")
//     top_bar.appendChild(data_container)
//     const image = document.createElement("img")
//     image.src = "https://picsum.photos/22"
//     data_container.appendChild(image)
//     const title = document.createElement("p")
//     title.innerHTML = "Apps"
//     data_container.appendChild(title)
//     // adding an element to the bar for the window
//     const bar_icon = document.createElement("section")
//     bar_icon.classList.add("default_window", "open")
//     menu.appendChild(bar_icon)
//     const icon_text = document.createElement("p");
//     icon_text.classList.add("text")
//     icon_text.innerHTML=title.innerHTML
//     bar_icon.appendChild(icon_text)
//     requestAnimationFrame(() => {
//         bar_icon.classList.remove("open")
//     });
//     // joining the icon and the window itself so they are connected
//     window_container.barIcon = bar_icon;
//     bar_icon.windowContainer = window_container
    
//     // assuring the window doesn't get created inside a menu block making it immovable
//     const menuHeight = menu.offsetHeight;
//     const topPos = menuHeight + Math.random() * (container.clientHeight - menuHeight - window_container.offsetHeight);
//     const leftPos = Math.random() * (container.clientWidth - window_container.offsetWidth);
//     window_container.style.top = `${topPos}px`;
//     window_container.style.left = `${leftPos}px`;
//     requestAnimationFrame(() => {
//         window_container.classList.add("open");
//     });
//     // makes it draggable.. duh
//     makeDraggable(window_container);
//     // adding buttons (without functionality)
//     const button_area = document.createElement("section");
//     button_area.classList.add("top-bar", "button_area")

//     // the minimize button (still no functionality)
//     const button_mini = document.createElementNS(svgNS, "svg");
//     button_mini.setAttribute("viewBox", "0 0 24 24");
//     button_mini.setAttribute("width", "16");
//     button_mini.setAttribute("height", "16");
//     button_mini.setAttribute("fill", "white");

//     const mini = document.createElementNS(svgNS, "line");
//     mini.setAttribute("x1", "0");
//     mini.setAttribute("y1", "22");
//     mini.setAttribute("x2", "24");
//     mini.setAttribute("y2", "22");
//     mini.setAttribute("stroke", "white");
//     mini.setAttribute("stroke-width", "4");
//     mini.setAttribute("stroke-linecap", "butt");

//     mini.classList.add("window_buttons")
//     button_mini.appendChild(mini)
//     button_area.appendChild(button_mini);

//     // the maximize or whatever button erm... (still no functionality)
//     const button_maximize = document.createElementNS(svgNS, "svg");
//     button_maximize.setAttribute("viewBox", "0 0 24 24");
//     button_maximize.setAttribute("width", "16");
//     button_maximize.setAttribute("height", "16");
//     button_maximize.setAttribute("fill", "white");

//     const maximize1 = document.createElementNS(svgNS, "path");
//     maximize1.setAttribute("d", "M24 22L0 22M0 2L24 2");
//     maximize1.setAttribute("stroke", "white");
//     maximize1.setAttribute("stroke-width", "4");
//     maximize1.setAttribute("stroke-linecap", "butt");

//     const maximize2 = document.createElementNS(svgNS, "path");
//     maximize2.setAttribute("d", "M22 22L22 2M2 22L2 2");
//     maximize2.setAttribute("stroke", "white");
//     maximize2.setAttribute("stroke-width", "4");
//     maximize2.setAttribute("stroke-linecap", "butt");

//     maximize1.classList.add("window_buttons")
//     maximize2.classList.add("window_buttons")

//     button_maximize.appendChild(maximize1)
//     button_maximize.appendChild(maximize2)
//     button_area.appendChild(button_maximize)
//     // the close button (you get it by now)
//     const button_close = document.createElementNS(svgNS, "svg");
//     button_close.setAttribute("viewBox", "0 0 24 24");
//     button_close.setAttribute("width", "16");
//     button_close.setAttribute("height", "16");
//     button_close.setAttribute("fill", "white");

//     const close_btn = document.createElementNS(svgNS, "path");
//     close_btn.setAttribute("d", "M22 2L2 22M2 2l20 20");
//     close_btn.setAttribute("stroke", "white");
//     close_btn.setAttribute("stroke-width", "4");
//     close_btn.setAttribute("stroke-linecap", "butt");

//     close_btn.classList.add("window_buttons")
//     button_close.appendChild(close_btn)

//     // adding on the buttons
//     top_bar.appendChild(button_area)
//     button_area.appendChild(button_close);

//     // adding functionality to the buttons!!!!
//     button_mini.addEventListener("click", minimize)
//     button_close.addEventListener("click", shut)
//     button_maximize.addEventListener("click", resize)
//     bar_icon.addEventListener("click", maximize);


//     function minimize() {
//         window_container.style.display = "none";
//         overlay.style.display = "none";
//     }
//     function maximize() {
//         window_container.style.display = "block";
//     }
//     function shut() {
//         window_container.classList.add("close")
//         window_container.addEventListener("transitionend", () => {
//             window_container.remove();
//         }, { once: false });

//         bar_icon.classList.add("close")
//         bar_icon.addEventListener("transitionend", () => {
//             bar_icon.remove();
//         }, { once: false });
//         overlay.remove();
//     }
//     function resize() {
//         const size = window_container.getBoundingClientRect();
//         // catching the original window size (before changing)
//         if (!window_container.dataset.originalWidth) {
//             window_container.dataset.originalWidth = size.width;
//             window_container.dataset.originalHeight = size.height;    
//         }
//         // changing the size.. yeah
//         if (maximized) {
//             window_container.style.width = "90%";
//             window_container.style.height = "90%";
//         } else {
//             window_container.style.width = `${window_container.dataset.originalWidth}px`;
//             window_container.style.height = `${window_container.dataset.originalHeight}px`;
//         }

//         maximized = !maximized;
//     }
// };
//     // window focusing
//     document.addEventListener("mousedown", (e) => {
//         // const clickedWindow = e.target.closest(".window");

//         // if (activeWindow && activeWindow !== clickedWindow) {
//         //     activeWindow.classList.remove("active")
//         // }

//         // if (clickedWindow) {
//         //     clickedWindow.classList.add("active")
//         // }

//         // activeWindow = clickedWindow

//         var targetWindow = e.target.closest(".window_apps");

//         if (!targetWindow) {
//             const icon = e.target.closest(".default_window");
//             if (icon) {
//                 targetWindow = icon.windowContainer;
//             }
//         }
//         document.querySelectorAll(".window_apps").forEach(window => {
//             if (window === targetWindow) {
//                 window.classList.add("active");
//             } else {
//                 window.classList.remove("active");
//             }
//         });
//     });