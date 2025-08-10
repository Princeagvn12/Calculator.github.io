
let screen = document.querySelector('.screen');
let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.btn');
let colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('input', function() {
    let selectedColor = colorPicker.value;
    screen.style.backgroundColor = selectedColor;});

buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        let value = btn.textContent;
            
            if (value === 'C') {
                display.value = '';
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                    display.style.animation= "BOX 3s";
                    display.style.transition = "1s";
    
                      setTimeout(() => {
                        display.style.animation = '';
                    }, 500);
                    
                } catch {
                    display.value = 'Erreur';
                }
            } else if (value === '⬅') {
                display.value = display.value.slice(0, -1);
            } else {
                display.value += value;
            }
       
           
        
    })
})

