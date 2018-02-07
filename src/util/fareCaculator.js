const calculateFare = (
  baseFare,
  timeRate,
  time,
  distanceRate,
  distance,
  surge
) => {
  const distanceInKm = distance * 0.001;
  const timeInMin = time * 0.0166667;
  const pricePerKm = distanceRate * distanceInKm;
  const pricePerMinute = timeRate * timeInMin;
  const totalFare = (baseFare + pricePerKm + pricePerMinute) * surge;
  return Math.round(totalFare);
};

export default calculateFare;
