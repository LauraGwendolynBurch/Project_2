$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  const itemName = $("#itemName");
  const itemDescription = $("#itemDescription");
  const itemWeight = $("#itemWeight");
  const itemStorageLocation = $("#itemStorageLocation");
  const itemQuantityInStorage = $("#itemQuantityInStorage");
  const itemQuantityInPackingList = $("#itemQuantityInPackingList");
<<<<<<< HEAD

  $("#createForm").on("submit", postFormSubmit);

  function postFormSubmit(event) {
    event.preventDefault();

    if (!itemName.val().trim()) {
      return;
    }

=======
  $("#createForm").on("submit", postFormSubmit);
  function postFormSubmit(event) {
    event.preventDefault();
    if (!itemName.val().trim()) {
      return;
    }
>>>>>>> f42f79ef63bc9848210a098d01d01fb79e751a72
    const data = {
      itemName: itemName.val(),
      itemDescription: itemDescription.val(),
      itemWeight: itemWeight.val(),
      itemStorageLocation: itemStorageLocation.val(),
      itemQuantityInStorage: itemQuantityInStorage.val(),
<<<<<<< HEAD
      itemQuantityInPackingList: itemQuantityInPackingList.val(),
    };

    $.post("/api/gear", data).then(
      function(gear){
      location.reload();
      console.log(gear);
      }
    )
  }

=======
      itemQuantityInPackingList: itemQuantityInPackingList.val()
    };
    $.post("/api/gear", data).then(gear => {
      location.reload();
      console.log(gear);
    });
  }
>>>>>>> f42f79ef63bc9848210a098d01d01fb79e751a72
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
  // // Delete Button. //
  // // Ref. https://stackoverflow.com/questions/28184177/dynamically-add-remove-rows-from-html-table //
  // $("#gearTable").on("click", 'input[type="button"]', function() {
  //   $(this)
  //     .closest("tr")
  //     .remove();
  // });
  // $('p input[type="button"]').click(() => {
  //   $("#gearTable").append(
  //     "<tr><td><input type=\"text\" id=\"packed\" placeholder=\"Enter Item\" value=\"packed\"><td><input type=\"button\" value=\"Delete\" /></td></tr>"
  //   );
  // });

  // // Confirmation for item to be deleted. //
  // // Ref. https://stackoverflow.com/questions/9139075/how-to-show-a-confirm-message-before-delete //
  // $(() => {
  //   $(".delete").click(() => {
  //     swal({
  //       title: "Are you sure?",
  //       text:
  //         "You will not be able to recover this item; and will have to retype all data!  Consider changing only the column(s) information, first.",
  //       type: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#DD6B55",
  //       confirmButtonText: "Yes, delete it!",
  //       closeOnConfirm: false
  //     }).then(isConfirmed => {
  //       if (isConfirmed) {
  //         $(".file").addClass("isDeleted");
  //         swal("Deleted!", "Your item has been deleted.", "success");
  //       }
  //     });
  //   });
  // });
});
