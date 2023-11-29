const display = document.getElementById('egesz');
let bevittAdat = '';

function ranyom(value) {
    switch (value) {
      case 'C':
        bevittAdat = '';
        break;
      case '<-':
        bevittAdat = bevittAdat.slice(0, -1);
        break;
      default:
        bevittAdat += value;
        break;
    }
    frissit();
  }

  function frissit() {
    display.textContent = bevittAdat;
  }

  function szamol() {
    try {
        bevittAdat = eval(bevittAdat).toString();
        frissit();
    } catch (error) {
      display.textContent = 'Hiba';
    }
}