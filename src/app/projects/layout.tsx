export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen bg-background text-main px-8 py-16 flex flex-col items-center">
      {children}
    </section>
  )
}
