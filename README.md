# 🧠 Memory Game
Juego web desarrollado como proyecto de práctica para reforzar
conceptos de HTML, CSS y JavaScript puro, sin uso de frameworks.

Un juego clásico de memoria donde debes encontrar pares de cartas
iguales en un tablero de 16 cartas (8 pares).

## ✅ Características
- Tablero de 16 cartas: 8 pares diferentes de imágenes
- Mezcla aleatoria: Las cartas se reorganizan en cada partida
- Mecánica de juego clásica
- Girar dos cartas por turno
- Mantenerlas visibles si son iguales
- Volver a girarlas si son diferentes
- Contador de pares: Seguimiento automático de pares encontrados
- Sistema de finalización: Mensaje de victoria al encontrar todos los pares
- Reinicio automático: Nueva partida automáticamente al ganar
- Diseño atractivo
- Efectos hover en las cartas

## 🎮 Características del juego
- Temporizador de volteo: 1 segundo para memorizar cuando las cartas no coinciden
- Prevención de clics múltiples: No puedes hacer clic mientras se procesa un par
- Sistema de índice: Cada carta tiene un identificador único para su control
- Reinicio inteligente: Mezcla automática al comenzar nueva partida

## 🎨 Diseño visual
- Fondo rosa pastel para mejor contraste
- Grid de 4x4 para las 16 cartas
- Efectos de sombra y elevación en las cartas
- Animaciones suaves al hacer hover y voltear cartas

## 🛠️ Tecnologías utilizadas
- HTML5
- CSS3 (Grid, Flexbox, transiciones)
- JavaScript (ES6)
- Google Fonts (Material Icons)

## 📋 Uso
1. Haz clic en cualquier carta para voltearla
2. Encuentra otra carta con la misma imagen
3. Si las dos cartas son iguales, permanecerán visibles
4. Si son diferentes, se volverán a girar después de 1 segundo
5. Continúa hasta encontrar los 8 pares
6. Al completar el juego, comenzará automáticamente una nueva partida

## 📁 Estructura del proyecto
```text
memory-game/
├── index.html      # Estructura principal del juego
├── style.css       # Estilos y diseño visual
├── script.js       # Lógica del juego
├── images/         # Directorio de imágenes
│   ├── img-1.png   # Imágenes de las cartas (8 diferentes)
│   ├── img-2.png
│   ├── ...
│   └── question.jpg # Imagen girada de la carta
└── README.md       # Documentación
```
## 🔧 Instalación
1. Clona el repositorio:

```bash
git clone https://github.com/Rusby6/memory-game.git
```
2. Accede al directorio del proyecto:

```bash
cd memory-game
```
3. Asegúrate de que la carpeta images contenga todas las imágenes necesarias
4. Abre el archivo index.html en tu navegador.
