
# Flow Desafio

https://flow-frontend.vercel.app/

En entorno local es necesario:

- Crear api_key en los servicios https://www.weatherbit.io/ y https://openweathermap.org/
- Crear archivo .env.local con los valores de api_key de los servicios, tener de referencia .env.local.example

** Importante: se esta usando la funcionalidad de geolocation de los navegadores, por lo que si no se otorgan estos permisos no es posible determinar el clima actual en la ciudad del usuario.

Propuesta de solucion:

Para la estructura de los componentes decidi usar Atomic Design, realice un servicio para cada una de las API que estoy usando y la logica principal (llamada a los endpoints/render de componentes dinamicos) la defini en la pagina principal.

Se van a agregar mejoras en la branch develop.