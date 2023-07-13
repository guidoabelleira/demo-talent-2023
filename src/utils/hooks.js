export const extractRandomArtists = (dataArtistas) => {
    const randomArtists = [];
    const totalArtists = dataArtistas.length;
  
    // Verificar que hay suficientes elementos en el array
    if (totalArtists < 5) {
      console.log("No hay suficientes elementos en el array");
      return randomArtists;
    }
  
    // Generar 5 números aleatorios únicos
    const randomIndices = new Set();
  
    while (randomIndices.size < 5) {
      const randomIndex = Math.floor(Math.random() * totalArtists);
  
      // Verificar si el número aleatorio ya fue seleccionado
      if (!randomIndices.has(randomIndex)) {
        randomIndices.add(randomIndex);
      }
    }
  
    // Extraer los elementos correspondientes a los números aleatorios
    randomIndices.forEach((index) => {
      randomArtists.push(dataArtistas[index]);
    });
  
    return randomArtists;
  };

// Ejemplo de uso

