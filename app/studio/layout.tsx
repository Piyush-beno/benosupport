export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 z-50 h-dvh w-full overflow-hidden bg-white">
      {children}
    </div>
  )
}
