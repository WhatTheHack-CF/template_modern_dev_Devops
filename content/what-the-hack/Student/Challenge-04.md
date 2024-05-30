# Reto 04 - Crear un Entorno de Despliegue

[< Reto Anterior](./Challenge-03.md) - **[Home](../README.md)** - [Siguiente reto >](./Challenge-05.md)

## Introducción

Con la aplicación actualizada, ¡el refugio está listo para comenzar a configurar el despliegue! Han elegido usar Azure para alojar la aplicación. El sitio web se alojará en [Azure Container Apps](https://learn.microsoft.com/es-es/azure/container-apps/overview) y la base de datos en [Azure Cosmos DB para MongoDB](https://learn.microsoft.com/es-es/azure/cosmos-db/mongodb/introduction). 

El primer paso será asegurarte de que tienes acceso al repositorio de GitHub asignado. Este repositorio contiene toda la información necesaria para configurar y desplegar la aplicación en Azure. No necesitarás crear ni configurar el entorno por tu cuenta; simplemente tendrás permisos de lectura para acceder a la información relevante. Durante la introducción del reto, te proporcionaremos detalles sobre cómo acceder y utilizar este repositorio con la información de la cuenta de Azure que usarás. En un reto posterior, configurarás el despliegue continuo para el proyecto.

## Descripción

Para este reto, crearás un [GitHub workflow](https://docs.github.com/es/actions/learn-github-actions/understanding-github-actions) que utiliza un archivo [Azure Bicep](https://learn.microsoft.com/es-es/azure/azure-resource-manager/bicep/overview?tabs=bicep) para configurar los recursos necesarios en Azure. Para este reto, el grupo de recursos necesario ya está establecido y puedes encontrar toda la información relevante en el repositorio de GitHub asignado. Solo necesitarás configurar una identidad de servicio para otorgar los permisos necesarios a la acción y ejecutar la acción para crear los recursos adicionales.

La Configuración como Código (CaC), o configuración como código, es un enfoque para gestionar la configuración del sistema que implica definir los ajustes de configuración en archivos o scripts legibles por máquinas. Esto permite una gestión más eficiente, automatizada y consistente de la configuración del sistema, ya que los cambios pueden realizarse y desplegarse más fácilmente y con mayor control. Con la configuración como código, los ajustes de configuración se almacenan en archivos controlados por versiones, utilizando a menudo una sintaxis declarativa como YAML, JSON o HCL. Estos archivos pueden almacenarse junto con el código de la aplicación, facilitando la gestión de todo el ciclo de vida del desarrollo del software.

Este desafío utiliza [Azure Bicep](https://learn.microsoft.com/es-es/azure/azure-resource-manager/bicep/overview?tabs=bicep), que es un lenguaje específico de dominio para definir la infraestructura de Azure. Ya se ha creado un archivo Bicep para que lo uses. El archivo Bicep:

- Crea una instancia serverless de Azure Cosmos DB para MongoDB.
- Crea los recursos para soportar una Azure Container App.
- Crea la Azure Container App con una imagen predeterminada.
- Configurará la Azure Container App con la cadena de conexión para Azure Cosmos DB para MongoDB.

El archivo Bicep acepta un parámetro llamado `prefixName`, que debe configurarse con 5 caracteres alfanuméricos aleatorios. Es importante mencionar que utilicen 5 letras que puedan identificarlos, como las iniciales de su nombre, ya que compartirán el grupo con otros miembros del equipo. La idea es que cada uno realice su despliegue y, con este prefijo, puedan identificarse fácilmente.
    
## Criterios de Éxito

- Demuestra que has encontrado la información del grupo de recursos en Azure para los recursos de la aplicación en el repositorio asignado.
- Demuestra que has almacenado correctamente los valores necesarios para el flujo de trabajo en el repositorio, cifrando los valores que son sensibles.
- Demuestra que has creado un nuevo GitHub workflow llamado **create-azure-resources.yml** con las siguientes opciones:
  - El GitHub workflow puede ser ejecutado manualmente.
  - Lee el prefijo y otros parámetros desde secretos y variables.
- Demuestra que al navegar a la URL de la Aplicación Contenedor de Azure se muestra una pantalla con el mensaje **Welcome to Azure Container Apps**.

## Recursos de Aprendizaje

- [¿Qué es la infraestructura como código (IaC)?](https://learn.microsoft.com/es-es/devops/deliver/what-is-infrastructure-as-code)
- [Entender las GitHub Actions](https://docs.github.com/es/actions/learn-github-actions/understanding-github-actions)
- [Guía de inicio rápido: implementación de archivos de Bicep mediante Acciones de GitHub](https://learn.microsoft.com/es-es/azure/azure-resource-manager/bicep/deploy-github-actions?tabs=CLI%2Cuserlevel)
- [Ejecutar un flujo de trabajo manualmente](https://docs.github.com/es/actions/using-workflows/manually-running-a-workflow)
- [GitHub Actions contexts](https://docs.github.com/es/actions/learn-github-actions/contexts)
- [Uso de secretos en Acciones de GitHub](https://docs.github.com/es/actions/security-guides/using-secrets-in-github-actions)
- [GitHub Actions variables](https://docs.github.com/es/actions/learn-github-actions/variables)
- [Create Actions secrets using GitHub CLI](https://cli.github.com/manual/gh_secret_set)

## Tips

Debes agregar en el repositorio los secretos y variables requeridos. Toda esta información la puedes encontrar en el repositorio de GitHub que te compartimos al inicio.

### Secretos a agregar:
1. **AZURE_CREDENTIALS**: Este es un JSON que contiene las credenciales.
2. **AZURE_SUBSCRIPTION**: Una cadena que representa el ID de tu suscripción a Azure.

### Variables a agregar:
1. **AZURE_RG**: Aquí encontrarás el nombre del grupo de recursos a utilizar en el repositorio.
2. **AZURE_PREFIX**: Recuerda usar tus iniciales o una combinación de 5 caracteres que te identifiquen para poder diferenciar tu proyecto.

Para agregar los secretos y variables:
1. Ve a la sección de "Secrets and Variables" en tu repositorio de GitHub.
2. Selecciona "New repository secret" o "New variable" según corresponda.
3. Introduce los valores necesarios y guarda los cambios.