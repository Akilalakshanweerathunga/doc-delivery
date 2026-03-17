"use client"
import { Order } from "../types/order"

interface Props {
  order: Order
  close: () => void
}

export default function ViewOrderModal({ order, close }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96 space-y-3">
        <h2 className="text-xl font-bold">Order Details</h2>
        <p><strong>Order ID:</strong> {order.order_id}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Name:</strong> {order.name}</p>
        <p><strong>Address:</strong> {order.address}</p>
        <p><strong>Phone:</strong> {order.phone}</p>
        <p><strong>Products:</strong> {order.products?.join(", ")}</p>
        <p><strong>Tracking:</strong> {order.tracking_details}</p>
        <div className="flex justify-end">
          <button className="px-3 py-1 bg-gray-500 text-white" onClick={close}>Close</button>
        </div>
      </div>
    </div>
  )
}