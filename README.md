# Pokemon

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 16.2.5.

## Servidor de Producción

Debes abri en un navegador la url https://8af0-2001-2042-7be8-7300-190d-b3ee-6a49-7ab.ngrok-free.app/ y presiona el botón visitar sitio (Visit Site).

## Servidor de Desarrollo

Para ejecutar, escribe en la terminal `ng serve` para iniciar un servidor de desarrollo.

Copia este enlace y ábrelo en el navegador `http://localhost:4200/`.

## Construcción

Ejecuta `ng build` para compilar el proyecto. Los archivos generados en la compilación se almacenarán en el directorio `dist/`.

## Ejecutar Pruebas Unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias mediante [Karma](https://karma-runner.github.io).

## Ejecutar Pruebas End-to-End

Ejecuta `ng e2e` para ejecutar pruebas end-to-end mediante una plataforma de tu elección. Para utilizar este comando, primero debes agregar un paquete que implemente capacidades de prueba end-to-end.

## Ejecutar con Docker Compose

Asegúrate de tener Docker instalado en tu máquina. En la raíz del proyecto de encuentra el `Dockerfile` y el archivo `docker-compose.yml` con la configuración del servicio Angular.

```yaml
version: '3'
services:
  angular-app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "4200:80"
```

Ejecuta `docker-compose up --build` para iniciar la aplicación en un contenedor Docker.

Usar Docker Compose es beneficioso para aislar y gestionar las dependencias de la aplicación, facilitando así su despliegue y escalabilidad. Proporciona un entorno consistente independientemente de la máquina anfitriona y garantiza que las aplicaciones se ejecuten de la misma manera en cualquier entorno Docker compatible.