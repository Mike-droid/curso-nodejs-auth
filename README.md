# Curso de Backend con Node.js: Autenticación con Passport.js y JWT

## Introducción

### Cómo autenticar usuarios con Node.js

[Slides del Curso](https://static.platzi.com/media/public/uploads/slides-del-cuso-de-backend-con-node-js-autenticacion-con-passport-js-y-jwt_28d62bfe-085e-46c2-aae6-548cdebbdcba.pdf)

### Autenticación vs. autorización

- Autenticación -> ¿Quién eres? | ¿Puedes ingresar?
- Autorización -> Gestión de permisos

Para este curso usaremos [Json Web Token (JWT)](https://jwt.io/)

## Protección de contraseñas

### Middleware de verificación

### Hashing de contraseñas con bcryptjs

### Implementando hashing para usuarios

## Passport y JSON Web Tokens

### Implementando login con Passport.js

### ¿Qué es un JWT?

Es un estándar abierto (RFC 7519) que define una forma compacta y autónoma de transmitir información de forma segura entre partes como un objeto JSON. Esta información se puede verificar y confiar porque está firmada digitalmente. Los JWT se pueden firmar usando una palabra secreta (con el algoritmo HMAC) o un par de claves públicas / privadas usando RSA o ECDSA.

¿Cuándo deberíamos utilizar JSON Web Tokens?

Autorización: este es el escenario más común para usar JWT. Una vez que el usuario haya iniciado sesión, cada solicitud posterior incluirá el JWT, lo que le permitirá acceder a rutas, servicios y recursos que están autorizados con ese token. El inicio de sesión único es una función que se utiliza ampliamente con JWT en la actualidad, debido a su pequeña sobrecarga y su capacidad para usarse fácilmente en diferentes dominios o servidores distribuidos.

Intercambio de información: los JWT son una buena forma de transmitir información de forma segura entre varias partes. Debido a que los JWT se pueden firmar, por ejemplo, utilizando pares de claves públicas / privadas, se puede estar seguro de que los remitentes son quienes dicen ser. Además, como la firma se calcula utilizando las cabeceras y el payload, también se puede verificar que el contenido no haya sido manipulado.

### Firmar y verificar tokens

Para recordar: __NO__ guardes información sensible en el payload del JWT. Esta información la podemos ver en el [debugger](https://jwt.io/#debugger-io) de JWT.
