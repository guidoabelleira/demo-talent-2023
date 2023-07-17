import {Dimensions} from 'react-native';

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');

export function convertirAK(numero) {
    const sufijos = ["k", "M", "B", "T"];
    let valor = parseFloat(numero);
    let sufijoIndex = 0;
    while (valor >= 1000 && sufijoIndex < sufijos.length - 1) {
        valor /= 1000;
        sufijoIndex++;
    }
    return valor.toFixed(0) + sufijos[sufijoIndex];
}