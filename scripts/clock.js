var time = document.querySelector("#time")
var clock = document.createElement("span")
time.appendChild(clock)

function updateTime() {
    const curr = new Date();

    clock.textContent =
        curr.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });
}


function startClock() {
    updateTime();

    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000;

        setTimeout(() => {
            updateTime();
            setInterval(updateTime, 60000);
        }, delay);
    }

    startClock();