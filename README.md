# Control de Gastos

Aplicación para el control de gastos de un usuario, realizado dentro de un curso de React donde ya se facilitaron los estilos (con algunas modificaciones) para reforzar el uso del framework.

**Aquí puedes ver la [aplicación](https://cerulean-rolypoly-11ce7e.netlify.app).**

## Tecnologías

La aplicación ha sido creada con las siguientes tecnologías:

- **ReactJS**
- **ViteJS**
- **JavaScript**

## Persistencia de datos

Se permite la persistencia de datos en el cliente a través del uso de LocalStorage, de modo que aunque se cierre la aplicación la información introducida por el usuario permanecerá siempre y cuando el LocalStorage del navegador no se borre.

## Despliegue local

Para un despliegue local de la aplicación, simplemente clona el repositorio y ejecuta los siguientes comandos:

```bash
npm install
npm run dev
```

ViteJS abrirá automáticamente la aplicación en tu navegador.

## CI/CD

La aplicación se encuentra desplegada en **Netlify** a través de GitHub, por lo que implementa CI/CD de manera automática, desplegando de nuevo la aplicación ante cualquier cambio en la **rama main**.
