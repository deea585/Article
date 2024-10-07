document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.querySelector(".share-button");
  const shareLinks = document.querySelector(".share-links");

  // Ascunde linkurile de partajare la început
  shareLinks.style.display = "none";

  // Toggle la click pe butonul de share
  shareButton.addEventListener("click", function () {
    if (
      shareLinks.style.display === "none" ||
      shareLinks.style.display === ""
    ) {
      shareLinks.style.display = "flex"; // Afișează linkurile
    } else {
      shareLinks.style.display = "none"; // Ascunde linkurile
    }
  });
});
