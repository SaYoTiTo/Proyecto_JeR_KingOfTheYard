Proyecto para la asignatura Juegos en Red 2021/2022

# King of the Yard

King of the Yard es un juego arcade 2D basado en el juego del pilla-pilla en el que dos niños pelean por la corona la cual les convertirá en el rey del patio.

## Integrantes
- David Sayalero Azaustre - d.sayalero.2018@alumnos.urjc.es - SaYoTiTo
- Alejandro Moya Gomez -a.moya.2018@alumnos.urjc.es - strikealex
- Alberto Rodriguez - al.rodriguezg.2018@alumnos.urjc.es - AlberVicky09

# 1-Introducción
Este es el documento de diseño de juego de “King of the Yard”. Un juego casual para PC que pretende generar una jugabilidad competitiva simple para entretener a dos jugadores de forma offline o online.

## Concepto del juego
“King of the Yard” es un videojuego en el que controlamos a dos niños los cuales luchan por ser los reyes del patio. El último rey se ha marchado del colegio después de cuatro años intentando aprobar y ahora no hay nadie que gobierne el recreo. Uno de ellos debe tomar el trono y todo se decidirá con un “Atrapa la Corona”.

## Características principales

El juego se basa en los siguientes puntos:

- Planteamiento sencillo: la trama se usará únicamente para dar contexto y un objetivo a los jugadores, pero en el transcurso del juego lo que primará será la jugabilidad.

- Competitivo: el juego se basa en el popular juego “Atrapa la bandera” el cual tiene un carácter competitivo, donde los jugadores tienen que agarrar la bandera y huir de su contrincante.

- Casual: el juego no tendrá mucha complicación y su función será meramente de entretenimiento. Su planteamiento permite que los jugadores, con un par de partidas, puedan dominar las mecánicas y disfrutarlo.

- Rejugabilidad: la sencillez y competitividad del juego permite que tenga una gran rejugabilidad.

- Dinamismo: al ser partidas cortas, el juego se vuelve rápido y muy dinámico.

## Género
Se ha establecido que King of the Yard es una unión de diferentes géneros. A continuación se enumeran y se presentan los motivos:

- Casual: la característica fundamental de los juegos casuales es la facilidad que tienen los jugadores de comenzar a jugarlo y alcanzar a dominarlo en un tiempo corto, haciendo que el juego se disfrute de forma esporádica junto con amigos. Algún ejemplo de este tipo puede ser el Slither.io o el Angry Birds.

- Arcade: es un género en el que encontramos partidas cortas y rápidas donde lo que prima es la diversión sobre el resto de aspectos. Un ejemplo muy conocido es el clásico PacMan (Bandai) y los primeros juegos de recreativas

## Propósito y público objetivo

La realización de King of the Yard está basada en dos principales premisas. Por un lado, se quería traer un juego sencillo, en el que lo que prime sea la diversión y una sana competitividad entre los jugadores.

Por otro lado, es un juego con unas mecánicas y una base sencilla, lo que da lugar a que cualquiera pueda jugar (al estilo de los party games) tanto jóvenes como mayores, y tanto jugadores casuales como hardcore.

## Jugabilidad
El mapa, observado por los jugadores de forma cenital, está compuesto por varias zonas con distintos obstáculos, algunos de ellos con movimiento que podrán aturdir a los jugadores durante unos segundos dejando al otro jugador unos valiosos segundos para coger la corona. Estos últimos tendrán que recoger y aguantar la “corona” todo el tiempo que puedan, mientras el contrincante nos persigue para intentar robarlo. Quien mantenga la corona durante más tiempo es el ganador.

- Movilidad: los personajes se desplazarán por el mapa intentando obtener y mantener la corona.

- Combate: al colisionar un personaje con el poseedor de la corona, este quedará aturdido y el otro se llevará la corona consigo. Desde ese momento el contador comenzará a subir.

## Estilo Visual
King of the Yard tendrá un apartado visual bastante sencillo usando simpáticos sprites de estética cartoon tanto para personajes como escenarios. 

## Alcance
El objetivo principal es desarrollar un juego familiar y amigable al que toda la familia pueda jugar de forma esporádica. Con el tiempo, podrán añadirse más personajes e incluso aportarles diferencias en cuanto a sus habilidades (velocidad, tiempo de aturdimiento).

# 2-Mecánicas de juego
En este apartado se profundizará en las diferentes mecánicas que componen a King of the Yard ahondando en los diversos fundamentos de su jugabilidad y explicando el rango de acción de los jugadores.

## Tipo de cámara
La cámara toma una perspectiva cenital que permite ver todo el espacio de juego y el lugar donde se encuentra la corona. Es una perspectiva utilizada en videojuegos como Hotline Miami o Darkwood.

## Jugabilidad
- Movimiento: los personajes podrán moverse por todo el escenario con WASD para progresar de forma horizontal y vertical, pero no poseen más mecánicas de movimiento como puedan ser esquivar, rodar o saltar.

- La Corona: es el elemento principal del gameplay, quien tenga la corona durante más tiempo ganará la partida. Esta se encontrará al inicio del duelo en el centro del mapa, a la misma distancia de los dos jugadores. 

- Golpear: Los personajes podrán chocar entre sí haciendo que el personaje que tenga la corona se quede aturdido durante unos segundos, es decir, que no pueda moverse y pierda la corona.

- Obstáculos: El patio del colegio está lleno de obstáculos que los personajes no podrán atravesar. Algunos de ellos se moverán y podrán aturdir a los personajes pero estos no soltarán la corona.

## Niveles
Solo hay un nivel en todo el juego:

Se plantea un nivel estándar en el que los jugadores deberán competir por la corona y esquivar los obstáculos hasta que uno de los jugadores consiga mantener la corona el tiempo establecido

Cuando se haya finalizado este nivel, se habrá acabado la partida y por tanto se mostrarán los resultados.


## Condición de victoria
Es una única partida en la que se decide el ganador. Un jugador sale victorioso del  nivel cuando, al acabar el tiempo, tenga la mayor cantidad de puntos o cuando alcance el límite de puntos establecido.

## Flujo de juego
A lo largo de esta sección se detalla el transcurso de una partida típica de King of the Yard. Se comentarán los pasos que han de seguir los jugadores desde el inicio del juego hasta completar el juego. Poco a poco vamos desgranando el funcionamiento exacto del juego, en esta sección describimos las mecánicas. Más adelante se definirá el contenido de cada pantalla.

El jugador inicia King of the Yard y se le presenta el Menú Principal. Si desea iniciar una partida el Jugador seleccionará la opción Jugar. Esta opción llevará al jugador a la pantalla de Elección de Modo en el que se puede elegir un duelo offline o un duelo online.

En el formato offline, la partida empezará directamente después de una pequeña cuenta atrás qué dará tiempo a los jugadores a posicionarse en el teclado. La partida seguirá adelante hasta que uno de los dos jugadores consiga el máximo de puntos por mantener la corona. Tras eso se pasará a una pantalla de resultados y el juego comenzará de nuevo.

En el caso online, se buscará automáticamente una persona para jugar y se le emparejará para que el juego comience y termine igual que en la versión offline.

## Personajes
En esta sección se van a enumerar y describir los diferentes personajes que aparecerán en el juego King of the Yard.
### Red
Descripción: Es uno de los protagonistas del juego. Es uno de los niños que desea apoderarse del trono y gobernar el patio con mano de hierro. Todo el mundo le apoda Red porque le encanta ese color y lo lleva en su ropa todos los días. Es gemelo de Blue (aunque él nació primero).
### Blue
Descripción: Es uno de los protagonistas del juego. Es uno de los niños que desea conseguir el trono de forma legítima y gobernar el patio. Todo el mundo le apoda Blue porque le encanta ese color y lo lleva en su ropa todos los días. Es el gemelo de Red (aunque nació después y es mucho más listo que su hermano).

# Movimiento y físicas
##Interacción entre elementos

King of the Yard se desarrolla en un plano 2D y ambos jugadores pueden desplazarse por él. El escenario tendrá varios obstáculos que podrán ralentizar o bloquear a los jugadores, para que sea más fácil alcanzar a uno o alejarse el otro.

Cuando el jugador que persigue choque con el jugador con la corona, este último quedará “stuneado” durando unos segundos para dar una ventaja al que acaba de conseguir la corona para poder huir. 

Algunos elementos del mapa se podrán mover y “stunear” al jugador que se chocó; estos serán obstáculos a superar que irán cambiando por el mapa, teniendo situaciones en el juego más variadas.

Podrán aparecer de vez en cuando unos “power ups” que permitirán al jugador que los obtenga obtener una mayor velocidad o reducir la de su enemigo temporalmente.

Las colisiones que se producirán:

Personaje - Personaje (cuando un jugador se acerque al otro y le robe la corona, dejándolo aturdido).
Escenario - Personaje (Cuando un jugador choque con con uno de los obstáculos móviles será stuneado y cuando pase por encima de unas zonas con lodo o barro será ralentizado).
Personaje - Ítems (cuando un jugador se acerque a un “power up” este lo obtendrá y se le otorgará automáticamente).

##Controles

- Movimiento Pj1: teclas W, A, S, D.
- Movimiento Pj2: teclas I, J, K, L.





# 3-Interfaz

En esta sección se especificará con detalle cada una de las pantallas que componen “King of the Yard”. Además, se indicarán las transiciones entre ellas así como la utilidad de cada elemento de la GUI (Graphical User Interface). Las imágenes adjuntas son bocetos que ilustran los componentes que debe contener cada pantalla, no obstante, los artistas podrán hacer cambios en la apariencia y disposición de los elementos si así lo consideran oportuno.  
 
## Diagrama de flujo
En este diagrama de estados se muestran todas las pantallas que se podrán ver a lo largo del juego y cómo se llega a cada una de ellas.

### Menú principal
- Botón Jugar: Al pulsarlo lleva a la pantalla de Selección de Partida.
- Botón Salir: al pulsarlo nos lleva de vuelta al Sistema Operativo.

### Selección de Partida
- Botón Offline: Al pulsarlo lleva a la pantalla de Juego
- Botón Online: Al pulsarlo el jugador esperará el emparejamiento y cuando se establezca nos lleva a la pantalla de Juego.
### Juego
- Cuando acaba la partida te lleva a la pantalla de Victoria, en la que aparece el jugador que ha ganado. 
Victoria
- Botón Salir: te devuelve a la pantalla de Selección de Partida.

# 4-Arte
Uno de los puntos en los que se sustenta King of the Yard es la competitividad de los jugadores y la simpleza de un juego de pilla-pilla; por eso el estilo es un cartoon 2D. La trama es simple ya que el juego no tiene intención de ser complicado, ya que el objetivo del juego es que los jugadores compitan para convertirse en el nuevo rey del patio y se diviertan consiguiendoló.

## Arte 2D
Las imágenes usadas están en formato .png por su alta calidad y la facilidad de ser integradas por las transparencias de sus fondos. Además, se guardarán siempre los archivos en el formato de edición original.

## Sprites
- Blue (animación estática, de movimiento y stun)
- Red (animación estática, de movimiento y stun)
- Power Ups (animación estática)
- Objetos móviles (animación de movimiento)
## Tiles
- Suelo
- Casas
- Obstáculos
- Otros
# Audio
## Música
- Menú principal: música tranquila pero con un tono alegre y divertido.
- Juego: una melodía también alegre, pero más enérgica para causar una sensación de euforia en el jugador.
- Victoria: música triunfal y burlesca que sirve para que el ganador se regodee en su victoria.
## Efectos
- Correr: sonido de pisadas rápidas.
- Efecto de agua fluyendo.
- Efecto de viento.
- Efecto de objetos moviéndose.
