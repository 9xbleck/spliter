"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Menu, Split } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* ───── Header ───── */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-black/10 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Split className="w-6 h-6" />
            <span className="text-xl font-bold">EvenUP</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm hover:text-black/70 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm hover:text-black/70 transition-colors"
            >
              How It Works
            </a>
            <Button asChild variant="ghost" size="sm">
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-black text-white hover:bg-black/90"
            >
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-black/10 bg-white">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a
                href="#features"
                className="text-sm hover:text-black/70 transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-sm hover:text-black/70 transition-colors"
              >
                How It Works
              </a>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="w-full bg-black text-white hover:bg-black/90"
              >
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* ───── Hero ───── */}
        <section className="container mx-auto px-4 py-24 md:py-32 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            EvenUp expenses.
            <br />
            effortlessly.
          </h1>
          <p className="text-xl md:text-2xl text-black/60 max-w-2xl mx-auto">
            The smartest way to split expenses with friends
          </p>
          <p className="text-base md:text-lg text-black/50 max-w-xl mx-auto">
            Track shared expenses, split bills effortlessly, and settle up
            quickly. Never worry about who owes who again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-black/90"
            >
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#how-it-works">See How It Works</Link>
            </Button>
          </div>

          <div className="mt-20 max-w-5xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-black/5 to-black/10 rounded-lg border border-black/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                {/* <Image
                  src="/hero.png"
                  width={1280}
                  height={720}
                  alt="Banner"
                  className="rounded-lg mx-auto"
                  priority
                /> */}
              </div>
            </div>
          </div>
        </section>

        {/* ───── Features ───── */}
        <section id="features" className="border-t border-black/10 py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Features</h2>
            <p className="text-lg text-black/60 mb-2">
              Everything you need to split expenses
            </p>
            <p className="text-black/50 max-w-2xl mx-auto mb-16">
              Our platform provides all the tools you need to handle shared
              expenses with ease.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {FEATURES.map(({ title, Icon, description }) => (
                <Card
                  key={title}
                  className="border-black/10 hover:border-black/20 transition-colors"
                >
                  <CardContent className="p-6 space-y-4">
                    <Icon className="w-10 h-10" />
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-black/60 text-sm">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ───── How It Works ───── */}
        <section
          id="how-it-works"
          className="border-t border-black/10 py-24 bg-black/[0.02]"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-black/60 mb-2">
              Splitting expenses has never been easier
            </p>
            <p className="text-black/50 max-w-2xl mx-auto mb-16">
              Follow these simple steps to start tracking and splitting expenses
              with friends.
            </p>

            <div className="max-w-4xl mx-auto space-y-12">
              {STEPS.map(({ label, title, description }) => (
                <div
                  key={label}
                  className="flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {label}
                  </div>
                  <div className="space-y-2 flex-1 text-left">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="text-black/60">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Testimonials ─────
        <section className="border-t border-black/10 py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Testimonials
            </h2>
            <p className="text-lg text-black/60 mb-16">
              What our users are saying
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {TESTIMONIALS.map(({ quote, name, role, image }) => (
                <Card key={name} className="border-black/10">
                  <CardContent className="p-6 space-y-4">
                    <p className="text-black/70 italic">"{quote}"</p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={image} alt={name} />
                        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm text-black/50">{role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* ───── CTA ───── */}
        <section className="border-t border-black/10 py-24 bg-black text-white text-center">
          <div className="container mx-auto px-4 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to simplify expense sharing?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Join thousands of users who have made splitting expenses
              stress-free.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-white/90"
            >
              <Link href="/dashboard">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* ───── Footer ───── */}
      <footer className="border-t border-black/10 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Split className="w-5 h-5" />
            <span className="font-semibold">EvenUP</span>
          </div>
          <p className="text-sm text-black/50">
            © {new Date().getFullYear()} EvenUP. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
