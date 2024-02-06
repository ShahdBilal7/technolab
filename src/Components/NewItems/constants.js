export const productStatus = ["published", "not published", "restricted"];
export const storeDetailsHeader = [
  { id: "storeName", name: "Store Name" },
  { id: "stockQty", name: "Stock Qty" },
  { id: "unit", name: "Unit" },
  { id: "positionX", name: "Position-X" },
  { id: "positionY", name: "Position-Y" },
  { id: "thresholdCount", name: "Threshold Count" },
];
export const priceQuantityRange = ["1 - 4", "5 - 9", "10 - 20", "  > 20"];

export const Stores = [
  "المعرض الرئيسي - نابلس",
  "تل - المخزن الرئيسي",
  "مخازن المعرض الرئيسي",
  "مخزن المعرض",
];

export const storeDetailsData = [
  {
    storeName: Stores[0],
    stockQty: 0,
    thresholdCount: 0,
    unit: "",
    position: { x: 0, y: 0 },
  },
  {
    storeName: Stores[1],
    stockQty: 0,
    thresholdCount: 0,
    unit: "",
    position: { x: 0, y: 0 },
  },
  {
    storeName: Stores[2],
    stockQty: 0,
    thresholdCount: 0,
    unit: "",
    position: { x: 0, y: 0 },
  },
  {
    storeName: Stores[2],
    stockQty: 0,
    thresholdCount: 0,
    unit: "",
    position: { x: 0, y: 0 },
  },
];
