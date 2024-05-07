export function previous30Days() {
  let currentDate = new Date();
  let previousDays = [];

  for (let i = 30; i > 0; i--) {
    let date = new Date(currentDate);
    date.setDate(date.getDate() - i);
    let formattedDate = date.toISOString().split("T")[0];
    previousDays.push(formattedDate);
  }

  return previousDays;
}
