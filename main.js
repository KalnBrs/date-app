dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

let timez = dayjs.tz.guess();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

fetch('timezones.json') // contains the list as a JSON array
  .then(res => res.json())
  .then(timezones => {
    const select = document.getElementById("timezoneSelect");
    timezones.forEach(zone => {
      const option = document.createElement("option");
      option.value = zone;
      option.textContent = zone;
      select.appendChild(option);
    });
  });

function update() {
  const now = dayjs().tz(timez);
  document.getElementById('timezone').textContent = timez;
  document.getElementById("time").textContent = now.format("HH:mm:ss");
  document.getElementById("date").textContent = days[now.day()] + now.format(", MMMM DD, YYYY");
}

document.addEventListener('DOMContentLoaded', () => {
  MicroModal.init();
});

function getTime() {
  timez = document.getElementById('timezoneSelect').value
}

// let form = document.getElementById('myForm')
// form.addEventListener('submit', (event) => {
//   event.preventDefault();

// })

update();
setInterval(update, 1000); 