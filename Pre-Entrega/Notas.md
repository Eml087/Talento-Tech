

## Implementar Lista de Productos

### Pasos

    1. Tenes una Array con los contenidos de los productos.
    2. Crear el HTML de cada Targeta.
    3. Almacenar el Array en un map para poder recorrerlo.

### Sintaxis
    1. Array Prodcutos
    ```javascript
    Código.```



## Metodos para seleccionar elementos del **DOM**

### Lista de Metodos

- Metodo `getElementById()`: Selecciona por ID
- Metodo `getElementsByClassName()`: Selecciona por Clase
- Metedo `querySelector()`: Seleciona el primer elemento que conincida
- Metodo `querySelectorAll()`: Devuelve una lista de Nodo de los elemntos seleccionados.


### Ejemplo
```javascript
const btn = document.querySelector("button");
```

---
---

## Capturar Eventos JavaScript

El evento `addEventListener` captura un *Evento* para luego pasarle una funcion


### Metodo `addEventListener()`


    1. Seleccionamos un Elemento del DOM
    2. Agrgamos un **Evento** al **Elemento**
    3. Ejecutar la Funcion al accionar el Evento

### Sintaxis
```javascript
elemento.addEventListener(evento, funcion);
```

### Ejemplo
```javascript
const boton = document.querySelector('#btn');

boton.addEventListener('click', () => {
    console.log('Botón presionado');
});
```

### Eventos comunes
    - click
    - dblclick
    - mouseover
    - mouseout
    - keydown
    - keyup
    - submit
    - input
    - change


## Metodo **MAP**

### Que hace MAP
**MAP** recorre un Array y ejecuta una funcion por cada item y *crea un nuevo array* en una constante

### Sintaxis
```javascript
const targeta = productos.map(({id, producto, precio, categoria}) =>{
    return `Estructura HTML`
})
```


<!-- Este es un comentario oculto en Markdown

Estructuta MD

## Nombre del concepto

### ¿Qué es?
Explicación breve.

### Sintaxis
    ```javascript
    Código.```

### Ejemplo
Código real.

### Parámetros
Tabla.

### Notas
Detalles importantes.

### Errores comunes
Lo que suele causar problemas.
-->