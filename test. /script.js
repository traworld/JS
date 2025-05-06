
let firstcount = 0;

document.getElementById("counts").textContent = firstcount;

document.getElementById("increment").onclick = function () {
    firstcount++
    document.getElementById("counts").textContent = firstcount;
}
document.getElementById("decrement").onclick = function () {
    firstcount--
    document.getElementById("counts").textContent = firstcount;
}
document.getElementById("erase").onclick = function () {
    firstcount= 0
    document.getElementById("counts").textContent = firstcount;
}