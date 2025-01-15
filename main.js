const lumon = document.getElementById('lumon');
let x_incr = 1;
let y_incr = 1;

function init() {
    lumon.style.position = 'absolute';
    document.body.style.background = '#1A2C4C';
    lumon.style.top = `${x_incr}px`;
    lumon.style.left = `${y_incr}px`;

    // animate the logo
    requestAnimationFrame(animate);
}


function handle_collision() {
    const lumon_height = lumon.offsetHeight;
    const lumon_width = lumon.offsetWidth;
    const lumon_top = lumon.offsetTop;
    const lumon_left = lumon.offsetLeft;
    const win_height = window.innerHeight;
    const win_width = window.innerWidth;

    if (lumon_left <= 0 || lumon_left + lumon_width >= win_width) {
        // reverse x_incr
        x_incr = -x_incr;
    }

    if (lumon_top <= 0 || lumon_top + lumon_height >= win_height) {
        // reverse y_incr
        y_incr = -y_incr;
    }
}

function animate() {
    handle_collision();
    lumon.style.top = `${lumon.offsetTop + y_incr}px`;
    lumon.style.left = `${lumon.offsetLeft + x_incr}px`;

    requestAnimationFrame(animate);
}

init();
