
Proyecto para la asignatura Juegos en Red 2021/2022

# King of the Yard

*King of the Yard* es un juego arcade 2D basado en el juego del pilla-pilla en el que dos niños pelean por la corona la cual les convertirá en el rey del patio.

**![](https://lh4.googleusercontent.com/LHMFtg_7dR-Qs71Dj0kLi7DdTLRKCHyBE1X4qwcIopSspTQOXnmCSfgdgRq8lcjFwfcnelrRJAxSlpRBkXFtcf6on78OlBA1BwDzRAFMf-5O22r4G1Gd5VN_M9VsMCVkHcirG5l4=s1600)**

## Integrantes
- David Sayalero Azaustre - d.sayalero.2018@alumnos.urjc.es - SaYoTiTo
- Alejandro Moya Gomez -a.moya.2018@alumnos.urjc.es - strikealex
- Alberto Rodriguez - al.rodriguezg.2018@alumnos.urjc.es - AlberVicky09

# 1-Introducción
Este es el documento de diseño de juego de *“King of the Yard”*. Un juego casual para PC que pretende generar una jugabilidad competitiva simple para entretener a dos jugadores de forma offline o online.

## Concepto del juego
“King of the Yard” es un videojuego en el que controlamos a dos niños los cuales luchan por ser los reyes del patio. El último rey se ha marchado del colegio después de cuatro años intentando aprobar y ahora no hay nadie que gobierne el recreo. Uno de ellos debe tomar el trono y todo se decidirá con un “Atrapa la Corona”.

## Características principales

El juego se basa en los siguientes puntos:

- **Planteamiento sencillo**: la trama se usará únicamente para dar contexto y un objetivo a los jugadores, pero en el transcurso del juego lo que primará será la jugabilidad.

- **Competitivo**: el juego se basa en el popular juego “Atrapa la bandera” el cual tiene un carácter competitivo, donde los jugadores tienen que agarrar la bandera y huir de su contrincante.

- **Casual**: el juego no tendrá mucha complicación y su función será meramente de entretenimiento. Su planteamiento permite que los jugadores, con un par de partidas, puedan dominar las mecánicas y disfrutarlo.

- **Rejugabilidad**: la sencillez y competitividad del juego permite que tenga una gran rejugabilidad.

- **Dinamismo**: al ser partidas cortas, el juego se vuelve rápido y muy dinámico.

## Género
Se ha establecido que *King of the Yard* es una unión de diferentes géneros. A continuación se enumeran y se presentan los motivos:

- **Casual**: la característica fundamental de los juegos casuales es la facilidad que tienen los jugadores de comenzar a jugarlo y alcanzar a dominarlo en un tiempo corto, haciendo que el juego se disfrute de forma esporádica junto con amigos. Algún ejemplo de este tipo puede ser el Slither.io o el Angry Birds.

- **Arcade**: es un género en el que encontramos partidas cortas y rápidas donde lo que prima es la diversión sobre el resto de aspectos. Un ejemplo muy conocido es el clásico PacMan (Bandai) y los primeros juegos de recreativas

## Propósito y público objetivo

La realización de *King of the Yard* está basada en dos principales premisas. Por un lado, se quería traer un juego sencillo, en el que lo que prime sea la diversión y una sana competitividad entre los jugadores.

Por otro lado, es un juego con unas mecánicas y una base sencilla, lo que da lugar a que cualquiera pueda jugar (al estilo de los party games) tanto jóvenes como mayores, y tanto jugadores casuales como hardcore.

## Jugabilidad
El mapa, observado por los jugadores de forma cenital, está compuesto por varias zonas con distintos obstáculos, algunos de ellos con movimiento que podrán aturdir a los jugadores durante unos segundos dejando al otro jugador unos valiosos segundos para coger la corona. Estos últimos tendrán que recoger y aguantar la “corona” todo el tiempo que puedan, mientras el contrincante nos persigue para intentar robarlo. Quien mantenga la corona durante más tiempo es el ganador.

- **Movilidad**: los personajes se desplazarán por el mapa intentando obtener y mantener la corona.

- **Combate**: al colisionar un personaje con el poseedor de la corona, este quedará aturdido y el otro se llevará la corona consigo. Desde ese momento el contador comenzará a subir.

## Estilo Visual
*King of the Yard* tendrá un apartado visual bastante sencillo usando simpáticos sprites de estética doodle tanto para personajes como escenarios. 

**![](https://lh3.googleusercontent.com/K7s_tRjQaycc5SH3Y1j-g7tFpWwjFily7ujfgx9yQi_qhvdqyTpQ3yuOFoGOJxtRRrGYTUUYv5YftMJllV-VlwpuvKjipNU2TX1b9xwCAnWguaR0wz-5rX25Ox4ahvZYOGuOze6_=s1600)**


## Alcance
El objetivo principal es desarrollar un juego familiar y amigable al que toda la familia pueda jugar de forma esporádica. Con el tiempo, podrán añadirse más personajes e incluso aportarles diferencias en cuanto a sus habilidades (velocidad, tiempo de aturdimiento).

# 2-Mecánicas de juego
En este apartado se profundizará en las diferentes mecánicas que componen a King of the Yard ahondando en los diversos fundamentos de su jugabilidad y explicando el rango de acción de los jugadores.

## Tipo de cámara
La cámara toma una perspectiva cenital que permite ver todo el espacio de juego y el lugar donde se encuentra la corona. Es una perspectiva utilizada en videojuegos como Hotline Miami o Darkwood.

**![](https://lh6.googleusercontent.com/A-jz7QlAg8-wUlL8iVdisLyy88MDixK8RHnOiPF0BEUfcPHVtfz06EBqYqepW-KhJIZ54fNl6_IEjanY615kH3loOAmJMykCpJKruFhxl2rBOkbxPW-mKiqm2Pk6amHcogl6UUpQ=s1600)**

## Jugabilidad
- **Movimiento**: los personajes podrán moverse por todo el escenario con WASD para progresar de forma horizontal y vertical, pero no poseen más mecánicas de movimiento como puedan ser esquivar, rodar o saltar.

- **La Corona**: es el elemento principal del gameplay, quien tenga la corona durante más tiempo ganará la partida. Esta se encontrará al inicio del duelo en el centro del mapa, a la misma distancia de los dos jugadores. 

- **Golpear**: Los personajes podrán chocar entre sí haciendo que el personaje que tenga la corona se quede aturdido durante unos segundos, es decir, que no pueda moverse y pierda la corona.

- **Obstáculos**: El patio del colegio está lleno de obstáculos que los personajes no podrán atravesar. Algunos de ellos se moverán y podrán aturdir a los personajes pero estos no soltarán la corona.

## Niveles
Solo hay un nivel en todo el juego:

Se plantea un nivel estándar en el que los jugadores deberán competir por la corona y esquivar los obstáculos hasta que uno de los jugadores consiga mantener la corona el tiempo establecido

Cuando se haya finalizado este nivel, se habrá acabado la partida y por tanto se mostrarán los resultados.


## Condición de victoria
Es una única partida en la que se decide el ganador. Un jugador sale victorioso del  nivel cuando, al acabar el tiempo, tenga la mayor cantidad de puntos o cuando alcance el límite de puntos establecido.

## Flujo de juego
A lo largo de esta sección se detalla el transcurso de una partida típica de *King of the Yard*. Se comentarán los pasos que han de seguir los jugadores desde el inicio del juego hasta completar el juego. Poco a poco vamos desgranando el funcionamiento exacto del juego, en esta sección describimos las mecánicas. Más adelante se definirá el contenido de cada pantalla.

El jugador inicia *King of the Yard* y se le presenta el *Menú Principal*. 

![image](https://user-images.githubusercontent.com/72553373/139135325-021d65cc-ca72-4010-82f7-af13c2a1ed86.png)


Si desea iniciar una partida el Jugador seleccionará la opción Jugar. Esta opción llevará al jugador a la pantalla de *Elección de Modo* en el que se puede elegir un duelo offline o un duelo online. 

![image](https://user-images.githubusercontent.com/72553373/139107528-289af6e6-29eb-4cd6-8465-5cfc3b639792.png)

En cualquiera de los dos casos, se presentara primero una pantalla de instrucciones para aprender a jugar.

**![](https://lh5.googleusercontent.com/PcGCPWBcdcBOxAMwikl-2_OmUrpPSNm_2s7BuBAv9_riyG3260EfnxXBxKnCg7VnXAKEzaCW94I_uHrW-t0Enkpu-jLlUpozs4-7fqtjn1nfUyeWUqeBnmJUKi_p5Lf6O3FwEeIL=s1600)**

En el formato offline, la partida empezará directamente después de una pequeña cuenta atrás qué dará tiempo a los jugadores a posicionarse en el teclado. 

![image](https://user-images.githubusercontent.com/72553373/139107805-c886a2bd-2320-478e-984d-3337804a9000.png)

La partida seguirá adelante hasta que uno de los dos jugadores consiga el máximo de puntos por mantener la corona. Tras eso se pasará a una pantalla de resultados y el juego comenzará de nuevo.

![image](https://user-images.githubusercontent.com/72553373/139108138-9c5d39fb-be6c-44c1-a040-8216ab685273.png)


En el caso online, se buscará automáticamente una persona para jugar y se le emparejará para que el juego comience y termine igual que en la versión offline.

## Personajes
En esta sección se van a enumerar y describir los diferentes personajes que aparecerán en el juego *King of the Yard*.
### Red
Descripción: Es uno de los protagonistas del juego. Es uno de los niños que desea apoderarse del trono y gobernar el patio con mano de hierro. Todo el mundo le apoda Red porque le encanta ese color y lo lleva en su ropa todos los días. Es gemelo de Blue (aunque él nació primero).
### Blue
Descripción: Es uno de los protagonistas del juego. Es uno de los niños que desea conseguir el trono de forma legítima y gobernar el patio. Todo el mundo le apoda Blue porque le encanta ese color y lo lleva en su ropa todos los días. Es el gemelo de Red (aunque nació después y es mucho más listo que su hermano).

# Movimiento y físicas
## Interacción entre elementos

*King of the Yard* se desarrolla en un plano 2D y ambos jugadores pueden desplazarse por él. El escenario tendrá varios obstáculos que podrán ralentizar o bloquear a los jugadores, para que sea más fácil alcanzar a uno o alejarse el otro.

Cuando el jugador que persigue choque con el jugador con la corona, este último quedará *stuneado* durando unos segundos para dar una ventaja al que acaba de conseguir la corona para poder huir. 

Algunos elementos del mapa se podrán mover y *stunear* al jugador que se chocó; estos serán obstáculos a superar que irán cambiando por el mapa, teniendo situaciones en el juego más variadas.

Podrán aparecer de vez en cuando unos *power ups* que permitirán al jugador que los obtenga obtener una mayor velocidad o reducir la de su enemigo temporalmente.

Las colisiones que se producirán:

- **Personaje - Personaje** (cuando un jugador se acerque al otro y le robe la corona, dejándolo aturdido).
- **Escenario - Personaje** (Cuando un jugador choque con con uno de los obstáculos móviles será stuneado y cuando pase por encima de unas zonas con lodo o barro será ralentizado).
- **Personaje - Ítems** (cuando un jugador se acerque a un “power up” este lo obtendrá y se le otorgará automáticamente).

## Controles

- **Movimiento Pj1**: teclas W, A, S, D.

- **Movimiento Pj2**: teclas I, J, K, L.

![fondo_tutorialGIF](https://user-images.githubusercontent.com/72553373/139106969-0d8bb58f-fba6-496d-83e3-85c19aa59072.jpg)

# 3-Interfaz

En esta sección se especificará con detalle cada una de las pantallas que componen “King of the Yard”. Además, se indicarán las transiciones entre ellas así como la utilidad de cada elemento de la GUI (Graphical User Interface). Las imágenes adjuntas son bocetos que ilustran los componentes que debe contener cada pantalla, no obstante, los artistas podrán hacer cambios en la apariencia y disposición de los elementos si así lo consideran oportuno.  
 
## Diagrama de flujo
En este diagrama de estados se muestran todas las pantallas que se podrán ver a lo largo del juego y cómo se llega a cada una de ellas.

### Menú principal
- **Botón Jugar:** Al pulsarlo lleva a la pantalla de Selección de Partida.
- **Boton Ajustes:** Al pulsarlo te lleva a la pantalla de Ajustes.
- **Botón Salir**: Al pulsarlo nos lleva de vuelta al Sistema Operativo.
- 
![image](https://user-images.githubusercontent.com/72553373/139135325-021d65cc-ca72-4010-82f7-af13c2a1ed86.png)

![](https://lh4.googleusercontent.com/6kz1dUd5qaI5FyqX_-wuhK-9RRnQ9BIuvdWtDq3p_DhqIrEU0fv6vGHKy8C2lNE4R7MUWuTtX3zY1KzB0qp4L97yO8rDcFqLVAsUgVi78rZK1pbBWR1IA6A_TWbIfmUuTtutv9Rv=s1600)**

### Sala de chat

![safezone](https://user-images.githubusercontent.com/72553373/143837284-733e8717-e6c7-441a-a63d-0098c4ac58da.PNG)

### Pantalla Ajustes
- **Boton Activar Sonido**: Al pulsarlo activas el audio si este está apagado.
- **Boton Desactivar Sonido**: Al pulsarlo desactivas el audio si este está encendido.

![image](https://user-images.githubusercontent.com/72553373/139135737-881e61c7-19f7-41b1-b07c-a9e7cc8febbe.png)

### Escena Matchmaking

![gif](https://user-images.githubusercontent.com/72553373/146694557-96add425-386a-4d5a-86cc-12547981912e.gif)

### Selección de Partida
- **Botón Offline**: Al pulsarlo lleva a la pantalla de Juego
- **Botón Online**: Al pulsarlo el jugador esperará el emparejamiento y cuando se establezca nos lleva a la pantalla 
de Juego.
**![](https://lh4.googleusercontent.com/SweAG-bAAIXqtIh3TozVLa6Q0O90wO310X41ejuMs2RPuzBitjThTKXmJlXjLxwQ1bWJ-3Hnpq_YXdJN9x6O3mJP7oliOWAlZw5DVGzThe_ryTFQCNbmlkSuuaO1mG2Zi6FyYZ67=s1600)**

**![](https://lh4.googleusercontent.com/eBuloRNUjioA2Q0e4WrzZMkUBz5KiWdk4dBE9dv6RyrQ_DVNLH41BKnW8y4bGzN4e0jtoM4xRf0fagnMbWvOy2pS6kfl2mDgrFSToyZ3Ic05OK6lIw5JvtnVF4ugCqPFQliWTta0=s1600)**

### Juego
- Cuando acaba la partida te lleva a la pantalla de Victoria, en la que aparece el jugador que ha ganado. 
**![](https://lh4.googleusercontent.com/J5wuvDuDZmc1uh5AimaBRO7UYN7CPDDDQUvtUdXlN1S12wffT6Mq5j-LVV7DB1Keo-1iWYBrRUDxhLbADsQa_7rWLOzSuSBo-pUL4mU-5LZiHw3L0-W606Eez_Tz6PZoJQrARmzi=s1600)**
**![](https://lh5.googleusercontent.com/lSNsb4SFkFiqg90pqH1ZQzc9wbLGcNDr48xwTseADx28b4hpyiHTPYU3lw2pApR3dymEKw9KMMhYenHojE8LgiEEhTUYOkv-Ecj0LQ2lZBnFP7cShVU_GtwtBZhpBCKfYzHoJ6vx=s1600)**

### Victoria
- **Botón Salir**: te devuelve a la pantalla de Selección de Partida.

![fondo_victoria_n_GIF](https://user-images.githubusercontent.com/72553373/139136047-32cd2810-0d23-4527-9ea2-49a0f7b29bf2.gif)


# 4-Arte
Uno de los puntos en los que se sustenta *King of the Yard* es la competitividad de los jugadores y la simpleza de un juego de pilla-pilla; por eso el estilo es un doodle 2D. La trama es simple ya que el juego no tiene intención de ser complicado, ya que el objetivo del juego es que los jugadores compitan para convertirse en el nuevo rey del patio y se diviertan consiguiendoló.

## Arte 2D
Las imágenes usadas están en formato .png por su alta calidad y la facilidad de ser integradas por las transparencias de sus fondos. Además, se guardarán siempre los archivos en el formato de edición original.

## Sprites
- **Blue** (animación estática, de movimiento y stun)
**![](https://lh3.googleusercontent.com/LKfyDLtswzx1-5cFJqlzW5eAhQul6v69i5a8-wArMqjIVeLlfd5QRMYcslckkQWJkg2gewqFhLRATljSd-Zj3G9HiWtdcyZUACIwq8E_TZ6ibq9pqI9jmtUVBU6drQiSKqVmefAM=s1600)**
- **Red** (animación estática, de movimiento y stun)
**![](https://lh3.googleusercontent.com/GSRVqQEPgrcFS1pQ67_2l9sDCwZe5916P9s3pkeq09e6C_tO7sQJJKVQXkwxuq5T4QTHq7THAv0Xw6_JelVsQlVfjWu2X1JrkspNto2NAP2XEOA9TU5d6YKjafbEb7gvBdHZPmTM=s1600)**
- Power Ups (animación estática)
- Objetos móviles (animación de movimiento)
## Tiles
- Suelo
- Casas
- Obstáculos
- Otros
# Audio
En este apartado se hacen referencia a todos los archivos de audio que existen en el interior del juego.

## Música
- [Menú principal](https://github.com/SaYoTiTo/Proyecto_JeR_KingOfTheYard/blob/main/King%20of%20the%20Yard/assets/Music/GameMusic.wav)
- [Juego](https://github.com/SaYoTiTo/Proyecto_JeR_KingOfTheYard/blob/main/King%20of%20the%20Yard/assets/Music/Menu%20Music.wav)
- [Victoria](https://github.com/SaYoTiTo/Proyecto_JeR_KingOfTheYard/blob/main/King%20of%20the%20Yard/assets/Music/VictoryMusic.wav)
## Efectos
- [Golpe](https://github.com/SaYoTiTo/Proyecto_JeR_KingOfTheYard/blob/main/King%20of%20the%20Yard/assets/Music/Punch%20Hit%20Sound%20Effect.mp3) 
- [Victoria](https://github.com/SaYoTiTo/Proyecto_JeR_KingOfTheYard/blob/main/King%20of%20the%20Yard/assets/Music/Victory%20Sound%20Effect.mp3) 

## Diagrama de clases y API REST

![UML_KINGOFTHEYARD](https://user-images.githubusercontent.com/72553373/143836502-917d346d-a5f2-42ba-9ef6-403f3979ea9b.png)

## Gestion de cliente/servidor - Juego Online mediante STOMP

Para la gestion del multijugado real se ha usado websockets, que permitiran a los clientes subscribirse a un canal y recibir directamente los mensajes que se envien a el. Para lograr esto se ha empleado el protocolo STOMP, que proporciona un manejo sencillo y eficaz de mensajes simples.

Documentacion de STOMP 1.1: https://stomp.github.io/stomp-specification-1.1.html

Se ha decidido usar un modelo de cliente autoritativo, donde los clientes informan al servidor de su estado y el cliente se encarga de comunicarle este a los demas, dejando al servidor con una funcionalidad de "eco", donde solo reenvia los mensajes que le llegan. Existira un canal para cada partida y los jugadores enviaran y recibiran mensajes en ese canal.

Algo de lo que si se encarga el servidor es el matchmaking. Los clientes se subscribian a un canal de matchmaking y el servidor los ira metiendo en una lista segun lo hagan. Una vez que haya 2 o mas jugadores se enviara un mensaje con el id de sala asociada a ellos y se les eliminara de la lista. Los clientes se encargan de desubscribirse de este canal y subscribirse al canal de la sala que se les ha asociado. Para detectar desconexiones en este apartado, su usa un metodo de "ping-pong". El cliente envia cada poco un "ping" que el servidor recibe, marcando al jugador que lo ha recibido. Tras esto devuelve un "pong" al cliente. El cliente al recibirlo marcara que sigue conectado al servidor. Si el cliente intenta enviar un "ping" sin haber recibido el "pong" interpretara que se ha desconectado del servidor y se movera a una pantalla de desconexion. El servidor cada cierto tiempo ejecuta una funcion que elimina a todos los jugadores que no esten marcados, interpretando que se han desconectado, y desmarcara a todos los demas.

Respecto a la comunicación entre clientes, estos enviaran mensajes formados por 3 atributos, el tipo de mensaje, el usuario que lo envio y la información que contiene (como campo de texto). Esto permite enviar e interpretar todo tipo de mensajes sin una gran complicación. Lo más básico que sincronizan los clientes es su movimiento. Cada cliente envia cada pocos milisegundos un mensaje de tipo movimiento que contiene en la información un objeto JSON con su posicion, velocidad, y atributos de visualización (número de animación y flip). Al recibir un mensaje de este tipo, se aplicaran los cambios que corresponden al jugador contrario.

Otros tipos de mensajes que se pueden encontrar son:

 - Aturdido: cuando un jugador golpea el otro se envia este mensaje para indicarle que ha recibido un golpe y tiene que desplazarse.
 - Victoria: si un jugador consigue llegar a cualquier escena de victoria, se envia un mensaje con el tipo de victoria conseguida para mostrarla tambien en el otro cliente
 - Sincronizacion: este tipo de mensaje se envia cuando un jugado esta listo para empezar. Cuando ambos jugadores han enviado y recibido este mensaje, se comienza el juego.

Los jugadores solo interpretan mensajes provenientes de jugadores distintos a ellos mismos. Si no reciben mensajes de otros jugadores en una cierta cantidad de tiempo, se interpretara que se han desconectado y se saldra a una pantalla de desconexión.

![image](https://user-images.githubusercontent.com/72553373/146694938-e1fa904c-5628-404b-8cb9-cf3accb4765b.png)


