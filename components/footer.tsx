import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "All Templates", href: "/templates" },
    { name: "Custom Services", href: "/custom" },
    { name: "Cart", href: "/cart" },
  ],
  categories: [
    { name: "Notion Templates", href: "/templates/notion" },
    { name: "n8n Workflows", href: "/templates/n8n" },
    { name: "Make Scenarios", href: "/templates/make" },
    { name: "Zapier Zaps", href: "/templates/zapier" },
    { name: "ChatGPT Prompts", href: "/templates/chatgpt" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-bold text-xl">Automations Solutions</span>
            </Link>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0 text-muted-foreground" />
                <div className="text-muted-foreground">
                  OCTA LLC<br />
                  30 N Gould St Ste 27302<br />
                  Sheridan, WY 82801
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <Link 
                  href="tel:+17179044104" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +1 717-904-4104
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <Link 
                  href="mailto:info@automation.market"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@automation.market
                </Link>
              </li>
            </ul>
          </div>

          {/* Site Map */}
          <div>
            <h3 className="font-semibold text-base mb-4">Site Map</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-base mb-4">Categories</h3>
            <ul className="space-y-3">
              {navigation.categories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-base mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground order-2 md:order-1">
            © {new Date().getFullYear()} OCTA LLC. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 order-1 md:order-2">
            {navigation.social.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}