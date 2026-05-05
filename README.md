# devandrade

Portafolio web de Daniel Andrade - Desarrollador Web Freelance.

## Desarrollo

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Build para producción

```bash
# Generar el build de producción
npm run build
```

Los archivos generados se encontrarán en la carpeta `dist/`.

## Despliegue en Hostinger

### 1. Configurar variables de entorno

Antes de hacer el build, crea un archivo `.env` en la raíz del proyecto con tu access key de Web3Forms:

```
VITE_WEB3FORMS_ACCESS_KEY=tu_clave_aqui
```

> Obtén tu clave gratuita en https://web3forms.com/

### 2. Generar el build

```bash
npm run build
```

Esto creará la carpeta `dist/` con todos los archivos estáticos.

### 3. Subir a Hostinger

1. Accede al **Administrador de Archivos** de tu panel de Hostinger
2. Navega a la carpeta `public_html` de tu dominio
3. **Elimina** el contenido existente en `public_html`
4. **Sube todo el contenido** de la carpeta `dist/` (no la carpeta, sino los archivos dentro de ella) directamente a `public_html`
5. Asegúrate de que el archivo `index.html` esté en la raíz de `public_html`

### 4. Verificar

- Visita tu dominio y verifica que la carga funcione correctamente
- Envía un mensaje de prueba desde el formulario de contacto
