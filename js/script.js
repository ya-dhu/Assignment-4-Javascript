function fetchCoordinates() {
    var address = document.getElementById("address").value;
    var apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyCL1XRrTaL3gyWsZdfKEVEyzSp--sZACn0`;
    // Fetches data from Google Maps GeocodingAPI
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === "OK" && data.results.length > 0) {
                var location = data.results[0].geometry.location;
                var formattedAddress = data.results[0].formatted_address;
                var placeId = data.results[0].place_id;
                var types = data.results[0].types.join(", ");
                // Display coordinates
                var coordinatesDiv = document.getElementById("coordinates");
                coordinatesDiv.innerHTML = `
                <p><strong>Address:</strong> ${formattedAddress}</p>
                <p><strong>Latitude:</strong> ${location.lat}</p>
                <p><strong>Longitude:</strong> ${location.lng}</p>
                <p><strong>Place ID:</strong> ${placeId}</p>
                <p><strong>Types:</strong> ${types}</p>
            `;
            } else {
                throw new Error("Address not found");
            }
        })
        .catch(error => {console.error('Error fetching data:', error);
            var coordinatesDiv = document.getElementById("coordinates");
            coordinatesDiv.textContent = "Error: Address not found";
        });
}
function fetchStudentInfo() {
    // Simulating fetching student info from an API
    var studentInfo = {
        id: 200549499,
        name: "Yadhu Krishna Kanjangad Santhosh"
    };

    // Display student info
    var studentInfoParagraph = document.getElementById("studentInfo");
    studentInfoParagraph.innerHTML = `<strong>Student ID:</strong> ${studentInfo.id}, <strong>Name:</strong> ${studentInfo.name}`;
}
let map;

function initMap() {
    // Center the map on a specific location
    const center = { lat: 40.7128, lng: -74.006 };

    // Create the map with center and zoom level
    map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 8,
    });

    // Add a marker to the map
    const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: "New York City",
    });
}

// Create a function to initialize the map
function initMap() {
    // Check if the Google Maps API is already loaded
    if (typeof google === 'object' && typeof google.maps === 'object') {
        // Google Maps API is already loaded, initialize the map
        initializeMap();
    } else {
        // Google Maps API is not loaded, load it dynamically
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCL1XRrTaL3gyWsZdfKEVEyzSp--sZACn0&callback=initializeMap`;
        script.defer = true;
        script.async = true;
        window.initializeMap = initializeMap; // Callback function
        document.head.appendChild(script);
    }
}

// Function to initialize the map
function initializeMap() {
    // Center the map on a specific location
    const center = { lat: 44.38935559999999, lng:-79.6903316};

    // Create the map with center and zoom level
    const map = new google.maps.Map(document.getElementById("map"), {
        center: center,
        zoom: 8,
    });

    // Add a marker to the map
    const marker = new google.maps.Marker({
        position: center,
        map: map,
        title: "Barrie",
    });
}

// Call the initMap function to initialize the map
initMap();
