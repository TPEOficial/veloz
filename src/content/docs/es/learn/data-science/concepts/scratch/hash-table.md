---
title: Tabla Hash
description: ¿Qué es una tabla hash?
---

**Tabla Hash**
=====================

## ¿Qué es una tabla hash?

Una tabla Hash es un contenedor asociativo (tipo Diccionario) que permite un almacenamiento y posterior recuperación eficientes de elementos (denominados valores) a partir de otros objetos, llamados claves.

Una tabla hash se puede ver como un conjunto de entradas. Cada una de estas entradas tiene asociada una clave única, y por lo tanto, diferentes entradas de una misma tabla tendrán diferentes claves. Esto implica, que una clave identifica univocamente a una entrada en una tabla hash.

Por otro lado, las entradas de las tablas hash están compuestas por dos componentes, la propia clave y la información que se almacena en dicha entrada.

::: details Fácil & Rápido
Una **tabla hash** es como una gran caja de almacenamiento con muchos compartimentos donde puedes guardar cosas de manera rápida y fácil.

Imagina que tienes una lista de juguetes y quieres encontrar uno rápidamente. La tabla hash usa una especie de **"truco mágico"** llamado función hash que convierte el nombre del juguete en un número, y ese número te dice en qué compartimento de la caja está guardado.

Así, puedes encontrar tu juguete favorito sin tener que buscar en todos los compartimentos uno por uno.
:::

### ¿Cómo funciona una tabla hash?

1. **La función hash**: Una función hash toma una clave como entrada y devuelve un índice o dirección dentro de la tabla hash donde debe almacenarse el valor correspondiente. El objetivo de la función hash es distribuir las claves uniformemente por la tabla para minimizar las colisiones (cuando dos o más claves se asignan al mismo índice).

2. **La matriz**: Una tabla hash está formada por un array de entradas, que será la estructura que almacene la información, y por una función de dispersión. La función de dispersión permite asociar el elemento almacenado en una entrada con la clave de dicha entrada. Por lo tanto, es un algoritmo crítico para el buen funcionamiento de la estructura.

3. **Manejo de colisiones**:
   - La estructura de las tablas hash es lo que les confiere su gran potencial, ya que hace de ellas unas estructuras extremadamente eficientes a la hora de recuperar información almacenada. El tiempo medio de recuperación de información es constante, es decir, no depende del tamaño de la tabla ni del número de elementos almacenados en la misma.

   - Cuando se trabaja con tablas hash es frecuente que se produzcan colisiones. Las colisiones se producen cuando para dos elementos de información distintos, la función de dispersión les asigna la misma clave. Como se puede suponer, esta solución se debe arreglar de alguna forma. Para ello las tablas hash cuentan con una función de resolución de colisiones.

   - **Encadenamiento separado**: Las coliciones se resuelven insertándolas en una lista. De esa forma tendríamos como estructura un vector de listas. Al número medio de claves por lista se le llama factor de carga y habría que intentar que esté próximo a 1.
   - **Direccionamiento abierto**: Utilizamos un vector como representación y cuando se produzca una colisión la resolvemos reasignándole otro valor hash a la clave hasta que encontremos un hueco.

<img src="https://cdn.tpeoficial.com/learn/Cc2Tq0Ty5Me3Ks3Hm9Xl9Ae0Vq6Ai3Ak9Tb2Sy2P" loading="lazy" width="512" height="1080">

### Ventajas de las tablas hash

- **Rendimiento en tiempo constante**: Pueden realizar inserciones, búsquedas y eliminaciones en tiempo constante de media, lo que las hace muy eficientes para muchas aplicaciones.
- **Flexibilidad**: Pueden utilizarse para implementar otras estructuras de datos, como conjuntos, diccionarios y tablas de símbolos.
- **Simplicidad**: Son relativamente sencillas de implementar y entender en comparación con otras estructuras de datos.

### Desventajas de las tablas hash

- **Colisiones**: Aunque las funciones hash intentan minimizar las colisiones, éstas pueden ocurrir, especialmente con grandes conjuntos de datos. La gestión de las colisiones puede sobrecargar el rendimiento de la tabla hash.
- **Tamaño fijo**: El tamaño de la tabla hash se fija cuando se crea, y cambiar su tamaño puede ser costoso.
- **Ordenación**: Las tablas hash no mantienen el orden original de los elementos insertados, ya que el orden viene determinado por la función hash.

Las tablas hash se utilizan ampliamente en diversas aplicaciones, como el almacenamiento en caché, las tablas de símbolos y la indexación de bases de datos, debido a su eficiente rendimiento y flexibilidad.