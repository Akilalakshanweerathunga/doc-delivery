export interface Order {
  id: string
  date: string
  order_id: string
  name: string
  address: string
  phone: string
  phone2: string
  description: string
  products: string[]
  tracking_details?: string
  couriers?: string
}