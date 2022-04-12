const settings ={
    infinite: false,
    speed:500,
    slidesToShow: 8,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
    {
        breakpoints: 1024,
        settings: {
            slidesToShow: 8,
            slidesToScroll: 2,
            infinite: true,
        },
    },
    {
        breakpoints: 768,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            initialSlide: 2,
        },
    },
    {
        breakpoints: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        },
    },
],
};

export default settings;