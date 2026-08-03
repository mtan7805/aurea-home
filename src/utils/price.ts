export const formatCurrency = (value: number) =>
  `${new Intl.NumberFormat("vi-VN").format(value)}đ`;

export const getDiscountedPrice = (price: number, discount: number) =>
  discount > 0 ? Math.round((price * (100 - discount)) / 100) : price;
