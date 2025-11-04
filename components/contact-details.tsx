import { useInvoice } from "@/context/invoice-context";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function ContactDetails() {
  const { invoice, updateInvoice } = useInvoice();

  return (
    <Card>
      <CardHeader>
        <CardTitle>From & To</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <h3 className="font-medium">From (Your Details)</h3>
          <div>
            <Label htmlFor="fromName">Name</Label>
            <Input
              id="fromName"
              value={invoice.fromName}
              onChange={(e) => updateInvoice({ fromName: e.target.value })}
              placeholder="Your name or company"
            />
          </div>
          <div>
            <Label htmlFor="fromphone">Phone</Label>
            <Input
              id="fromphone"
              value={invoice.fromphone}
              onChange={(e) => updateInvoice({ fromphone: e.target.value })}
              placeholder="Your phone number"
            />
          </div>
          <div>
            <Label htmlFor="fromAddress">Address</Label>
            <Input
              id="fromAddress"
              value={invoice.fromAddress}
              onChange={(e) => updateInvoice({ fromAddress: e.target.value })}
              placeholder="Your address"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-medium">To (Client Details)</h3>
          <div>
            <Label htmlFor="toName">Name</Label>
            <Input
              id="toName"
              value={invoice.toName}
              onChange={(e) => updateInvoice({ toName: e.target.value })}
              placeholder="Client name or company"
            />
          </div>
          <div>
            <Label htmlFor="tophone">Phone</Label>
            <Input
              value={invoice.tophone}
              onChange={(e) => updateInvoice({ tophone: e.target.value })}
              id="toPhone"
              placeholder="Client phone number"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
