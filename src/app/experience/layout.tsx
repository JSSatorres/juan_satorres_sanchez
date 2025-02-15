export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="md:m-7 flex flex-col md:flex-row min-h-screen bg-background text-main px-4 ">
      {children}
    </section>
  )
}
