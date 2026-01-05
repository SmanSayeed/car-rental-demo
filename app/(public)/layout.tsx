import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="bg-background text-foreground min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    )
}
