---
title: Redis en NodeJS
description: Conceptos básicos de Redis en NodeJS.
prev:
  link: /es/learn/redis
  label: Get started
next:
  link: /unrelated-page/
  label: Check out this other page
---

import { Tabs, TabItem } from "@astrojs/starlight/components";

## Usando Redis en Node.js

### Prerrequisitos

- Node.js instalado en tu sistema.
- Servidor Redis ejecutándose en tu máquina o accesible remotamente.

### Paso 1: Instalar Cliente Redis para Node.js
Utiliza el instalador de paquetes que prefieras para instalar el paquete de `redis`:
<Tabs>
  <TabItem label="npm">
    ```shell
    npm install redis
    ```
  </TabItem>
  <TabItem label="pnpm">
    ```shell
    pnpm install redis
    ```
  </TabItem>
  <TabItem label="yarn">
    ```shell
    yarn install redis
    ```
  </TabItem>
</Tabs>

### Paso 2: Requerir Redis en tu aplicación Node.js

Requiere el módulo `redis` en tu aplicación Node.js:

```javascript
const redis = require('redis');
// o
import redis from "redis";
```

### Step 3: Create a Redis Client

Creat un cliente de Redis usando `createClient()`:

Si no indicamos ningún puerto o host a `createClient()`, utilizará como valores por defecto **6379** para el puerto y localhost como servidor.

```javascript
const client = redis.createClient(/*port, host*/);
```

### Paso 4: Interactuar con Redis

Utiliza el cliente para interactuar con Redis:

```javascript
client.set('clave', 'valor', redis.print);
client.get('clave', function(err, reply) {
  console.log(reply);
});

client.expire('clave', 60);
client.incr('contador', function(err, reply) {
  console.log(reply);
});
```

### Paso 5: Gestión de errores

Control de errores que puedan ocurrir durante las operaciones de Redis:

```javascript {1-3}
client.get('claveNoExistente', function(err, reply) {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Respuesta:', reply);
  }
});
```

### Paso 6: Cerrar la conexión

Cerrar la conexión con el servidor Redis:

```javascript
client.quit();
```

### Otras funcionalidades

#### MSET

Con `mset()` asignamos una lista de pares clave-valor en una operación atómica. Con `mget()` obtenemos la matriz de valores asociada a una lista de claves pasada como serie clave-valor.

```javascript
client.mset('a', 10, 'b', 20, 'c', 30);

client.mget(['a', 'b', 'c'], function (err, res) {
    for (var i = 0, len = res.length; i < len; i++) {
        console.log(res[i]);
    }
});
```

#### DEL

Con `del()` borramos una clave o lista de claves.

```javascript
client.del('foo', function(err, reply) {
    console.log(reply);
});
```

#### INCR, DECR, INCRBY, DECRBY

`incr` y `decr` incrementan o decrementan el valor de la clave especificada en 1.

`incrby` y `decrby` incrementan o decrementan el valor de la clave especificada en el argumento proporcionado.

`incrbyfloat()` permite incrementar o decrementar por un valor decimal dependiendo de si el valor proporcionado es positivo o negativo.

```javascript
client.set('contador', 100);
client.incr('contador');

client.incrby('contador', 9);
client.decrby('contador', 4);

client.decr('contador');
client.incrbyfloat('contador',1.5);

client.get('contador', function(err, reply) {
    console.log(reply);
});
```

#### EXIST

El método `exist()` permite determinar si la clave pasada como parámetro existe o no. El siguiente ejemplo muestra si la clave `saludo` existe.

```javascript {2-3}
client.set('saludo', 'Hello World!!');
if (client.exists('saludo',  function(err, reply) {
    if (reply == 1) {
        console.log('existe');
    } else {
        console.log('no existe');
    }
}));
```

#### LISTAS

Las listas son colecciones de valores que admiten repetición.

`lpush` inserta al principio (izquierda) de la clave especificada el valor proporcionado. rpush inserta al final (derecha).

`rpop` extrae un valor del final (derecha) de la clave especificada.

`linsert` inserta en la clave especificada el valor proporcionado. El valor se inserta antes `BEFORE` o después `AFTER` del valor especificado (pivote).

`lset` coloca en la clave especificada el valor proporcionado en la posición especificada.

```javascript
client.del('sesiones:ggvd');

client.lpush('sesiones:ggvd', 'Sesion02');
client.rpush('sesiones:ggvd', ['Sesion04', 'Sesion05']);
client.lpush('sesiones:ggvd', 'La Sesion 01');
client.rpop('sesiones:ggvd');
client.linsert('sesiones:ggvd', 'BEFORE', 'Sesion04', 'Sesion03');
client.lset('sesiones:ggvd', 0, 'Sesion01');

client.lrange('sesiones:ggvd', 0, -1, function(err, reply) {
        console.log(reply);
});


client.del('sesiones:ggvd');
```

#### SETS

Los conjuntos son colecciones de valores que no admiten duplicados.

`sadd` añade los elementos proporcionados a la clave especificada.

`srem` elimina los elementos proporcionados de la clave especificada.

`smembers` devuelve todos los miembros del conjunto asociado a la clave especificada.

`scard` devuelve el número de elementos del conjunto de la clave especificada.

```javascript
client.del('estudiantes:ggvd');

client.sadd('estudiantes:ggvd', 'estudiante1', 'estudiante2', 'estudiante3');
client.srem('estudiantes:ggvd', 'estudiante3');

client.smembers('estudiantes:ggvd', function(err, reply) {
    console.log(reply);
});

client.scard('estudiantes:ggvd', function(err, reply){
        console.log(reply);
});

client.del('estudiantes:ggvd');
```

#### SET OPERATIONS

`sunion`, `sinter` y `sdiff` obtienen respectivamente la unión, la intersección y la diferencia de conjuntos.

```javascript
client.del('estudiantes:ggvd');

client.sadd('estudiantes:ggvd', 'estudiante1', 'estudiante2', 'estudiante3');
client.sadd('estudiantes:bd', 'estudiante3', 'estudiante4', 'estudiante5');

client.sunion('estudiantes:bd', 'estudiantes:ggvd', function(err, reply) {
    console.log('  >> Union:');
    console.log(reply);
});

client.sinter('estudiantes:bd', 'estudiantes:ggvd', function(err, reply) {
    console.log('  >> Intersection:');
    console.log(reply);
});

client.sdiff('estudiantes:bd', 'estudiantes:ggvd', function(err, reply) {
    console.log('  >> Difference:');
    console.log(reply);
});

client.del('estudiantes:ggvd');
```

#### SORTED SETS

Sorted sets are sets whose elements are accompanied by a score that allows ordering in the set.

`zadd` adds the provided score and element to the specified key.

`zincrby` adds the provided value to the score of the specified key's element.

`zcount` returns the number of elements in the set that have their score within the provided bounds.

`zrangebyscore` returns the elements of the specified key's set whose scores are in the provided range.

```javascript
client.del('scores:ggvd');

client.zadd('scores:ggvd', 9, 'estudiante1');
client.zadd('scores:ggvd', 3, 'estudiante2');
client.zadd('scores:ggvd', 8, 'estudiante3');

client.zincrby('scores:ggvd', 1, 'estudiante2');

client.zcount('scores:ggvd', 5, 10, function(err, reply) {
    console.log('Number of passing estudiantes: ');
    console.log(reply);
});

client.zrangebyscore('scores:ggvd', 5, 10, function(err, reply) {
    console.log('estudiantes who passed: ');
    console.log(reply);
    
});

client.del('scores:ggvd');
```

#### HASHES

Hashes are lists of field-value pairs associated with a key.

`hset` assigns the provided field and value to the specified key.

`hget` gets the value associated with the specified key and field.

`hkeys` gets an array with the list of fields of a key.

```javascript
client.del('professor:mtorres');

client.hset('professor:mtorres', 'email', 'mtorres@ual.es');
client.hset('professor:mtorres', 'name', 'Manuel');
client.hset('professor:mtorres', 'surname', 'Torres Gil');
client.hset('professor:mtorres', 'twitter', '@ualmtorres');

client.hget('professor:mtorres', 'email', function(err, reply) {
    console.log("Email " + reply);
});

client.hkeys('professor:mtorres', function(err, keys) {
    console.log("Keys: ", keys);
});

client.del('professor:mtorres');
```

#### TRANSACCIONES

Las transacciones se inician con `multi()`. Para finalizar la transacción, utilizaremos:

`exec()`: ejecuta las instrucciones de una transacción.
`descart()`: cancela las instrucciones de una transacción.

```javascript
client.del('a', 'b');

t = client.multi();
t.set('a', '1');
t.set('b', '2');
t.exec();

client.get('a', function(err, reply) {
    console.log('a after exec: ' + reply);
});

client.get('b', function(err, reply) {
    console.log('b after exec: ' + reply);
});

t = client.multi();
t.set('a', '3');
t.set('b', '4');
t.discard();

client.get('a', function(err, reply) {
    console.log('a after discard: ' + reply);
});

client.get('b', function(err, reply) {
    console.log('b after discard: ' + reply);
});

client.del('a', 'b');
```