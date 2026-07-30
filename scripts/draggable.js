const deadZone = document.querySelectorAll(".dead-zone"); // selector for ALL elements that are gonna push away the windows

function makeDraggable (element) {
        
    
    

    //Make an element draggable (or if it has a .window-top class, drag based on the .window-top element)
    let currentPosX = 0, 
		currentPosY = 0, 
		previousPosX = 0, 
		previousPosY = 0;

		//If there is a top-bar classed element, attach to that element instead of full window
    if (element.querySelector('.top-bar')) {
        //If present, the top-bar element is where you move the parent element from
        element.querySelector('.top-bar').onmousedown = dragMouseDown;
    } 
    else {
        //Otherwise, move the element itself
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown (e) {
        //Prevent any default action on this element (you can remove if you need this element to perform its default action)
        e.preventDefault();

        //If true the element is being dragged 
        element.isDragging = true;
        //Get the mouse cursor position and set the initial previous positions to begin
        previousPosX = e.clientX;
        previousPosY = e.clientY;
        //When the mouse is let go, call the closing event
        document.onmouseup = closeDragElement;
        //call a function whenever the cursor moves
        document.onmousemove = elementDrag;
    }

    function elementDrag (e) {
        
        //Prevent any default action on this element (you can remove if you need this element to perform its default action)
        e.preventDefault();
        //Calculate the new cursor position by using the previous x and y positions of the mouse
        currentPosX = previousPosX - e.clientX;
        currentPosY = previousPosY - e.clientY;
        //Replace the previous positions with the new x and y positions of the mouse
        previousPosX = e.clientX;
        previousPosY = e.clientY;

        var newLeft = element.offsetLeft - currentPosX;
        var newTop = element.offsetTop - currentPosY;
        
        const maxLeft = element.parentElement.clientWidth - element.offsetWidth;
        const maxTop = element.parentElement.clientHeight - element.offsetHeight;

        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        newTop = Math.max(0, Math.min(newTop, maxTop));

        // const menuRect = {
        //     left: menu.offsetLeft,
        //     right: menu.offsetLeft + menu.offsetWidth,
        //     top: menu.offsetTop,
        //     bottom: menu.offsetTop + menu.offsetHeight
        // };

        element.style.left = `${newLeft}px`;
        element.style.top = `${newTop}px`;

    }
    function checkCollision() {
    const windowRect = element.getBoundingClientRect();
    
        var touchingZone = false; 

    deadZone.forEach(zone => {
        const zoneRect = {
            left: zone.offsetLeft,
            right: zone.offsetLeft + zone.offsetWidth,
            top: zone.offsetTop,
            bottom: zone.offsetTop + zone.offsetHeight
        };
    
    
    // Check overlap
    const overlapping =
        windowRect.left < zoneRect.right &&
        windowRect.right > zoneRect.left &&
        windowRect.top < zoneRect.bottom &&
        windowRect.bottom > zoneRect.top;
    
        if (overlapping) {
            touchingZone = true;

            if (!element.collisionTimer) {
                element.collisionTimer = setTimeout(() => {
                    const currentWindowRect = element.getBoundingClientRect();
                    const currentZoneRect = zone.getBoundingClientRect();

                    const stillOverlapping =
                    currentWindowRect.left < currentZoneRect.right &&
                    currentWindowRect.right > currentZoneRect.left &&
                    currentWindowRect.top < currentZoneRect.bottom &&
                    currentWindowRect.bottom > currentZoneRect.top;

                    if (stillOverlapping) {

                        element.collisionTimer = setTimeout(() => {
                            element.style.transition = "top 0.15s ease, left 0.15s ease";
                            // Push window below menu after delay
                            // newTop = zoneRect.bottom + pushDistance
                
                            element.style.top = `${zone.offsetTop + zone.offsetHeight + 20}px`;
    
                            setTimeout(() => {
                                element.style.transition = "";
                            }, 150); // same as under
    
                            element.collisionTimer = null;
                        }, 1200);
                    } 
                })
            }
        } 
    });


    if (!touchingZone) {
        // Reset timer if it leaves the menu area
        clearTimeout(element.collisionTimer);
        element.collisionTimer = null;
    }};

    function closeDragElement () {
        //Element no longer moving
        element.isDragging = false;
        if (element.checkCollision) {
            element.checkCollision();
        }
        //Stop moving when mouse button is released and release events
        document.onmouseup = null;
        document.onmousemove = null;
    }
    element.checkCollision = checkCollision;
}
