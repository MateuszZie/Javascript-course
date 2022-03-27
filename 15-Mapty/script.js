'use strict';

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
  clicks = 0;

  constructor(distance, duration, coords) {
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
  }

  setDecription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.descrption = `${this.type[0].toUpperCase() + this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(distance, duration, coords, candence) {
    super(distance, duration, coords);
    this.candence = candence;
    this.#setPace();
    this.setDecription();
  }

  #setPace() {
    return (this.peace = this.duration / this.distance);
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(distance, duration, coords, elevationGain) {
    super(distance, duration, coords);
    this.elevationGain = elevationGain;
    this.#setSpeed();
    this.setDecription();
  }

  #setSpeed() {
    return (this.speed = this.distance / (this.duration / 60));
  }
}

class App {
  #map;
  #mapEvent;
  #mapZoom = 13;
  #workouts = [];

  constructor() {
    this.#getPositon();
    this.#getWorkoutFromStorage();
    form.addEventListener('submit', this.#newWorkOut.bind(this));
    inputType.addEventListener('change', this.#toggleElevationField.bind(this));
    containerWorkouts.addEventListener('click', this.#moveToPopup.bind(this));
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
    this.#map = L.map('map').setView(posArr, this.#mapZoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    this.#workouts.forEach(work => this.#createMarker(work));
    this.#map.on('click', this.#showForm.bind(this));
  }

  #showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  #hideForm() {
    inputCadence.value =
      inputDistance.value =
      inputDuration.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
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

    this.#renderWorkout(workout);

    this.#hideForm();

    this.#addWorkoutToStorage();
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
      .setPopupContent(String(workout.descrption))
      .openPopup();
  }

  #renderWorkout(workout) {
    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
    <h2 class="workout__title">${workout.descrption}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === 'running' ? '🏃' : '🚴'
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>`;
    if (workout.type === 'running') {
      html += `<div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.peace.toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${workout.candence}</span>
      <span class="workout__unit">spm</span>
    </div>
  </li>`;
    }
    if (workout.type === 'cycling') {
      html += ` <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>`;
    }
    form.insertAdjacentHTML('afterend', html);
  }
  #moveToPopup(e) {
    const workEl = e.target.closest('.workout');
    if (!workEl) return;
    const workout = this.#workouts.find(w => w.id === +workEl.dataset.id);
    this.#map.setView(workout.coords, this.#mapZoom);
    workout.click();
    console.log(workout);
  }

  #addWorkoutToStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }
  #getWorkoutFromStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    if (!data) return;
    data.forEach(element => {
      element.__proto__ =
        element.type === 'running' ? Running.prototype : Cycling.prototype;
    });
    this.#workouts = data;
    this.#workouts.forEach(work => {
      this.#renderWorkout(work);
    });
  }
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
