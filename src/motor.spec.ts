import { vi } from "vitest";
import {
  gameOver,
  generarNumeroCarta,
  sumaPuntuacion,
  tipoPuntuacion,
} from "./motor";
import { partida } from "./modelo";

describe("gameOver", () => {
  it("Si la puntuacion sobre pasa de 7.5 pierde el juego activa el Game Over", () => {
    //Arrange
    vi.spyOn(partida, "puntos", "get").mockReturnValue(8);

    //Act
    const resultado = gameOver();

    //Assert
    expect(resultado).toBe(true);
  });

  it("Si la puntuacion es menor a 7.5 la partida sigue su curso con lo cual Game Over permanece desactivado", () => {
    //Arrange
    vi.spyOn(partida, "puntos", "get").mockReturnValue(6);

    //Act
    const resultado = gameOver();

    //Assert
    expect(resultado).toBe(false);
  });
});

describe("tipoPuntuacion", () => {
  it("Si te plantas con 4 puntos o menos salta mensaje de, Has sido muy conservador", () => {
    //Arrange
    const resultadoEsperado: string = "Has sido muy conservador";
    vi.spyOn(partida, "puntos", "get").mockReturnValue(4);
    //Act
    const resultado = tipoPuntuacion(partida.puntos);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Si te plantas con 5 puntos o menos salta mensaje de, Te ha entrado el canguelo eh?", () => {
    //Arrange
    const resultadoEsperado: string = "Te ha entrado el canguelo eh?";
    vi.spyOn(partida, "puntos", "get").mockReturnValue(5);
    //Act
    const resultado = tipoPuntuacion(partida.puntos);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Si te plantas con 7 puntos o menos salta mensaje de, Casi casi...", () => {
    //Arrange
    const resultadoEsperado: string = "Casi casi...";
    vi.spyOn(partida, "puntos", "get").mockReturnValue(7);
    //Act
    const resultado = tipoPuntuacion(partida.puntos);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Si te plantas con 7.5 puntos has ganado el juego y te salta el mensaje, ¡Lo has clavado! ¡Enhorabuena!", () => {
    //Arrange
    const resultadoEsperado: string = "¡Lo has clavado! ¡Enhorabuena!";
    vi.spyOn(partida, "puntos", "get").mockReturnValue(7.5);
    //Act
    const resultado = tipoPuntuacion(partida.puntos);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("generarNumeroCarta", () => {
  it("Operacion en la que el numero generado del 8 al 10 se sume +2, en este caso 8", () => {
    //Arrange
    const resultadoEsperado: number = 10;
    const numeroAleatorio: number = 8;

    //Act
    const resultado = generarNumeroCarta(numeroAleatorio);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Operacion en la que el numero generado del 8 al 10 se sume +2, en este caso 9", () => {
    //Arrange
    const resultadoEsperado: number = 11;
    const numeroAleatorio: number = 9;

    //Act
    const resultado = generarNumeroCarta(numeroAleatorio);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Operacion en la que el numero generado del 8 al 10 se sume +2, en este caso 10", () => {
    //Arrange
    const resultadoEsperado: number = 12;
    const numeroAleatorio: number = 10;

    //Act
    const resultado = generarNumeroCarta(numeroAleatorio);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Operacion en la que el numero generado del 1 al 7 no se sumara +2, en este caso 7", () => {
    //Arrange
    const resultadoEsperado: number = 7;
    const numeroAleatorio: number = 7;

    //Act
    const resultado = generarNumeroCarta(numeroAleatorio);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("dameUrlCarta", () => {
  it("Valor de las cartas de AS de copas", () => {
    //Arrange
    const numeroCarta = 1;
    vi.spyOn(partida, "puntos", "get").mockReturnValue(0);
    const resultadoEsperado = 1;
    //Act
    const resultado = sumaPuntuacion(partida.puntos, numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Valor de las cartas de 2 de copas", () => {
    //Arrange
    const numeroCarta = 2;
    vi.spyOn(partida, "puntos", "get").mockReturnValue(0);
    const resultadoEsperado = 2;
    //Act
    const resultado = sumaPuntuacion(partida.puntos, numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Valor de las cartas de 3 de copas", () => {
    //Arrange
    const numeroCarta = 3;
    vi.spyOn(partida, "puntos", "get").mockReturnValue(0);
    const resultadoEsperado = 3;
    //Act
    const resultado = sumaPuntuacion(partida.puntos, numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Valor de las cartas de 4 de copas", () => {
    //Arrange
    const numeroCarta = 4;
    vi.spyOn(partida, "puntos", "get").mockReturnValue(0);
    const resultadoEsperado = 4;
    //Act
    const resultado = sumaPuntuacion(partida.puntos, numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Valor de las cartas de 5 de copas", () => {
    //Arrange
    const numeroCarta = 5;
    vi.spyOn(partida, "puntos", "get").mockReturnValue(0);
    const resultadoEsperado = 5;
    //Act
    const resultado = sumaPuntuacion(partida.puntos, numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Valor de las cartas de 6 de copas", () => {
    //Arrange
    const numeroCarta = 6;
    vi.spyOn(partida, "puntos", "get").mockReturnValue(0);
    const resultadoEsperado = 6;
    //Act
    const resultado = sumaPuntuacion(partida.puntos, numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Valor de las cartas de 7 de copas", () => {
    //Arrange
    const numeroCarta = 7;
    vi.spyOn(partida, "puntos", "get").mockReturnValue(0);
    const resultadoEsperado = 7;
    //Act
    const resultado = sumaPuntuacion(partida.puntos, numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Valor de las cartas de 10 de copas", () => {
    //Arrange
    const numeroCarta = 10;
    vi.spyOn(partida, "puntos", "get").mockReturnValue(0);
    const resultadoEsperado = 0.5;
    //Act
    const resultado = sumaPuntuacion(partida.puntos, numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Valor de las cartas de 11 de copas", () => {
    //Arrange
    const numeroCarta = 11;
    vi.spyOn(partida, "puntos", "get").mockReturnValue(0);
    const resultadoEsperado = 0.5;
    //Act
    const resultado = sumaPuntuacion(partida.puntos, numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Valor de las cartas de 12 de copas", () => {
    //Arrange
    const numeroCarta = 12;
    vi.spyOn(partida, "puntos", "get").mockReturnValue(0);
    const resultadoEsperado = 0.5;
    //Act
    const resultado = sumaPuntuacion(partida.puntos, numeroCarta);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});
