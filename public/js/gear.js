$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  const itemName = $("#itemName");
  const itemDescription = $("#itemDescription");
  const itemWeight = $("#itemWeight");
  const itemStorageLocation = $("#itemStorageLocation");
  const itemQuantityInStorage = $("#itemQuantityInStorage");
  const itemQuantityInPackingList = $("#itemQuantityInPackingList");
  $("#createForm").on("submit", postFormSubmit);
  function postFormSubmit(event) {
    event.preventDefault();
    if (!itemName.val().trim()) {
      return;
    }
    const data = {
      itemName: itemName.val(),
      itemDescription: itemDescription.val(),
      itemWeight: itemWeight.val(),
      itemStorageLocation: itemStorageLocation.val(),
      itemQuantityInStorage: itemQuantityInStorage.val(),
      itemQuantityInPackingList: itemQuantityInPackingList.val()
    };
    $.post("/api/gear", data).then(gear => {
      location.reload();
      console.log(gear);
    });
  }

  // eslint-disable-next-line no-unused-vars
  $(".delete-item").on("click", function(event) {
    const id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/gear/" + id, {
      type: "DELETE"
    }).then(() => {
      console.log("deleted item", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});
