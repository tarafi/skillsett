import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div>
      <section className="bg-card py-20 sm:py-24">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl font-headline">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            We&apos;re here to answer any questions you may have. Reach out to us and we&apos;ll respond as soon as we can.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Fill out the form and our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Mail className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Email</h3>
                        <p className="text-muted-foreground">General Inquiries</p>
                        <a href="mailto:info@skillsett.in" className="text-primary hover:underline">info@skillsett.in</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Phone className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Phone</h3>
                        <p className="text-muted-foreground">Mon-Fri from 9am to 5pm.</p>
                        <a href="tel:+911234567890" className="text-primary hover:underline">+91 (123) 456-7890</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Office</h3>
                        <p className="text-muted-foreground">123 Learning Lane, Knowledge City</p>
                        <p className="text-primary">Bangalore, India</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
