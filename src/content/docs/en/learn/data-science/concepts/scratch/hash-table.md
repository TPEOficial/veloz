---
title: Hash Table
description: What is a hash table?
---

**Hash Table**
=====================

## What is a Hash Table?

A hash table is an associative container (dictionary-like) that allows efficient storage and retrieval of elements (called values) from other objects, called keys.

A hash table can be viewed as a set of entries. Each of these entries has a unique key associated with it, and therefore, different entries in the same table will have different keys. This implies that a key uniquely identifies an entry in a hash table.

On the other hand, hash table entries are composed of two components, the key itself and the information stored in that entry.

::: details Quick & Easy
A **hash table** is like a big storage box with many compartments where you can store things quickly and easily.

Imagine you have a list of toys and you want to find one quickly. The hash table uses a kind of **"magic trick"** called a hash function that converts the name of the toy into a number, and that number tells you in which compartment of the box it is stored.

So, you can find your favorite toy without having to search through all the compartments one by one.
:::

### How does a Hash Table work?

1. **The hash function**: A hash function takes a key as input and returns an index or address within the hash table where the corresponding value should be stored. The hash function aims to distribute the keys evenly across the table to minimize collisions (when two or more keys are mapped to the same index).

2. **The array/matrix**: A hash table consists of an array of entries, which will be the structure that stores the information, and a scatter function. The scatter function allows to associate the element stored in an entry with the key of that entry. It is therefore a critical algorithm for the proper functioning of the structure.

3. **Collision handling**:
   - The structure of hash tables is what gives them their great potential, as it makes them extremely efficient structures for retrieving stored information. The average information retrieval time is constant, i.e. it does not depend on the size of the table or the number of elements stored in it.

   - When working with hash tables, collisions often occur. Collisions occur when for two different pieces of information, the scatter function assigns them the same key. As can be expected, this solution must be fixed in some way. For this purpose, hash tables have a collision resolution function.

   - **Separate chaining**: The colitions are solved by inserting them in a list. In this way we would have a vector of lists as a structure. The average number of keys per list is called load factor and should be close to 1.
   - **Open addressing**: We use a vector as a representation and when a collision occurs we resolve it by reassigning another hash value to the key until we find a gap.

<img src="https://cdn.tpeoficial.com/learn/Ii3Zf0Gn4Fj7Hr7Bw5Vg2Tx2Nn4Tq0Kq7Wt5Kz1P" loading="lazy" width="512" height="1080">

### Advantages of hash tables

- **Constant-time average-case performance**: Can perform insertions, searches, and deletions in constant time on average, making them very efficient for many applications.
- **Flexibility**: Can be used to implement other data structures, such as sets, dictionaries, and symbol tables.
- **Simplicity**: Are relatively simple to implement and understand compared to other data structures.

### Disadvantages of hash tables

- **Collisions**: Although hash functions aim to minimize collisions, they can still occur, especially with large datasets. Collision handling can add overhead to the hash table's performance.
- **Fixed size**: The size of the hash table is fixed when it is created, and resizing it can be costly.
- **Ordering**: Hash tables do not maintain the original order of the inserted elements, as the order is determined by the hash function.

Hash tables are widely used in various applications, such as caching, symbol tables, and database indexing, due to their efficient performance and flexibility.