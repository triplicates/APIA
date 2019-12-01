let parking = document.querySelectorAll('.section-main-inner__parkingBlock');

    parking.forEach(function(parks){
        parks.addEventListener('click', () =>{
            let menu = document.querySelector('.menu-info');
                menu.style.display = 'block';
        })
    })