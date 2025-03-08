    // Get all popup buttons
    const popupButtons = document.querySelectorAll('.brand-img-cont');
    //Get all popups
    const popups = document.querySelectorAll('.popup');

    // Add click event listeners to each button
    popupButtons.forEach(button => {
        button.addEventListener('click', () => {
            const popupId = button.dataset.popupId;
            const popup = document.getElementById(popupId);
            popup.style.display = 'block';
        });
    });

    // Add click event listeners to each close button
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener('click', () => {
            const popup = closeButton.closest('.popup');
            popup.style.display = 'none';
        });
    });

    // Close popups when clicking outside
    window.onclick = function(event) {
        popups.forEach(popup=>{
            if (event.target == popup) {
                popup.style.display = "none";
            }
        });
    }