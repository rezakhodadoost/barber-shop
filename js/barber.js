let lat, lng;

function getLocation() {
    navigator.geolocation.getCurrentPosition(pos => {
        lat = pos.coords.latitude;
        lng = pos.coords.longitude;
        alert("✅ موقعیت ثبت شد");
    });
}

function saveBarber() {
    const data = {
        shop: shop.value,
        phone: phone.value,
        address: address.value,
        lat,
        lng
    };

    if (!data.shop || !data.phone || !data.address || !lat) {
        alert("⚠ همه اطلاعات را کامل وارد کنید");
        return;
    }

    localStorage.setItem("barber", JSON.stringify(data));
    alert("✅ اطلاعات ذخیره شد");
}
