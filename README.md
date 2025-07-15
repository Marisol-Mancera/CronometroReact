
# ⏱️ Cronómetro con React

Este es un proyecto sencillo de un **cronómetro desarrollado con React**.  
Fue creado como parte de una tarea académica para practicar los fundamentos de React, especialmente el manejo del estado con `useState` y la gestión de efectos secundarios con `useEffect`.

## ✨ Funcionalidades

- ▶️ **Pausar / Reanudar**: Inicia o detiene el conteo de segundos.  
- 🔄 **Reiniciar**: Vuelve a poner el contador en cero.

## 🚀 Tecnologías Utilizadas

- ⚛️ **React** – Librería para construir interfaces de usuario.  
- 🧠 **JavaScript (ES6+)** – Lenguaje base del proyecto.  
- 🧱 **HTML5**  
- 🎨 **CSS3** – Usado para estilos externos (no incluidos en este componente).

## 🧠 Lógica del Componente `Cronometro`

El componente utiliza dos hooks de React:

- `useState`:  
  - `seconds`: Guarda los segundos transcurridos.  
  - `isActive`: Determina si el cronómetro está corriendo (`true`) o en pausa (`false`).

- `useEffect`:  
  Ejecuta un `setInterval` cuando `isActive` es `true` y limpia con `clearInterval` al desmontarse o al cambiar `isActive`.

## ⚙️ Cómo Ejecutar el Proyecto

1. **Clona el repositorio**

   En tu terminal, escribe:

   ```
   git clone https://github.com/Marisol-Mancera/CronometroReact.git
   ```

   

2. **Accede a la carpeta del proyecto**

   ```
   cd crono
   ```

3. **Instala las dependencias**

   ```
   npm install
   ```

   O con Yarn:


4. **Inicia la aplicación**

   ```
   npm start
   ```


5. **Abre tu navegador**

   Visita:

   ```
   http://localhost:3000 (o el que te lance bash😉)
   ```

## 💡 Mejoras Futuras

- Mostrar minutos y horas.  
- Añadir animaciones o transiciones visuales.  
- Incluir sonido al pausar o reiniciar.  
- Aplicar estilos con Tailwind CSS o styled-components.  
- Agregar historial de tiempos (laps).

## 📄 Licencia

Este proyecto es de uso libre para fines educativos y personales.  
Puedes modificarlo, adaptarlo y usarlo como base para tus propios desarrollos.

---

📌 *Ideal para quienes están comenzando con React y quieren ver los hooks en acción.*

