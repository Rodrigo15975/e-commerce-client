const URL_API_GATEWAY = process.env.NEXT_PUBLIC_URL_API_GATEWAY

export const PathServices = {
  URL: URL_API_GATEWAY || 'http://localhost:4000',
  CLIENTS: '/clients',
  PRODUCTS: '/products',
  CATEGORIES: '/category',
  PAYMENTS: '/payment',
} as const
