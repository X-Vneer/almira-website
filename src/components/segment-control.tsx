"use client"

import { usePathname, useRouter } from "@/i18n/navigation"

export default function SegmentedControl({
  data,
}: {
  data: { label: string; value: string }[]
}) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="flex bg-white p-1.5 rounded-lg w-fit mx-auto my-4 gap-1">
      {data.map((tab) => (
        <button
          key={tab.value}
          onClick={() => router.push(tab.value)}
          className={`px-2 md:px-4 py-1.5 md:py-2 rounded-lg md:text-lg font-medium transition-colors ${
            pathname === tab.value
              ? "bg-primary text-white"
              : "text-primary hover:bg-gray-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
