# Design_Patterns
## Complete course about design patterns

Lo que vamos a cubrir de cada patrón (formato estándar por clase)

Para que tus clases sean consistentes, en cada patrón trabajamos:

- Qué es (intención)
- Qué problema resuelve (dolor real)
- Cuándo aplicarlo en web (Node/Express, APIs, servicios, DB, terceros, etc.)
- Cómo se ve “sin patrón” (código rígido, repetición, if/else, acoplamiento)
- Refactor “con patrón”
- Ejercicios guiados + reto final
- Antipatrones / cuándo NO usarlo

## Total de horas: 5h (provisional)

Información de cada clase.

## Clase 1 — Introducción + ¿por qué patrones? + Singleton

Objetivo: que entiendan qué problema resuelven los patrones y vean un caso claro con Singleton.

Qué son patrones, beneficios y riesgos (overengineering).

Demo “sin patrones vs con patrones” (ejemplo simple: Gestión de empleados + logger/config).

Singleton: intención, estructura, cuándo sí/cuándo no (web).

Taller: refactor de un ejemplo “malo” a una versión correcta.

Quiz + checklist de señales para aplicar Singleton.

## Clase 2 — Factory Method (Factory) aplicado a casos web

Objetivo: aprender a crear objetos sin “if/else” gigantes, y aislar cambios.

Repaso de “new” por todos lados y problemas típicos.

Ejemplo “sin patrón” (mercadería: productos físicos/digitales con reglas distintas).

Factory Method: intención, roles, variaciones.

Taller: construir Factory para crear Empleado o Producto según tipo.

Preguntas + mini reto.

## Clase 3 — Abstract Factory (familias de objetos) + UI/DB/Servicios

Objetivo: diferenciar Factory vs Abstract Factory y usarlo con “familias” coherentes.

Diferencias: Factory vs Abstract Factory (con mapa mental).

Ejemplo “sin patrón”: cambiar “proveedor” rompe todo (DB MySQL/Postgres o Pasarela Stripe/PayPal).

Abstract Factory: fábrica de fábricas y familias.

Taller: “Sistema de nómina” que cambia de proveedor (o entorno dev/prod).

Cierre + ejercicios.

## Clase 4 — Prototype (clonado) + performance y plantillas

Objetivo: cuándo conviene clonar en vez de construir desde cero (configuraciones, plantillas, objetos complejos).

Problema: construir objetos “pesados” repetidamente.

Ejemplo “sin patrón”: creación repetida de configs/plantillas de reportes.

Prototype: clonado, shallow vs deep copy, riesgos.

Taller: prototipos para crear “Pedidos/Reportes” base y clonarlos.
