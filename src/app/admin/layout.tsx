import AdminOverLay from '@/components/atoms/AdminOverLay'
import AdminHeader from '@/components/organism/AdminHeader'
import AdminSidebar from '@/components/organism/AdminSidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'h-screen w-screen bg-black'}>
        <div className="flex flex-row">
          <aside className="m-0 h-screen w-fit p-0">
            <AdminOverLay />
            <AdminSidebar />
          </aside>
          <section className="flex max-h-screen flex-1 flex-row overflow-y-hidden lg:py-5 lg:pr-5">
            <div className="flex flex-1 flex-col overflow-hidden bg-white px-4 pt-3 lg:rounded-lg lg:px-12 lg:py-6">
              <AdminHeader />
              <div className="flex-1 overflow-y-auto ">{children}</div>
            </div>
          </section>
        </div>
      </body>
    </html>
  )
}
