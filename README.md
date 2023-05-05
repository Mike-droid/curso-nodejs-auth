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

- [What Are Refresh Tokens and How to Use Them Securely](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/)
- [Configure Silent Authentication](https://auth0.com/docs/authenticate/login/configure-silent-authentication)

### Generar JWT en el servicio

Tenemos que guardar el JWT secret token en el archivo .env y podemos obtener un tokek desde [Keygen.io](https://keygen.io/)

### Protección de rutas

### Control de roles

### Obteniendo órdenes del perfil

### Manejo de la autenticación desde el cliente

En el login nos mandan el token, este debemos guardarlo porque lo enviaremos en todas las peticiones.

Podemos guardar el token en Cookies (lo más recomendado) o en LocalStorage (no es la mejor práctica).

Es muy usado en bancos el 'refresh token' por medidas de seguridad, por ejemplo, cada 15 minutos expira el token y sacamos al usuario de la sesión y debe de vovler a hacer login.

## Envío de emails con Node.js

Usamos [Ethereal](https://ethereal.email/) email para enviar emails con un fake email y fake password.

### Cómo enviar emails con Node.js

### Implementando el envío de emails

## Recuperación de contraseñas

### Generando links de recuperación

### Validando tokens para cambio de contraseña
