export type UserMode = 'mayorista' | 'minorista';

export type SupplyType = 'importacion' | 'plaza' | 'ambos';

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'Aceites y Grasas' | 'Lácteos y Quesos' | 'Embutidos y Carnes' | 'Granos y Cereales' | 'Bebidas y Jugos' | 'Enlatados y Conservas' | 'Salsas y Condimentos';
  description: string;
  imageUrl: string;
  moq: number; // Cantidad Mínima de Pedido (Mayorista)
  moqUnit: string; // ej: "Cajas", "Pallets", "Contenedores"
  retailPrice?: number; // Precio minorista sugerido por unidad
  wholesalePriceRange?: string; // ej: "Cotización según volumen"
  supplyType: SupplyType;
  originCountry: string;
  features: string[];
  specifications: ProductSpecification[];
  inStock: boolean;
  isPopular?: boolean;
}

