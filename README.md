# Proyecto: Prueba técnica – React.js.

## Descripción del proyecto.

El proyecto consiste en una página, donde el usuario puede agregar, modificar y eliminar tareas. 
El diseño es muy simple, no era mi objetivo trabajar muchos los estilos de la página con Css, trabaje con Boostrap y le agregue algunos toques con Css finalmente.

## Funcionalidad:

- **Formulario:** He incluido un formulario que permite al usuario cargar tareas o actividades pendientes, donde se puede agregar, un título o nombre, una breve descripción de la tarea y la fecha límite hasta la cual puede ser realizada. Para eso cree 3 input con sus encabezados correspondientes. 
El formulario le pide de manera obligatoria el ingreso del título, en caso contrario, largara una alerta, no así con la descripción y la fecha, ya q me parecía q algunas actividades no tenían necesidad de tener una descripción y tampoco una fecha límite. Finalmente el formulario tiene 2 botones, 1 es para agregar la tarea a la lista y el otro es para limpiar el formulario rápidamente, en caso de que el usuario se haya equivocado en algún campo.

- **Tabla-lista:** Bajo el formulario aparecerá una lista donde se muestran de manera detallada las tareas, su nombre, su descripción y su fecha de vencimiento (en caso de tener). A su vez cuenta con 2 botones con funciones onClick: 
- [x]	El primero permite modificar la tarea, en tal caso al hacer click lo llevara nuevamente al formulario donde aparecerán completos todos los campos de la tarea, ahí podrá modificar lo q crea necesario el usuario, en caso de no querer finalmente modificar nada, deberá hacer click en el botón LimpiarFormulario y la acción se dará por terminada, sin haber modificado nada. (- **Obsevación:** al llamar nuevamente al formulario, el usuario podrá ver que el botón Agregar cambia a Modificar).

- [x]	El segundo botón va a permitir eliminar la tarea seleccionada, al hacer click en eliminar primero largara una alerta, donde le preguntara al usuario si está seguro q desea eliminar la tarea.

Finalmente, en la lista se encuentra una casilla de verificación, creada con una etiqueta input de tipo checkbox donde al hacer click, se disparará un mensaje dentro de la tabla con la leyenda “Tarea realizada”, en caso de desmarcar el casillero desaparecerá el mensaje.

- **Barra de navegacion:** En el caso de la barra de navegación, mi idea fue mantenerla de la manera más sencilla, en la esquina izquierda se encuentra el nombre de fantasía de la aplicación y del lado izquierdo, me pareció pertinente colocar la fecha actual, ya q el usuario podría compararla con las fechas límites de sus tareas o compromisos.

- **Footer:** Finalmente agregue un footer muy sencillo, donde coloque mi nombre, el nombre del proyecto y el Global Learning.

 # Cómo Ejecutar el Proyecto
¡Hola! ¿Como estas? ¡Es genial que estés interesad@ en ejecutar nuestro proyecto! Te muestro los pasos a seguir:

Clonar el Repositorio: Lo primero que necesitas hacer es clonar el repositorio del proyecto desde GitHub. No te preocupes, es fácil. Aquí te explico cómo hacerlo:
- [x] Abre el repositorio del proyecto en GitHub.
- [x] Haz clic en el botón "Code" y copia la URL del repositorio.
- [x] Abre tu terminal o línea de comandos en tu máquina local.
- [x] Navega a la ubicación donde deseas clonar el repositorio.
- [x] Ejecuta el siguiente comando para clonar el repositorio:
- ``` git clone https://github.com/martinjosmac/martinjosmac-proyecto_Global_Learning_CrudTareas.git``` 


¡Te deseamos mucha suerte en tus futuros proyectos! Si necesitas más información o tienes alguna pregunta, no dudes en ponerte en contacto con nosotros. ¡Gracias nuevamente por tu apoyo y confianza en nuestro proyecto!

## Equipo de Desarrollo

- Martin: [GitHub](https://github.com/martinjosmac)


