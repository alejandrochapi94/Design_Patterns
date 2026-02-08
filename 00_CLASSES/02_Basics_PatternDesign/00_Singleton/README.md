Clase 1 — Introducción a patrones + comparación “sin patrón vs con patrón” + Singleton
1) Idea base: ¿qué es un patrón de diseño?

Un patrón de diseño es una solución reutilizable a un problema común de diseño de software. No es una librería ni un “copy/paste” obligatorio: es una forma de organizar el código para que sea más mantenible, extensible y fácil de probar.

Qué NO es un patrón

No es una regla absoluta.

No siempre mejora el código (a veces complica sin necesidad).

No reemplaza un buen diseño: lo guía.

Por qué existen
En proyectos reales, el “código que funciona” suele volverse caro por:

cambios frecuentes (nuevos tipos, reglas, integraciones)

crecimiento del equipo

necesidad de pruebas automatizadas

necesidad de separar responsabilidades

2) ¿Qué significa “sin patrones vs con patrones”?

Piensa en esto como dos formas de diseñar:

Sin patrones (típico al inicio)

Instancias objetos “donde haga falta”.

Repetición de lógica.

Dependencias fuertes: si cambia algo, cambias en muchos archivos.

Es difícil reemplazar o simular dependencias en pruebas.

Con patrones

Centralizas decisiones repetidas (creación, configuración, acceso).

Reducir acoplamiento y duplicación.

Te da puntos claros para extender.

Mejoras testeo y lectura (intención explícita).

La meta de la clase: ver un caso muy común donde aparece el problema: “necesito una única configuración/log” compartida por todo el sistema”.

3) Patrón Singleton
3.1 ¿Qué es Singleton?

Singleton asegura que exista una sola instancia de una clase, y provee un punto global y controlado para accederla.

Intención

“Quiero un único objeto compartido por todo el sistema”

“No quiero que se cree múltiples veces por accidente”

3.2 ¿Qué problema resuelve?

Evita:

tener configuraciones distintas en distintos lugares

tener múltiples loggers/caches desconectados

duplicación de recursos o estados inconsistentes

3.3 Casos típicos en desarrollo web

Config global (variables de entorno, flags, URLs de servicios)

Logger (misma configuración de niveles, formato, destino)

Cache/Métricas (contadores, métricas del sistema)

Feature flags / toggles

Ojo: “conexión a DB” no siempre es buen Singleton en web moderna; suele usarse pool y gestión por framework/driver. Singleton puede aparecer “envolviendo” el pool, pero el concepto clave es no confundir “un recurso” con “un objeto global” sin control.

4) Ejemplo sin patrón vs con Singleton (caso: administración de empleados)

Vamos a simular algo simple: un “EmployeeService” que registra empleados.
Además, queremos log y configuración consistente.