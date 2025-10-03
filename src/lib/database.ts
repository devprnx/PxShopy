import { ref, set, get, remove, push, query, orderByChild, equalTo } from 'firebase/database';
import { database } from './firebase';
import { Product, Order, OrderStatus } from '@/types';

const dbRef = {
  products: 'products',
  orders: 'orders',
  users: 'users',
  cart: 'cart',
};

export const DatabaseService = {
  // Product Operations
  async addProduct(product: Omit<Product, 'id'>): Promise<Product> {
    const productRef = ref(database, dbRef.products);
    const newProductRef = push(productRef);
    const newProduct = { ...product, id: newProductRef.key || Date.now().toString() };
    
    await set(newProductRef, newProduct);
    return newProduct;
  },

  async getProduct(id: string): Promise<Product | null> {
    const productRef = ref(database, `${dbRef.products}/${id}`);
    const snapshot = await get(productRef);
    return snapshot.exists() ? snapshot.val() : null;
  },

  async getAllProducts(): Promise<Product[]> {
    const productsRef = ref(database, dbRef.products);
    const snapshot = await get(productsRef);
    return snapshot.exists() ? Object.values(snapshot.val()) : [];
  },

  async updateProduct(id: string, updates: Partial<Product>): Promise<void> {
    const productRef = ref(database, `${dbRef.products}/${id}`);
    await set(productRef, updates);
  },

  async deleteProduct(id: string): Promise<void> {
    const productRef = ref(database, `${dbRef.products}/${id}`);
    await remove(productRef);
  },

  // Order Operations
  async createOrder(userId: number, order: Omit<Order, 'id'>): Promise<Order> {
    const orderRef = ref(database, dbRef.orders);
    const newOrderRef = push(orderRef);
    const newOrder = { ...order, id: Number(newOrderRef.key) };
    
    await set(newOrderRef, newOrder);
    return newOrder;
  },

  async getOrder(id: number): Promise<Order | null> {
    const orderRef = ref(database, `${dbRef.orders}/${id}`);
    const snapshot = await get(orderRef);
    return snapshot.exists() ? snapshot.val() : null;
  },

  async getUserOrders(userId: number): Promise<Order[]> {
    const ordersRef = ref(database, dbRef.orders);
    const userOrdersQuery = query(
      ordersRef,
      orderByChild('userId'),
      equalTo(userId)
    );
    
    const snapshot = await get(userOrdersQuery);
    return snapshot.exists() ? Object.values(snapshot.val()) : [];
  },

  async updateOrderStatus(id: number, status: OrderStatus): Promise<void> {
    const orderRef = ref(database, `${dbRef.orders}/${id}`);
    await set(orderRef, { status });
  },

  // Cart Operations
  async getCartItems(userId: number): Promise<Product[]> {
    const cartRef = ref(database, `${dbRef.cart}/${userId}`);
    const snapshot = await get(cartRef);
    return snapshot.exists() ? Object.values(snapshot.val()) : [];
  },

  async addToCart(userId: number, productId: number, quantity: number): Promise<void> {
    const cartItemRef = ref(database, `${dbRef.cart}/${userId}/${productId}`);
    await set(cartItemRef, { productId, quantity });
  },

  async updateCartItemQuantity(userId: number, productId: number, quantity: number): Promise<void> {
    const cartItemRef = ref(database, `${dbRef.cart}/${userId}/${productId}`);
    await set(cartItemRef, { quantity });
  },

  async removeFromCart(userId: number, productId: number): Promise<void> {
    const cartItemRef = ref(database, `${dbRef.cart}/${userId}/${productId}`);
    await remove(cartItemRef);
  },

  async clearCart(userId: number): Promise<void> {
    const cartRef = ref(database, `${dbRef.cart}/${userId}`);
    await remove(cartRef);
  },
};