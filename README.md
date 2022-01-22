##################### AIVO STREAMING CHALLENGE #######################

Mini proyecto desarrollado para una plataforma streaming web:
Framework Angular versión 11.2.14
Bootstrap 5
FontAwesome 5


# Requisitos de Instalación

1. Angular cli Versión 11.2.14
  
2. Node.js versión v12.20.0 ó Superior

# Instalación:

##### LINUX #####

1. Clonar la aplicación del repositorio:

  https://github.com/mjdamariscua/challenge

2. Ingresar dentro de la carpeta del proyecto (Te recomiendo usar de IDE Visual Studio Code, aunque tambien puedes usar el IDE de tu preferencia)

2. Instalar los paquetes de Angular, en un terminal y dentro de la carpeta del proyecto ejecuta:
    $ npm install

3. Una vez instalados los paquetes, ya puedes ejecutar, por favor recuerda ejecutar el comando con el flag de ssl:
    $ ng serve --ssl

4. Ejecutar en el navegador la url (importante que sea con conexión http segura):
    https://localhost:4200

5. Listo! ya puedes hacer uso de la plataforma :D

## INFORMACIÓN ADICIONAL ##

1. El proyecto en desarrollo se ejecuta en localhost con certificados ssl, se agrega en el proyecto una carpeta con los certificados, en la ruta:

  -> src/certs

  En el archivo angular.json, se deben referenciar:
  .
  .
  .
  "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "login-demo:build",
            "sslKey": "src/certs/ca.key",
            "sslCert": "src/certs/ca.crt",
          },
  .
  .
  .

2. El URI para obtener el JSON que contiene la información de peliculas y series, se configura como proxy para evitar errores de CORS, en el archivo:

   proxy.conf.json

   Esto permite invocar el URI utilizando localhost, así:

   https://localhost:4200/movies.json

3. Los parametros de configuración del auth0, se encuentran en el siguiente archivo:

    auth_config.json









