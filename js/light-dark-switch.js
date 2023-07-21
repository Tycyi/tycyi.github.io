let themeFunc = async function() {
    let btn = document.getElementById("theme-btn");
    let root = document.documentElement;
    btn.addEventListener('click', e => {
        if (root.getAttribute('theme') == 'light') {
            root.setAttribute('theme', 'dar');
            localStorage.setItem('theme', 'dar');
        } else {
            root.setAttribute('theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
};
themeFunc();

