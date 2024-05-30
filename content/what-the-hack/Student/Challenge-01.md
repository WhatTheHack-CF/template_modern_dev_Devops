# Reto 01: Configurar tu entorno de desarrollo

[< Reto Anterior](./Challenge-00.md) - **[Home](../README.md)** - [Siguiente reto >](./Challenge-02.md)

## Introducción

Con la copia del proyecto obtenida, es momento de centrar tu atención en configurar tu entorno de desarrollo. El refugio está interesado en asegurar que los desarrolladores puedan contribuir al proyecto de la manera más fluida posible, evitando configuraciones tediosas. Para cumplir con este requisito, configurar el proyecto de manera local no es la mejor opción. Deberás buscar una solución basada en la nube que permita un entorno de desarrollo configurado de manera centralizada 😉.

## Descripción

Crearás un entorno de desarrollo que cumpla con las necesidades mencionadas anteriormente. Quieres poder comenzar a escribir código sin necesidad de instalar recursos localmente en tu máquina.

Durante el desarrollo, crearás recursos en Azure y configurarás tu repositorio en GitHub utilizando las CLIs de Azure y GitHub. Al inicio del taller, recibirás los detalles necesarios para acceder a todos los recursos de Azure y configurar adecuadamente tu entorno de desarrollo en la nube.

La aplicación utiliza una variable de entorno llamada **MONGODB_URI** para conectarse a la base de datos MongoDB. Al crear tu entorno de desarrollo en la nube, necesitarás agregar esto como un secreto encriptado con el valor **mongodb://localhost**.

Una vez creado el entorno de desarrollo, necesitarás probar la aplicación ejecutando el siguiente comando:

```bash
npm run dev
```

## Criterios de Éxito

- Has creado y configurado un entorno de desarrollo en la nube con los siguientes recursos instalados:
  - GitHub CLI
  - Azure CLI
  - MongoDB
- Has creado un secreto encriptado para MONGODB_URI
- Eres capaz de inciar y ver la aplicación en el entorno de desarrollo basado en la nube
- Todos los cambios se fusionan en 'main'.
- **No** se instalaron recursos en tu máquina

## Learning Resources

- [GitHub Codespaces](https://docs.github.com/es/codespaces/overview)
- [Introducción a los contenedores dev](https://docs.github.com/es/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)
- [Configuración de un proyecto de Node.js para GitHub Codespaces](https://docs.github.com/es/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/setting-up-your-nodejs-project-for-codespaces)
- [Adición de características a un archivo devcontainer.json](https://docs.github.com/es/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/adding-features-to-a-devcontainer-file)
- [Reenviar puertos en tu codespace](https://docs.github.com/es/codespaces/developing-in-a-codespace/forwarding-ports-in-your-codespace)
- [Administración de secretos específicos de la cuenta para GitHub Codespaces](https://docs.github.com/es/codespaces/managing-your-codespaces/managing-your-account-specific-secrets-for-github-codespaces)
- [Desarrollar en un codespace](https://docs.github.com/es/codespaces/developing-in-a-codespace/developing-in-a-codespace)
- [Precompilación de los codespaces](https://docs.github.com/es/codespaces/prebuilding-your-codespaces)

## Tips

- **Ctl-\`** mostrará la ventana de la terminal en Codespaces.
- **Cmd-Shift-P** (Mac) or **Ctl-Shift-P** (PC) abrirá la paleta de comandos
