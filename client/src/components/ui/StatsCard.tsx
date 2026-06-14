export const StatCard = ({ label, value, icon }: {
  label: string
  value: number | string
  icon: React.ReactNode
}) => (
  <div className="bg-white rounded-[18px] px-5 py-4 shadow-[0_4px_8px_2px_rgba(0,0,0,0.08)] flex-1 min-w-0 flex justify-between items-start">
    <div>
      <p className="m-0 text-[13px] font-semibold text-[#111]">{label}</p>
      <p className="mt-2 mb-0 text-[28px] font-semibold text-[#111]">{value}</p>
    </div>
    <div className="text-[#197996] mt-0.5">{icon}</div>
  </div>
)
