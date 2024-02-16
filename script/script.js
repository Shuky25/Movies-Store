let total = 0;

let buttons = document.querySelectorAll(".btn-primary");

for (let i = 0; i < 9; i++) {
    let btn = buttons[i];
    btn.addEventListener('click', () => {
        let a = btn.previousElementSibling.previousElementSibling.innerText;
        str = a.substring(7);
        let price = parseFloat(str.slice(0, -1));

        total += price;
        btn.innerText = "Play";
        btn.disabled = true;
        document.querySelector('#total').innerText = `Total: ${total}$`;
    });
}