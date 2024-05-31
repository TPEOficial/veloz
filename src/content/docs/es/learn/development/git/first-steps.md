---
title: Primeros Pasos
description: Instalación y uso.
---

**Primeros Pasos**
=====================

### Instalación y configuración

1. **Instalar Git**:
> [!NOTE] Puedes utilizar el instalador de Git en Windows.
> - Descarga el instalador de Git desde el sitio web oficial de Git.
> - Link: https://git-scm.com/download/win
> - Ejecuta el instalador y sigue las instrucciones para instalar Git.

::: code-group
```sh {1} [Windows]
# Fuente: https://git-scm.com/download/win
$ winget install --id Git.Git -e --source winget
```
```sh {1} [Linux]
# Fuente: https://git-scm.com/download/linux
# Para Ubuntu.
$ sudo apt-get install git
```
```sh {1} [Mac]
# Fuente: https://git-scm.com/download/mac
# Usando Homebrew.
$ brew install git

# Usando MacPorts.
$ sudo port install git
```
:::

2. **Verifica la instalación de Git**:
<div class="tip custom-block" style="padding-top: 8px">
Puede que tengas que reiniciar el ordenador/programa o abrir un nuevo terminal para que detecte Git.
</div>

- Abre un terminal y escribe `git --version`. Esto debería mostrar la versión de Git instalada en tu sistema.

### Comandos Básicos de Git

1. **Inicializa un nuevo repositorio Git**:
   - Navega hasta el directorio donde quieres crear un nuevo repositorio Git.
```sh
$ cd C:/usuarios/veloz/dev/nombre_proyecto
```
```
.
├─ src
│  └─ ...
└─ README.md
```
  - Ejecuta `git init` para inicializar un nuevo repositorio Git.

2. **Añadir archivos a la zona de preparación (Staging Area)**:
   - Navega hasta el directorio de tu repositorio Git.
   - Ejecuta `git add <nombre_archivo>` para crear un archivo específico.
   - Ejecuta `git add .` para poner en stage (área/proceso/pasarela de preparación) todos los archivos del directorio actual.

3. **Actualizar cambios**:
   - Ejecuta `git commit -m "mensaje_commit"` para confirmar los cambios con un mensaje de confirmación.
<div class="tip custom-block" style="padding-top: 8px">
Recuerda poner un mensaje describiendo los cambios (commit).
</div>

4. **Ver el historial de commits**:
   - Ejecuta `git log` para ver el historial de confirmaciones de tu repositorio.

5. **Crear una nueva rama**:

La diferencia entre **"main"** y **"master"** es principalmente de nomenclatura y cultura. Ambos se refieren a la rama principal de un repositorio en Git. **"Master"** es el término más antiguo, por defecto, mientras que **"main"** en GitHub es una alternativa más reciente que evita posibles connotaciones negativas. Puedes llamarlo como quieras, ya que es sólo una convención de nomenclatura.
   - Ejecuta `git branch <branch_name>` para crear una nueva rama.
   - Ejecuta `git checkout <branch_name>` para cambiar a la nueva rama.

6. **Fusión de ramas**:
   - Ejecuta `git checkout master` para cambiar a la rama principal.
   - Ejecuta `git merge <nombre_rama>` para fusionar los cambios de la nueva rama en la rama principal.

7. **Enviar cambios a un repositorio remoto**:
   - Ejecute `git remote add origin <repository_url>` para enlazar su repositorio local a un repositorio remoto.
::: details Ejemplo usando GitHub
````sh
$ git init
$ git add origin https://github.com/TPEOficial/veloz.git
````
:::
   - Ejecuta `git push -u origin master` para enviar los cambios al repositorio remoto.

### Tips adicionales

1. **Clonar repositorio**:
 - Ejecuta `git clone <url_del_repositorio>` para clonar un repositorio en tu máquina.
> [!TIP] Puedes especificar una ruta para almacenarlo.
> - Ejecuta `git clone <url_del_repositorio> <ruta>` para clonar un repositorio en tu máquina en una ruta.
> - Si pones `.` en `ruta` se guardará sin crear una nueva carpeta.

2. **Deshacer cambios**:
  - Ejecuta `git reset --hard` para deshacer todos los cambios y volver al último commit.

3. **Ver cambios no enviados**:
  - Ejecuta `git status` para ver los cambios que aún no se han puesto en escena.

4. **Ver los cambios realiazdos**:
  - Ejecuta `git diff --cached` para ver los cambios que se han realizado.

5. **Ver los cambios realiazdos preparados**:
  - Ejecuta `git diff` para ver los cambios que aún no han sido confirmados.