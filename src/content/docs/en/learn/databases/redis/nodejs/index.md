---
title: Redis in NodeJS
description: Redis Basics in NodeJS.
---

# Redis

## Using Redis in Node.js

### Prerequisites

- Node.js installed on your system.
- Redis server running on your machine or accessible remotely.

### Step 1: Install Redis Client for Node.js
Use your preferred package installer to install the `redis` package:
::: code-group
```sh [npm]
$ npm install redis
```
```sh [pnpm]
$ pnpm install redis
```
```sh [yarn]
$ yarn install redis
```
:::

### Step 2: Require Redis in Your Node.js Application

Require the `redis` module in your Node.js application:

```javascript
const redis = require('redis');
// or
import redis from "redis";
```

### Step 3: Create a Redis Client

Create a Redis client using `createClient()`:

If we do not indicate any port or host to `createClient()`, it will use as default values **6379** for the port and localhost as the server.

```javascript
const client = redis.createClient(/*port, host*/);
```

### Step 4: Interact with Redis

Use the client to interact with Redis:

```javascript
client.set('key', 'value', redis.print);
client.get('key', function(err, reply) {
  console.log(reply);
});

client.expire('key', 60);
client.incr('counter', function(err, reply) {
  console.log(reply);
});
```

### Step 5: Handle Errors

Handle errors that may occur during Redis operations:

```javascript {1-3}
client.get('nonexistentKey', function(err, reply) {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Reply:', reply);
  }
});
```

### Step 6: Close the Connection

Close the connection to the Redis server:

```javascript
client.quit();
```

### Other functionalities

#### MSET

With `mset()` we assign a list of key-value pairs in an atomic operation. With `mget()` we get the array of values associated with a list of keys passed as a key-value series.

```javascript
client.mset('a', 10, 'b', 20, 'c', 30);

client.mget(['a', 'b', 'c'], function (err, res) {
    for (var i = 0, len = res.length; i < len; i++) {
        console.log(res[i]);
    }
});
```

#### DEL

With `del()` we delete a key or list of keys.

```javascript
client.del('foo', function(err, reply) {
    console.log(reply);
});
```

#### INCR, DECR, INCRBY, DECRBY

`incr` and `decr` increment or decrement the value of the specified key by 1.

`incrby` and `decrby` increment or decrement the value of the key specified in the argument provided.

`incrbyfloat()` allows incrementing or decrementing by a decimal value depending on whether the value provided is positive or negative.

```javascript
client.set('counter', 100);
client.incr('counter');

client.incrby('counter', 9);
client.decrby('counter', 4);

client.decr('counter');
client.incrbyfloat('counter',1.5);

client.get('counter', function(err, reply) {
    console.log(reply);
});
```

#### EXIST

The `exist()` method allows to determine if the key passed as parameter exists or not. The following example shows whether the `greeting` key exists.

```javascript {2-3}
client.set('greeting', 'Hello World!!');
if (client.exists('greeting',  function(err, reply) {
    if (reply == 1) {
        console.log('exists');
    } else {
        console.log('doesn\'t exist');
    }
}));
```

#### LISTS

Lists are collections of values that support repetition.

`lpush` inserts at the beginning (left) of the specified key the provided value. rpush inserts at the end (right).

`rpop` extracts a value from the end (right) of the specified key.

`linsert` inserts into the specified key the provided value. The value is inserted before `BEFORE` or after `AFTER` the specified value (pivot).

`lset` sets in the specified key the provided value at the specified position.

```javascript
client.del('sessions:ggvd');

client.lpush('sessions:ggvd', 'Sesion02');
client.rpush('sessions:ggvd', ['Sesion04', 'Sesion05']);
client.lpush('sessions:ggvd', 'La Sesion 01');
client.rpop('sessions:ggvd');
client.linsert('sessions:ggvd', 'BEFORE', 'Sesion04', 'Sesion03');
client.lset('sessions:ggvd', 0, 'Sesion01');

client.lrange('sessions:ggvd', 0, -1, function(err, reply) {
        console.log(reply);
});


client.del('sessions:ggvd');
```

#### SETS

Sets are collections of values that do not allow duplicates.

`sadd` adds the provided elements to the specified key.

`srem` removes the provided elements from the specified key.

`smembers` returns all members of the set associated with the specified key.

`scard` returns the number of elements in the set of the specified key.

```javascript
client.del('students:ggvd');

client.sadd('students:ggvd', 'student1', 'student2', 'student3');
client.srem('students:ggvd', 'student3');

client.smembers('students:ggvd', function(err, reply) {
    console.log(reply);
});

client.scard('students:ggvd', function(err, reply){
        console.log(reply);
});

client.del('students:ggvd');
```

#### SET OPERATIONS

`sunion`, `sinter`, and `sdiff` respectively obtain the union, intersection, and difference of sets.

```javascript
client.del('students:ggvd');

client.sadd('students:ggvd', 'student1', 'student2', 'student3');
client.sadd('students:bd', 'student3', 'student4', 'student5');

client.sunion('students:bd', 'students:ggvd', function(err, reply) {
    console.log('  >> Union:');
    console.log(reply);
});

client.sinter('students:bd', 'students:ggvd', function(err, reply) {
    console.log('  >> Intersection:');
    console.log(reply);
});

client.sdiff('students:bd', 'students:ggvd', function(err, reply) {
    console.log('  >> Difference:');
    console.log(reply);
});

client.del('students:ggvd');
```

#### SORTED SETS

Sorted sets are sets whose elements are accompanied by a score that allows ordering in the set.

`zadd` adds the provided score and element to the specified key.

`zincrby` adds the provided value to the score of the specified key's element.

`zcount` returns the number of elements in the set that have their score within the provided bounds.

`zrangebyscore` returns the elements of the specified key's set whose scores are in the provided range.

```javascript
client.del('scores:ggvd');

client.zadd('scores:ggvd', 9, 'student1');
client.zadd('scores:ggvd', 3, 'student2');
client.zadd('scores:ggvd', 8, 'student3');

client.zincrby('scores:ggvd', 1, 'student2');

client.zcount('scores:ggvd', 5, 10, function(err, reply) {
    console.log('Number of passing students: ');
    console.log(reply);
});

client.zrangebyscore('scores:ggvd', 5, 10, function(err, reply) {
    console.log('Students who passed: ');
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

#### TRANSACTIONS

Transactions are initiated with `multi()`. To end the transaction, we'll use:

`exec()`: executes the instructions of a transaction.
`discard()`: cancels the instructions of a transaction.

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