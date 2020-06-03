// Init API
const heroApi = new Suerphero();

const searchInput = document.getElementById('heroSearch');

searchInput.addEventListener('keyup', (e) => {
    const heroText = e.target.value;

    if(searchInput != '') {
        // HTTP call to the api
        heroApi.getHero(heroText)
            .then(data => {
                if(data.data.response === 'error') {
                    console.log('Please Enter a valid name');
                } else {
                    // Show hero/ Hero's
                }
            });
    } else {
        // Clear Profile

    }
}); 