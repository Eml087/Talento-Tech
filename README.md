# Presentación

Hola Profe, le comento que soy desarrollador de Python. Me gusta más el **Backend** que el **Frontend**, aunque todavía no ejerzo porque siento que me falta mucho por aprender.

Hace 20 años trabajé como desarrollador en C. Luego me pasé a la industria farmacéutica, capacitando visitadores médicos sobre las aplicaciones que yo desarrollaba. Pasé aproximadamente 20 años dando cursos y haciendo soporte, pero sin desarrollar activamente.

Hace 2 años comencé con Python y tuve que prácticamente empezar desde cero, ya que había muchas tecnologías que no conocía.

En este proyecto me costó mucho entender cómo ordenar los componentes. Antes de subir el proyecto a GitHub realicé al menos 10 versiones de la web para poder entender mejor el proceso. Miré muchos videos, además de los de la clase, y finalmente, con un poco de ayuda de Border —que utilizo para entender dónde empieza y termina cada cosa— logré comprender mejor el ordenamiento en CSS.

Al principio usaba demasiadas etiquetas HTML para contener objetos y también entendí que muchas propiedades no se heredaban como yo pensaba.

Estoy haciendo una web que realmente no existe y probablemente no tenga utilidad real, pero considero que me sirve mucho para aprender porque tiene varias cosas complejas.

Utilicé IA para generar una imagen inspirada en una web con estética del juego Cyberpunk 2077 y luego obtener las fuentes y la paleta de colores. Las imágenes generadas pueden verse dentro de la carpeta `IMG` del proyecto.

Decidí hacerlo así porque no soy diseñador y me cuesta combinar colores de manera estética.

Cuando necesito usar algo de CSS que vimos superficialmente, trato primero de entender cómo funciona antes de implementarlo. No quiero agregar nada al código que no comprenda realmente.

Claramente el proyecto todavía no está terminado y pienso seguir actualizándolo lo más posible.

Si nota algo que debería cambiar o considera que estoy implementando algo de manera incorrecta, agradecería mucho que me lo haga saber.

---

# Anotaciones

- Usar la fuente **Rajdhani** para los títulos grandes en mayúsculas  
  *(Ejemplo: “EL MERCADO NEGRO”)*

- Usar **Tecnologías Mono** para los textos de los apartados  
  *(Ejemplo: “HARDWARE SIN RESTRICCIONES”)*

# Manual de Implementación Técnica (Resumen)

## Tipografía de Títulos
- Utilizar **Rajdhani Bold**
- Aplicar:
  - `text-transform: uppercase`
  - `letter-spacing` leve para lograr una estética tecnológica

## Tipografía de Datos
- Implementar **Roboto Mono**
- Utilizarla en:
  - precios
  - modelos
  - terminales de datos
  - información técnica

## Geometría
- No utilizar esquinas redondeadas
- Implementar bordes biselados con cortes a 45°
- Utilizar `clip-path` en CSS para:
  - contenedores
  - botones
  - tarjetas

## Efectos de Iluminación
- Utilizar:
  - `box-shadow`
  - `text-shadow`
- Aplicar el color:
  - `#FCEE09`
- Objetivo:
  - generar efecto de brillo neón sobre fondos oscuros

## Interactividad
- Agregar transiciones rápidas
- Implementar efectos tipo glitch al pasar el cursor sobre los productos
- Reforzar una estética de software futurista y avanzado
