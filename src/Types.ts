export type WeightCategory = "Kilograms" | "Liters";
export type Units = "g" | "kg" | "ml" | "l";

export type WeightInfo = {
  unit: Units;
  weightCategory: WeightCategory;
};

export type ProductInfo = {
  id: string;
  productName: string;
  productQuantity?: string;
  productWeight?: string;
};
