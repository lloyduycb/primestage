function openModal() {
    document.getElementById("licenseModal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("licenseModal").style.display = "none";
  }

  window.onclick = function(event) {
    const modal = document.getElementById("licenseModal");
    if (event.target === modal) {
      closeModal();
    }
  };