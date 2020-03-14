# Parcial Dllo Web
> Web para la gestión del índice de masa corporal de usuarios

# Desarrollador
> Camilo Andrés Pastrana Rivas


# La información requerida para los usuarios es:
- Tipo de identificación [CC, CE, RN, TI]
- Identificación
- Nombres
- Apellidos
- Correo
- Peso
- Estatura


# Funcionalidades:
- Crear un usuario.
- Modificar usuario.
- Eliminar usuario.
- Listar usuarios.


# Criterios de aceptación:
- Al crear debe de calcular el IMC.
- En el listado de usuarios debe de mostrar toda la información del usuario y el IMC
calculado.
- En el listado de usuarios debe de haber una acción adicional que se llame “Ver estado”.
Cuando el administrador le de click, debe de indicar si el usuario esta en sobrepeso o no
con un mensaje.
- Todos los campos del usuario son obligatorios.
- La identificación es única.
- Persistencia en localstorage.
- Control de versiones con github.
## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
