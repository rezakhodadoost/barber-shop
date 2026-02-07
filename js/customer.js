function findNearestBarber() {
    const barber = JSON.parse(localStorage.getItem("barber"));

    if (!barber) {
        alert("هیچ آرایشگاهی ثبت نشده");
        return;
    }

    navigator.geolocation.getCurrentPosition(pos => {
        const d = calcDistance(
            pos.coords.latitude,
            pos.coords.longitude,
            barber.lat,
            barber.lng
        );

        document.getElementById("result").innerHTML = `
        🏪 ${barber.shop}<br>
        📞 ${barber.phone}<br>
        📍 ${barber.address}<br>
        📏 فاصله: ${d.toFixed(2)} کیلومتر
        `;
    });
}

function calcDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) ** 2;

    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
