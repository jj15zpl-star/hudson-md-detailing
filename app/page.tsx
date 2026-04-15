import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DetailingSite() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold tracking-tight">Hudson MD Detailing</h1>
          <p className="text-gray-600">Premium Mobile Car Detailing • Hudson, Ohio</p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-5">
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-5 space-y-2">
              <h2 className="text-xl font-semibold">Exterior Detail</h2>
              <p className="text-gray-600">Hand wash, dry, wheels, tire shine</p>
              <p className="font-bold mt-2">Quote Based</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-5 space-y-2">
              <h2 className="text-xl font-semibold">Interior Detail</h2>
              <p className="text-gray-600">Deep vacuum, wipe-down, glass, stain treatment</p>
              <p className="font-bold mt-2">Quote Based</p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-5 space-y-2">
              <h2 className="text-xl font-semibold">Full Detail</h2>
              <p className="text-gray-600">Complete interior + exterior deep clean</p>
              <p className="font-bold mt-2">Quote Based</p>
            </CardContent>
          </Card>
        </div>

        {/* About */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 space-y-3">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="text-gray-700">
              Hudson MD Detailing is a locally owned mobile detailing service focused on quality, precision, and customer satisfaction. Every vehicle is treated with attention to detail to deliver a clean, like-new finish.
            </p>
          </CardContent>
        </Card>

        {/* Booking / Quote Form */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-center">Request a Quote</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Full Name" />
              <Input placeholder="Phone Number" />
              <Input placeholder="Email" />
              <Input placeholder="Vehicle (e.g. Honda Civic)" />
            </div>

            <Textarea placeholder="Describe condition (dirty, stains, pet hair, etc.)" />

            <div className="text-center">
              <Button className="text-lg px-6 py-3 rounded-2xl">Submit Request</Button>
            </div>

            <p className="text-sm text-gray-500 text-center">
              We’ll respond with a custom quote and available times.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <div className="text-center text-gray-700 space-y-1">
          <p>Hudson, Ohio</p>
          <p>Text to book: (your number)</p>
        </div>
      </div>
    </div>
  );
}
