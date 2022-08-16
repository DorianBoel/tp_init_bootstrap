function validateSearch() {
    let searchInput = $("#recherche")[0];
    if (searchInput.value.trim() === "") {
        $("#myModal").modal();
        return;
    }
    searchForm.submit();
}

function mount() {
    $("button[data-target='#myModal']").on("click", validateSearch);
}

mount();
