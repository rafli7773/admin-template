const sidenav = () => {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
    });
}

const collapsible = () => {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
    });
}

sidenav();
collapsible();