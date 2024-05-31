---
title: Personalizando Git
description: Cómo personalizar tu Git
next:
  link: /es/learn/development/git/common-errors
  text: Errores Comunes
---

**Personalizando Git**
=====================

### Configuración Global
---------------------

Para configurar tu nombre de usuario y email de forma global, utiliza los siguientes comandos:
- **¿Por qué hago esto?** Estos datos se mostrarán en los logs de Git, y sirven para identificar al usuario que lo hizo.

> [!NOTE] NOTA
> - Git no validará los datos introducidos.
> - Para configurar el nombre de usuario y el email para un repositorio específico, navega hasta el directorio del repositorio y utiliza los comandos sin `--global`.

Configurando Nombre de Usuario
```bash
$ git config --global user.name "Tu Nombre"
```

Configurando Email
```bash
$ git config --global user.email "tu_email@ejemplo.com"
```

Estos comandos establecen el nombre de usuario y el email a nivel global, lo que significa que se aplicarán a todos los repositorios Git de tu máquina. Si quieres configurar esta información sólo para un repositorio específico, omite la opción `--global`.

### Verificación
---------------------

Para comprobar que la configuración se ha establecido correctamente, ejecute el siguiente comando:

```bash
$ git config --global --list
```

<div class="tip custom-block" style="padding-top: 8px">
Pulsa la tecla <code>q</code> al estilo de <b>VIM</b> para salir.
</div>

Esto mostrará una lista de todos los ajustes de configuración, incluyendo el nombre de usuario y el correo electrónico.