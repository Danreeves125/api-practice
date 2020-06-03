// Init API
const heroApi = new Suerphero();
const ui = new UI();

const searchInput = document.getElementById('heroSearch');

searchInput.addEventListener('keyup', (e) => {
    const heroText = e.target.value;

    if(searchInput != '') {
        // HTTP call to the api
        heroApi.getHero(heroText)
            .then(data => {
                if(data.data.response == 'error') {
                    // Show Error
                    console.log('Please Enter a valid name');
                } else {
                    // Show hero/ Hero's
                    ui.heroDetails(data.data.results[0]);
                }
            });
    } else {
        // Clear Profile
        ui.clearHeros();
    }
}); 