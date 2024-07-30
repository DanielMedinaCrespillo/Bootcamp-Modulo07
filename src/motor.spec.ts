import { vi } from "vitest";
import { gameOver, tipoPuntuacion } from "./motor";
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
