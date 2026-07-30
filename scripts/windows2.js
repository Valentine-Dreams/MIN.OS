// const container = document.querySelector("#container");
// const menu = document.querySelector("#bar");
// const svgNS = "http://www.w3.org/2000/svg";
// var maximized = false;
// var activeWindow = null;
// const body = document.querySelector("body");

// function createWindow(titleText, windowClass, bodyClass) {
//     const window_container = document.createElement("section");
//     window_container.classList.add(windowClass);

//     const top_bar = document.createElement("section");
//     top_bar.classList.add("window_top", "top-bar");

//     const window_body = document.createElement("section");
//     window_body.classList.add(bodyClass);

//     window_container.append(top_bar, window_body);
//     container.appendChild(window_container);

//     return { window_container, top_bar, window_body };
// }
// function createTitleBar(top_bar, titleText, imageSrc) {
//     const data_container = document.createElement("section");
//     data_container.classList.add("top-bar", "data_container");

//     const image = document.createElement("img");
//     image.src = imageSrc;

//     const title = document.createElement("p");
//     title.textContent = titleText;

//     data_container.append(image, title);
//     top_bar.appendChild(data_container);

//     return title;
// }
// function createTaskbarIcon(titleText, window_container) {
//     const bar_icon = document.createElement("section");
//     bar_icon.classList.add("default_window", "open");

//     const text = document.createElement("p");
//     text.classList.add("text");
//     text.textContent = titleText;

//     bar_icon.appendChild(text);
//     menu.appendChild(bar_icon);

//     requestAnimationFrame(() => {
//         bar_icon.classList.remove("open");
//     });

//     window_container.barIcon = bar_icon;
//     bar_icon.windowContainer = window_container;

//     return bar_icon;
// }
// function createWindowButtons() {
//     const button_area = document.createElement("section");
//     button_area.classList.add("button_area");

//     const button_mini = createMinimizeButton();
//     const button_maximize = createMaximizeButton();
//     const button_close = createCloseButton();

//     button_area.append(
//         button_mini,
//         button_maximize,
//         button_close
//     );

//     return {
//         button_area,
//         button_mini,
//         button_maximize,
//         button_close
//     };
// }
// function randomizePosition(window_container) {
//     const menuHeight = menu.offsetHeight;

//     const top =
//         menuHeight +
//         Math.random() *
//         (container.clientHeight -
//             menuHeight -
//             window_container.offsetHeight);

//     const left =
//         Math.random() *
//         (container.clientWidth -
//             window_container.offsetWidth);

//     window_container.style.top = `${top}px`;
//     window_container.style.left = `${left}px`;
// }
// function attachWindowEvents(
//     window_container,
//     overlay,
//     bar_icon,
//     controls
// ) {
//     controls.button_close.addEventListener("click", () => shut(window_container, overlay, bar_icon));

//     controls.button_mini.addEventListener("click", () => minimize(window_container, overlay));

//     controls.button_maximize.addEventListener("click", () => resize(window_container));

//     bar_icon.addEventListener("click", () => maximize(window_container));
// }
// function create_apps() {
//     function createOverlay();
//     const overlay = document.createElement("section");
//     overlay.classList.add("overlay");

//     body.insertBefore(overlay, container);

//     return overlay;

//     const {
//         window_container,
//         top_bar,
//         window_body
//     } = createWindow(
//         "Apps",
//         "window_apps",
//         "window_body_apps"
//     );

//     createTitleBar(
//         top_bar,
//         "Apps",
//         "https://picsum.photos/22"
//     );

//     const controls = createWindowButtons();
//     top_bar.appendChild(controls.button_area);

//     const bar_icon = createTaskbarIcon(
//         "Apps",
//         window_container
//     );

//     randomizePosition(window_container);

//     makeDraggable(window_container);

//     attachWindowEvents(
//         window_container,
//         overlay,
//         bar_icon,
//         controls
//     );

//     return {
//         window_container,
//         window_body
//     };
// }