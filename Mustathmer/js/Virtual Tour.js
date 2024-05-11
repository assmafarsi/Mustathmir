
   
   document.addEventListener('DOMContentLoaded', () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNzbWE5IiwiYSI6ImNsdWs5NmJ1bDBqaGQyaXBoaTl3YTU5dDgifQ.9lnLNqneWEzZ6oqycu5jdQ';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [58.4059, 23.5859], // Muscat, Oman coordinates
        zoom: 10
    });

    const muscatWilayats = [
        { name: "Muttrah", lat: 23.6052, lng: 58.5934, area: "77,661 km²", population: "220,018", cities: ["City1", "City2", "City3"] },
        { name: "Bawshar", lat: 23.5583, lng: 58.4399, area: "113,790 km²", population: "412,690", cities: ["City4", "City5", "City6"] },
        { name: "Seeb", lat: 23.6684, lng: 58.1891, area: "182,145 km²", population: "543,414", cities: ["City7", "City8", "City9"] },
        { name: "Al Amrat", lat: 23.6204, lng: 58.4035, area: "48,358 km²", population: "146,869", cities: ["City10", "City11", "City12"] },
        { name: "Muscat", lat: 23.5859, lng: 58.4059, area: "20,555 km²", population: "69,008", cities: ["City13", "City14", "City15"] },
        { name: "Qurayyat", lat: 23.2531, lng: 58.7276, area: "15,727 km²", population: "63,672", cities: ["City16", "City17", "City18"] }
    ];

    let infoWindow;

    function addWilayatToList(wilayat, index) {
        const regionList = document.getElementById("regionList");
        const regionItem = document.createElement("div");
        regionItem.classList.add("region-item");
        regionItem.innerHTML = `<h3>${wilayat.name}</h3>`;
        regionItem.addEventListener("click", () => {
            map.flyTo({
                center: [wilayat.lng, wilayat.lat],
                zoom: 12
            });
            displayRegionInfo(wilayat);
        });
        regionList.appendChild(regionItem);
    }

    function displayRegionInfo(wilayat) {
        if (infoWindow) {
            infoWindow.remove();
        }
        const popupContent = `
            <div class="info-window">
                <h2>${wilayat.name}</h2>
                <p>Area: ${wilayat.area}</p>
                <p>Population: ${wilayat.population}</p>
            </div>`;
        infoWindow = new mapboxgl.Popup()
            .setLngLat([wilayat.lng, wilayat.lat])
            .setHTML(popupContent)
            .addTo(map);
    }

    muscatWilayats.forEach(addWilayatToList);

    // Region Details Popup
    map.on('click', 'region-boundary', (e) => {
        const regionName = e.features[0].properties.name;
        const region = muscatWilayats.find(w => w.name === regionName);
        displayRegionInfo(region);
    });

    // Dynamic Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const searchString = e.target.value.toLowerCase();
        const regionItems = document.querySelectorAll('.region-item');
        regionItems.forEach(item => {
            const regionName = item.textContent.toLowerCase();
            if (regionName.includes(searchString)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Route Planning (To be implemented)
    // You can integrate a route planning API and functionality here

    // Mock function to get region information
    function getRegionInfo(regionName) {
        // Mock region information
        return `Demographic data, tourism potential, investment opportunities, etc. for ${regionName}`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Event listener for Explore More button
    document.getElementById('exploreMoreBtn').addEventListener('click', () => {
        // Redirect to the new page
        window.location.href = 'Analysis regions.html'; // Replace 'new_page.html' with the URL of your new page
    });
});

