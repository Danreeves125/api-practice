class UI {
    constructor() {
        this.heroList = document.querySelector('.hero__list');
    }

    heroDetails(heros) {
        // this.heroList.innerHTML = `
        //
        // `
        this.heroList.innerHTML = `
            <li class="hero__list-item">
                ${heros.name}
            </li>
        `
    }

    showAlert(msg, className) {

    }

    clearAlert() {
        const activeAlert = document.querySelector('.alert');
    }

    clearHeros () {
        this.heroList.innerHTML = '';
    }
}