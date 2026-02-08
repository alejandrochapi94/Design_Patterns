Clase 2 — Factory Method (Factory) en la práctica: eliminar “if/else” gigantes y aislar cambios
1) Problema real que motiva Factory

En proyectos web (APIs, backends), uno de los crecimientos más comunes es:

aparecen nuevos tipos (empleado fijo/temporal/contratista, producto físico/digital/servicio, pagos stripe/paypal, envíos local/internacional)

y el código empieza a llenarse de if/else o switch para crear objetos y aplicar reglas.

Síntomas de “sin patrón”:

Cada vez que agregas un tipo nuevo, editas 5 archivos.

Hay un switch(tipo) enorme en un controlador o servicio.

Se rompe el principio Open/Closed: tu sistema NO está “abierto a extensión y cerrado a modificación”.

Factory te ayuda a centralizar la creación de objetos y a reducir el acoplamiento.

2) ¿Qué es Factory Method?

Intención: definir una interfaz/método para crear objetos, pero permitir que subclases o fábricas concretas decidan qué clase instanciar.

En palabras simples:

“En vez de hacer new por todo lado, delego la creación a una fábrica.”

Qué resuelve:

Centraliza la lógica de creación.

Reduce if/else dispersos.

Facilita agregar nuevos tipos sin tocar lo existente (o tocando solo la fábrica).