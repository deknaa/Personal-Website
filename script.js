showPortfolio = () => {
    const imageContainer = document.getElementById('portfolio-2');

    const image = [
        'https://imgur.com/0p37ktO.png',
        'https://imgur.com/0p37ktO.png',
        'https://imgur.com/0p37ktO.png'
    ];

    image.forEach(url => {
        const imgTag = document.createElement('img');
        imgTag.src = url;
        imgTag.style.width = '470px';
        imgTag.style.borderRadius = '10px';
        imageContainer.appendChild(imgTag);
    });
};