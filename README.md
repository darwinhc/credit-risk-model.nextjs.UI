

# Predictor de satisfacción de vida en adultos mayores y niños

La aplicación web del modelo de satisfacción de vida permite predecir la satisfacción de vida de niños y abuelos. Se considera un niño a una persona de 12 o menos años y un abuelo alguien de 60 o mas años. La aplicación recibe unas respuestas socioeconómicas básicas como la edad, calidad de la vivienda, del sector, etc. Con base en estas respuestas, se predice en una escala del 1 al 10 que tan satisfecha se encuentra la persona con la vida, siendo 1 muy insatisfecho y 10 totalmente satisfecho.



## Uso
Puede hacer uso de esta aplicación en el siguiente link

~~~
https://main--animated-panda-b1e5cf.netlify.app/
~~~

Escoge la población que desea predecir y cambia los valores del formulario. Luego en la parte inferior aparecerá la predicción en una escala del 1 al 10.


## Navegación

- Indice (principal): `/`
- Predicción de satisfacción de vida para Niños: `/child`
- Predicción de satisfacción de vida para Adultos mayores: `/senior`


## A cerca de la creación
Este componente frontend de la aplicación está creado en Next js, para saber más a cerca de Next Js

- [Documentación Next.js](https://nextjs.org/docs) - aprende más de Next.js características y API.
- [Learn Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.


You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## Backend

Se hace uso de una API previamente creada con modelos de machine learning para esta predicción

~~~
https://modelo-satisfaccion-vida.herokuapp.com/
~~~