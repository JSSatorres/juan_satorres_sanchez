export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-background text-textPrimary px-4 py-16 overflow-x-hidden">
      {children}
    </section>
  )
}
