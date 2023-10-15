function Oneri() {
    var splide = document.getElementsByClassName('splide');

    new Splide(splide[0], {
        autoplay: true,
        type: "loop",
        perPage: 4,
        rewind: true,
        perMove: 1,
        focus: 'center',
        pagination: false,
        gap: 20,
        breakpoints: {
            992: {
                focus: 'start',
                perPage: 2,
                padding: '0.975rem',
            },
            500: {
                focus: 'start',
                perPage: 1,
                padding: '1rem',
            },
        },
    }).mount();
}

