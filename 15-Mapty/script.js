'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = Date.now();
  constructor(distance, duration, coords) {
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(distance, duration, coords, candence) {
    super(distance, duration, coords);
    this.candence = candence;
    this.setPace();
  }

  setPace() {
    return (this.peace = this.duration / this.distance);
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(distance, duration, coords, elevationGan) {
    super(distance, duration, coords);
    this.elevationGan = elevationGan;
    this.setSpeed();
  }

  setSpeed() {
    return (this.speed = this.distance / (this.duration / 60));
  }
}

class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this.#getPositon();
    form.addEventListener('submit', this.#newWorkOut.bind(this));
    inputType.addEventListener('change', this.#toggleElevationField.bind(this));
  }

  #getPositon() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this.#loadMap.bind(this),
        function () {
          alert("Can't get your current positon");
        }
      );
  }

  #loadMap(position) {
    const cords = position.coords;
    const posArr = [cords.latitude, cords.longitude];
    this.#map = L.map('map').setView(posArr, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    this.#map.on('click', this.#showForm.bind(this));
  }

  #showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  #toggleElevationField() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  #newWorkOut(e) {
    const isAllNumbers = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const isAllPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();

    const currPositon = [this.#mapEvent.latlng.lat, this.#mapEvent.latlng.lng];
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;

    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !isAllNumbers(distance, duration, cadence) ||
        !isAllPositive(distance, duration, cadence)
      ) {
        alert('parameters must be positive numbers');
        return;
      }
      workout = new Running(distance, duration, currPositon, cadence);
    }
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (
        !isAllNumbers(distance, duration, elevation) ||
        !isAllPositive(distance, duration)
      ) {
        alert('parameters must be positive numbers');
        return;
      }
      workout = new Cycling(distance, duration, currPositon, elevation);
    }
    this.#workouts.push(workout);

    this.#createMarker(workout);

    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        '';
  }

  #createMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(String(workout.distance))
      .openPopup();

    form.classList.add('hidden');
  }
}

const app = new App();
