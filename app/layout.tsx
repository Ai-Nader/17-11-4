import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Automations Solutions - Premium Automation Templates',
  description: 'Discover premium templates for Notion, n8n, Make, Zapier, and ChatGPT to supercharge your productivity.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="automation-solutions-theme"
        >
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <Navigation />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}