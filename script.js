/* =========================
   LOGIN MODAL
========================= */

function openLogin() {
    document.getElementById("loginModal").classList.add("active");
}

function closeLogin() {
    document.getElementById("loginModal").classList.remove("active");
}


/* =========================
   LOGIN
========================= */

function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    alert(
        "Login submitted for " + email +
        "\n\nBackend authentication will be connected later."
    );

    closeLogin();
}


/* =========================
   SUBJECT MESSAGE
========================= */

function showMessage(subject) {

    alert(
        "You selected: " +
        subject +
        "\n\nNotes section will be connected to the database later."
    );
}


/* =========================
   DOWNLOAD
========================= */

function downloadNote(noteName) {

    alert(
        "Downloading: " +
        noteName +
        "\n\nPDF download functionality will be connected later."
    );
}


/* =========================
   SEARCH NOTES
========================= */

function searchNotes() {

    const input =
        document.getElementById("searchInput");

    const searchText =
        input.value.toLowerCase();

    const cards =
        document.querySelectorAll(".note-card");

    cards.forEach(function(card) {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });
}


/* =========================
   CONTACT FORM
========================= */

function submitContact(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "!\n\nYour message has been submitted."
    );

    event.target.reset();
}


/* =========================
   CLOSE MODAL WHEN CLICKING
   OUTSIDE LOGIN BOX
========================= */

document
    .getElementById("loginModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeLogin();
        }

    });