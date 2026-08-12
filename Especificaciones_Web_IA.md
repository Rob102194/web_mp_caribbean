# Blueprint Técnico y de Desarrollo: Plataforma Híbrida B2B/B2C

## 1. Definición del Proyecto
**Objetivo:** Desarrollar un sitio web que sirva como catálogo interactivo para una empresa de comercialización y distribución. La plataforma debe manejar de forma elegante la coexistencia de tres públicos objetivos:
- Importación Mayorista
- Venta Mayorista en Plaza
- Venta Minorista

**Enfoque de Diseño:** Sencillo, corporativo y de conversión directa (contacto/cotización), evitando la fricción de una tienda electrónica compleja.

---

## 2. Pila Tecnológica (Tech Stack)
Para garantizar un rendimiento excepcional, costos de infraestructura mínimos y una alta flexibilidad, el agente debe utilizar el siguiente stack:
- **Framework Core:** Next.js (utilizando App Router).
- **Lenguaje:** TypeScript. El tipado estricto es obligatorio para mantener la consistencia del catálogo de productos y prevenir errores estructurales.
- **Estilos:** Tailwind CSS para un diseño modular y responsivo.
- **Datos (Mock CMS):** Un archivo estructurado local (ej. `data/catalog.ts` o `catalog.json`) con la lista de productos para evitar integraciones de bases de datos complejas en la fase inicial.
- **Iconografía:** `lucide-react` para iconos ligeros y coherentes.

---

## 3. Arquitectura Modular y Patrones de Diseño
El código debe estructurarse separando claramente la lógica de negocio de la presentación visual. 

### Estructura de Directorios Sugerida:
```text
src/
├── app/                  # Rutas principales (Inicio, Mayorista, Minorista)
├── components/
│   ├── ui/               # Componentes base (Botones, Inputs, Modales)
│   ├── layout/           # Header, Footer, Navegación
│   └── domain/           # Componentes específicos (ProductCard, CatalogGrid)
├── data/                 # Archivos de datos estáticos (Catálogo)
└── types/                # Interfaces y tipos de TypeScript (Product, Category)
```

### Modelo de Datos (TypeScript Interface):
El agente debe definir interfaces claras. Ejemplo base:
```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  moq: number; // Cantidad Mínima de Pedido (Minimum Order Quantity)
  retailPrice?: number;
  features: string[];
}
```

---

## 4. UI / UX: Funcionalidades Clave
La experiencia debe evitar la duplicación de páginas mediante una segmentación inteligente en la interfaz.

1. **Header Segmentado:** 
   - Debe incluir un "Toggle" o selector global que permita al usuario cambiar entre el modo "Mayorista" y "Minorista". Este estado debe guardarse de forma local (ej. React Context o Local Storage).
2. **Tarjeta de Producto Híbrida (`ProductCard.tsx`):**
   - **Si el estado es Minorista:** Mostrar precio final unitario y un botón de "Consultar Disponibilidad".
   - **Si el estado es Mayorista:** Ocultar el precio unitario. Mostrar el `moq` (Cant. mínima) y un botón destacado: "Solicitar Cotización por Volumen".
3. **Conversión y Contacto:**
   - Todos los botones de cotización o compra deben redirigir de forma parametrizada a un enlace de WhatsApp Business (ej. `https://wa.me/123456789?text=Hola, quiero cotizar el producto [Nombre] en modo [Mayorista/Minorista]`).
4. **Sección de Confianza (B2B):**
   - Incluir bloques informativos sobre procesos de importación, logística y garantías corporativas.

---

## 5. Instrucciones Sistémicas para el Agente IA (Ejecución Zero-Assumption)

Al procesar este documento, el agente desarrollador debe acatar las siguientes reglas:

- **Cero Asunciones (Zero-Assumption Protocol):** No asumas dependencias ni paquetes de terceros que no estén explícitamente detallados en el Tech Stack. Si necesitas una librería extra, justifícala antes de instalarla.
- **Desarrollo Modular Paso a Paso:** Construye la aplicación por capas. Inicia configurando el layout y el tipado estricto en TypeScript. Verifica que no existan errores de compilación en el terminal antes de avanzar a la lógica interactiva.
- **Componentes Aislados:** El `ProductCard` debe ser completamente independiente y recibir la modalidad (mayorista/minorista) a través de *props*, no mediante lógica dura en su interior.
- **Clean Code:** Elimina cualquier console.log, comentarios residuales o código muerto antes de dar por terminada una tarea. Mantén los componentes funcionales concisos.
