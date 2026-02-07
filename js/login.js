function submitLogin() {
    const name = document.getElementById("name").value.trim();
    const role = document.getElementById("role").value;
    const error = document.getElementById("error");

    if (!name || !role) {
        error.innerText = "⚠ لطفاً نام و نقش را وارد کنید";
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("role", role);

    window.location.href =
        role === "customer" ? "customer.html" : "barber.html";
}
