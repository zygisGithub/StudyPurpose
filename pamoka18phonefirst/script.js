function showMore() {
    var moreText = document.getElementById("moreText");
    var readMoreLink = document.getElementById("readMoreLink");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        readMoreLink.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        readMoreLink.textContent = "Read More...";
    }
}
