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


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
