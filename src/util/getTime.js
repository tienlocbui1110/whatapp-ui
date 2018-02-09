export const getTime = () => {
  date = new Date();
  hours = date.getHours();
  if (hours < 10) hours = "0" + hours.toString();
  minutes = date.getMinutes();
  if (minutes < 10) minutes = "0" + minutes.toString();

  time = hours + ":" + minutes;
  return time;
};

export default getTime;
