document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    document.getElementById("lastModified").textContent = document.lastModified;

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Add three more temple objects with same structure
        {
            templeName: "Rome Italy",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 41522,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/1-Rome-Temple-2160936.jpg"
        },
        {
            templeName: "Tokyo Japan",
            location: "Tokyo, Japan",
            dedicated: "1980, October, 27",
            area: 52537,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/800x1280/tokyo_japan_temple-evening.jpeg"
        },
        {
            templeName: "Salt Lake City Utah",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253015,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/slctemple7.jpg"
        },
    ];

    const templeContainer = document.getElementById('temple-container');

    const displayTemples = (templesToDisplay) => {
        templeContainer.innerHTML = '';
        templesToDisplay.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.classList.add('temple-card');
            templeCard.innerHTML = `
                <figure>
                    <img src="${temple.imageUrl}" alt="${temple.templeName}">
                    <figcaption>
                        <h3>${temple.templeName}</h3>
                        <p><strong>Location:</strong> ${temple.location}</p>
                        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                        <p><strong>Size:</strong> ${temple.area} sq ft</p>
                    </figcaption>
                </figure>
            `;
            templeContainer.appendChild(templeCard);
        });
    };

    displayTemples(temples);

    const filterButtons = document.querySelectorAll('nav ul li a');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.id;
            let filteredTemples;

            switch (filter) {
                case 'filter-old':
                    filteredTemples = temples.filter(temple => new Date(temple.dedicated.split(",")[0]) < new Date(2000, 0, 1));
                    break;
                case 'filter-new':
                    filteredTemples = temples.filter(temple => new Date(temple.dedicated.split(",")[0]) >= new Date(2000, 0, 1));
                    break;
                case 'filter-large':
                    filteredTemples = temples.filter(temple => temple.area > 50000);
                    break;
                case 'filter-small':
                    filteredTemples = temples.filter(temple => temple.area <= 50000);
                    break;
                default:
                    filteredTemples = temples;
            }

            displayTemples(filteredTemples);
        });
    });
});
