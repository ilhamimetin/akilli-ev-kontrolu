export const getTemperatureColor = (temp) => {
  if (temp > 23) return "bg-danger"; // Çok sıcak → Kırmızı
  if (temp < 20) return "bg-primary"; // Çok soğuk → Mavi
  return "bg-success"; // Ideal → Yeşil
};

export const getTemperatureStatus = (temp) => {
  if (temp > 23) return "Çok Sıcak";
  if (temp < 20) return "Çok Soğuk";
  return "Ideal";
};
