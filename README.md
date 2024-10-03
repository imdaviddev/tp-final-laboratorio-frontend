# Frontend - Amazona

Amazona es un proyecto que tiene como finalidad la gestion de una flota de vehiculos, paquetes, proveedores, stock y mantenimiento.

### Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de cumplir con los siguientes requisitos:

- [Node.js 20.17.0](https://nodejs.org/en) o superior.
- npm (viene instalado con Node.js).
- Un editor de código como [Visual Studio Code](https://code.visualstudio.com/) o Sublime Text.


### 1. Clonar el repositorio o descargar el repositorio
```bash
git clone https://github.com/imdaviddev/tp-final-laboratorio-frontend.git
```

### 2. Instalar las dependencias

Dentro de a carpeta del proyecto ejecutar:
```bash
npm install
```

### 3. Levantar el proyecto en localhost
Una vez instaladas las dependencias se debera ejecutar:
```bash
npm run dev
```

### 4. Abrir el navegador e ir a [https://localhost:5174](https://localhost:5174)
> o la ruta que indica por terminal

# Gitflow de Trabajo

Este proyecto sigue un modelo de Gitflow que utiliza varias ramas para organizar el desarrollo, pruebas y despliegues.

## Estructura de Ramas

- **main**: Rama para realizar pruebas y afinar el codigo para lanzar una nueva version.
- **development**: Rama donde se desarrollan nuevas funcionalidades y se corrigen errores.
- **release/numero-de-version**: Ramas donde se lanzaran las versiones de la aplicacion, que ya son estables.

## Ramas de Trabajo

- **feature/**: Para desarrollar nuevas características.
- **bugfix/**: Para corregir errores encontrados en `development` o `QA`.
- **hotfix/**: Para corregir errores críticos en producción (en `main` o release).
- **test/**: Opcional, para pruebas específicas o experimentales.

## Flujo de Trabajo

1. **Crear una nueva rama de funcionalidad**:
   ```bash
   git checkout development
   git checkout -b feature/JIRA-123-nueva-funcionalidad
   ```
   > Como aparece en JIRA, para seguir un seguimientos de lo que se va haciendo
2. **Desarrollar y hacer commits: Realiza los cambios necesarios y haz commits en tu rama feature.**

3. **Crear un Pull Request de la rama de funcionalidad a development**
Una vez este terminada la funcionalidad, subir a development la rama.
```bash
git push origin feature/JIRA-123-nueva-funcionalidad
```
Dentro de Github, ir a la seccion **pull request** colocar en rama base **development** y en rama a mergear **feature/JIRA-123-nueva-funcionalidad**
crear el pull request, si, se probo y se entiende que esta todo OK, darle **Aceptar Pull Request**

> Si no permite crear el pull request debe ser que tu rama **feature/JIRA-123-nueva-funcionalidad** quedo desactualizada respecto a development.
> Ir a tu terminal de git o github deskop, y estando en development traerte los cambios (git pull). Luego ir a tu rama **feature/JIRA-123-nueva-funcionalidad**
> Y mergear los cambios de development en tu rama (git merge development), arreglar los conflictos si los hay, si no los hay se podra subir la rama directamente
> volver a realizar el **Paso 3**

4. **Subir cambios a main una vez se haya alcanzado cierto desarrollo en development para que se realicen pruebas de calidad**
> Esto quiere decir desde github, hacer un **pull request** hacia main de la rama development.

5. **Realizar pruebas en main: Prueba las nuevas funcionalidades. Si encuentras errores, crea una rama bugfix desde main**
```
git checkout main
git checkout -b bugfix/JIRA-456-corregir-bug
```
6. **Corregir el error y fusionar de vuelta a main (hacer pull request)**
```
git push origin bugfix/JIRA-456-corregir-bug
```
> Mismos pasos para hacer un pull request que con la feature, solo cambia la rama base a **main**

7. **Crear la rama de release: Una vez que las pruebas en main son satisfactorias, crea una rama de release**
```bash
git checkout main
git checkout -b release/1.0.0
```

8. **Preparar la versión para producción: Hacer cualquier ajuste necesario y realiza los commits en la rama de release**
