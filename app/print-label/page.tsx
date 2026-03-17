"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import LabelPreview from "@/components/PrintLable"
import { exportLabelPDF } from "@/lib/exportPdf"
import { Order } from "@/types/order"

export default function PrintLabelPage() {
  const params = useSearchParams()
  const id = params.get("id")

  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    if (!id) return

    async function fetchOrder() {
      const { data } = await supabase
        .from("prompt_express")
        .select("*")
        .eq("id", id)
        .single()

      if (data) setOrder(data)
    }

    fetchOrder()
  }, [id])

  if (!order) return <div className="p-4">Loading...</div>

  return (
    <div className="p-4">
      {/* LIVE PREVIEW */}
      <LabelPreview order={order} />

      {/* EXPORT BUTTON */}
      <button
        onClick={exportLabelPDF}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Download PDF
      </button>
    </div>
  )
}