export interface Product {
  id?: number;
  name: string;
  image?: string;
  price: number;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
  file?: any;
  file_obj?: URL | string;
}
