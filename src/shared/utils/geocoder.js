const ykey = import.meta.env.VITE_YANDEX_MAP_API_KEY;

export const geocoderFunc = (address) => {
  return new Promise((resolve, reject) => {
    window.ymaps
      .geocode(address)
      .then((res) => {
        const firstGeoObject = res.geoObjects.get(0);
        if (firstGeoObject) {
          const coords = firstGeoObject.geometry.getCoordinates();
          resolve(coords);
        } else {
          reject(new Error("Координаты не найдены для этого адреса"));
        }
      })
      .catch((error) => reject(error));
  });
};

export const loadYandexMaps = () =>
  new Promise((resolve, reject) => {
    if (window.ymaps) return resolve(window.ymaps);

    const script = document.createElement("script");
    script.src = `https://api-maps.yandex.ru/2.1/?apikey=${ykey}&lang=ru_RU`;
    script.async = true;
    script.onload = () => window.ymaps.ready(() => resolve(window.ymaps));
    script.onerror = () => reject(new Error("Ошибка загрузки Yandex Maps"));

    document.body.appendChild(script);
  });

export const initializeMap = (ymaps, mapContainer, list) => {
  const { city, state, street, zipCode } = list[0].address || {};
  const fullAddress = `${street}, ${city}, ${state}, ${zipCode}`;

  const map = new ymaps.Map(mapContainer, {
    center: [56.838011, 60.597474],
    zoom: 8,
    controls: [],
  });

  const addPlacemark = async (address, name) => {
    const fullString = `${name}, адрес: ${address}`;
    try {
      const coords = await geocoderFunc(address);
      const placemark = new ymaps.Placemark(
        coords,
        {
          balloonContent: fullString,
        },
        {
          preset: "islands#redDotIcon",
        }
      );
      map.geoObjects.add(placemark);
    } catch (error) {
      console.error("Ошибка при геокодировании:", error);
    }
  };

  list.forEach((element) => {
    const { city, state, street, zipCode } = element.address || {};
    const fullAddress = `${street}, ${city}, ${state}, ${zipCode}`;
    addPlacemark(fullAddress, element.name);
  });

  geocoderFunc(fullAddress)
    .then((coords) => {
      map.setCenter(coords);
    })
    .catch((error) => {
      console.error("Ошибка при получении координат для центра:", error);
    });

  return map;
};
