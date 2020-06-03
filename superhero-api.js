class Suerphero {
    constructor() {
        this.secret_key = '3416344518392928';
    }

    async getHero(hero) {
        const apiResponse = await fetch(`https://www.superheroapi.com/api.php/${this.secret_key}/search/${hero}`);

        const responseData = await apiResponse.json();

        return {
            data: responseData,
        }
    }
}

