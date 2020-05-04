let avatars = ["./assets/images/avatar2.png", "./assets/images/avatar3.png", "./assets/images/avatar1.png", "./assets/images/avatar4.png", "./assets/images/avatar5.png", "./assets/images/avatar6.png"];
let currentAvatar = 1;

$(window).load(function () {
    $("#showmore").click(function () {
        $("#hiddenblock").css('display') == 'none' ? $("#showmore em").text('Click to hide experience...') : $("#showmore em").text('Click to show more experience...');
        $("#hiddenblock").toggle(200);
    });

    $(".avatar-wrapper, #clickonme").click(function () {
        changePhoto();
    })
})

function changePhoto() {
    $(".avatar").attr("data", avatars[currentAvatar]);
    currentAvatar++;

    if (currentAvatar == avatars.length)
        currentAvatar = 0;
}