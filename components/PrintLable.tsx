"use client"

import { Order } from "../types/order"

export default function LabelPreview({ order }: { order: Order }) {
  return (
    <div
      id="label-preview"
      className="w-[288px] h-[432px] bg-white shadow rounded overflow-hidden text-xs"
    >
      {/* HEADER */}
      <div className=" p-2 flex items-center gap-2">
        <img
            src="/assets/logo.png"
            alt="Dreams of Ceylonese logo"
            className="w-10 h-10"
            />
        <div>
          <div className="font-bold text-sm">Dreams of Ceylonese</div>
          <div className="text-[10px]">Gelioya, Kandy</div>
          <div className="text-[10px]">+94 77 100 41 53</div>
        </div>
      </div>

      {/* CUSTOMER */}
      <div className="p-2">
        <div className="border rounded p-2 mb-2">
          <div className="font-bold mb-1">Customer Details</div>
          <div className="grid grid-cols-2 gap-2">
                <div>
                    <span className="font-semibold">Date:</span> {order.date}
                </div>
                <div>
                    <span className="font-semibold">Order ID:</span> {order.order_id}
                </div>
            </div>
            <div>Name: {order.name}</div>
            <div>Phone: {order.phone}</div>
            <div>Address: {order.address}</div>
        </div>

        <div className="border rounded p-2 mb-2">
            <div className="flex justify-between items-start">
                
                {/* LEFT SIDE */}
                <div className="max-w-[70%]">
                <span className="font-semibold">Description:</span>
                <div>{order.description}</div>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <img
                src="/assets/fragile.png"
                alt="fragile icon"
                className="h-10 object-contain"
                />

            </div>
        </div>

        {/* OFFICE */}
        <div className="border rounded p-2">
          <div className="font-bold mb-1">Office Use Only</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="text-[10px]">
                <span >Name:</span> {order.name}
            </div>
            <div className="text-[10px]">
                <span >Order ID:</span> {order.order_id}
            </div>
        </div>
          {order.products?.map((p, i) => (
            <div  className="text-[10px]" key={i}>• {p}</div>
          ))}
        </div>
      </div>
    </div>
  )
}