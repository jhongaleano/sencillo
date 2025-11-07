# React Fundamentos — Código fuente



## 🧱 1.¿Cómo se aplica el flujo de datos unidireccional y que son estos datos?

>El flujo de datos unidireccional (One-Way Data Flow) es un patrón de arquitectura donde los datos se mueven en una sola dirección a lo largo de la aplicación.
>
>¿Qué son estos Datos? En el front-end moderno (especialmente en React), estos datos son el Estado (State) y las Propiedades (Props).
>
>[Estado (State):] Datos privados y gestionados dentro de un componente. Solo pueden ser modificados por el propio componente.
>
>[Propiedades (Props):] Datos que se pasan de un componente padre a un componente hijo. Son de solo lectura para el componente hijo.
>
---
## ⚙️ 2. Papel del Estado (useState) y su Influencia en el Renderizado

>El Estado (gestionado por el Hook useState en React) es el motor que impulsa la dinámica de cualquier aplicación.
>
>Papel del Estado:
>
>Almacenamiento: Mantiene el valor actual de una variable que el componente debe recordar (ej. si un menú está abierto, el texto que un usuario está escribiendo, la lista de productos en un carrito).
>
>Reactivdad: Es la única forma en que un componente puede "recordar" datos entre renderizados y la única señal que tiene React para saber que necesita actualizar la UI.
>
>Influencia en el Renderizado:
>
>Cuando llamas a la función actualizadora del estado (ej. setContador(nuevoValor)), React automáticamente programa un re-renderizado (re-render) del componente.
>
>Durante el re-renderizado, el componente ejecuta nuevamente su lógica, usa el nuevo valor del estado para calcular el nuevo output de la UI (JSX), y React actualiza eficientemente solo las partes del DOM que han cambiado.
>
---

# 🧩 3. Importancia de Componentes Reutilizables y Puros

>Separar la interfaz de usuario (UI) en componentes es la base de las librerías modernas.
>
>-Componentes Reutilizables:
>
>Importancia: Permiten construir la aplicación más rápido al evitar la duplicación de código (principio DRY). Un componente de botón, por ejemplo, se define una vez y se usa en cualquier parte, solo cambiando sus propiedades (props). Esto mejora la consistencia del diseño.
>
>-Componentes Puros:
>
>Definición: Un componente es puro si siempre renderiza el mismo resultado (el mismo JSX) dadas las mismas entradas (las mismas props y el mismo state).
>
>Importancia: La pureza garantiza la previsibilidad y permite a React (o frameworks similares) implementar optimizaciones de rendimiento, como evitar re-renderizados innecesarios si las props o el state no han cambiado (ej. usando React.memo).
>
---
# 🧩 4 Ventajas de JSX Declarativo vs DOM Imperativo
|caracterizticas|JSX Declarativo|DOM Imperativo|
|---------------|---------------|--------------|
|enfoque|Qué quieres que sea la UI en cualquier momento.|Cómo llegar a ese estado (paso a paso).|
|Manejo del DOM|Abstracto (React se encarga de manipular el DOM).|Manual (tienes que seleccionar, crear, modificar y adjuntar elementos).|
|Legibilidad|Alta. La estructura de la UI se asemeja a HTML.|Baja. El código se llena de instrucciones de manipulación (getElementById, setAttribute, appendChild).|
|Ventaja Principal|Reduce la carga cognitiva del desarrollador al eliminar la necesidad de pensar en las transiciones y manipulaciones directas del DOM. Simplemente declaras el estado final deseado.|
---

# 🧩 5. ¿Cómo podrías mejorar la app agregando tres componentes nuevos sin romper la coherencia del diseño ni la lógica?
>A esta app le podriamos agregar una navegacion para que sea mas facil saber el contenido que se puede visualizar en la aplicacion.
>ah esta misma le podriamos agregar un footer para que tenga unos derecho de autor y a quien le pertece el aplicativo o a que empresa se esta refieriendo
>pir ultimo se le podria agregar una galeria sencilla para la vizualizacion de algunos los productos o cartas de presentacion del equipo y/o empresa



---


