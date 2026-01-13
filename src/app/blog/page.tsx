import { Section } from "@/components/shared/Section"
import { H1, Lead } from "@/components/shared/Typography"
import { Button } from "@/components/shared/Button"
import Link from "next/link"

export const metadata = {
    title: "Blog | Lighthaus Studio",
    description: "Insights on real estate marketing and media trends.",
}

export default function BlogPage() {
    return (
        <Section className="min-h-[60vh] flex flex-col items-center justify-center text-center">
            <span className="px-3 py-1 rounded-full bg-secondary text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                Coming Soon
            </span>
            <H1 className="mb-6">The Lighthaus Journal</H1>
            <Lead className="mx-auto max-w-2xl mb-12">
                We are crafting in-depth articles to help you market your listings better. Check back soon for tips, case studies, and industry news.
            </Lead>
            <Link href="/">
                <Button>Return Home</Button>
            </Link>
        </Section>
    )
}
