import Link from "next/link"
import { XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PaymentFailurePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <div className="max-w-md space-y-6">
        <XCircle className="mx-auto h-16 w-16 text-red-500" />
        <h1 className="text-3xl font-bold">Payment Failed</h1>
        <p className="text-muted-foreground">
          We couldn't process your payment. Please try again or contact support if the problem persists.
        </p>
        <div className="flex flex-col space-y-2">
          <Link href="/">
            <Button className="w-full" size="lg">
              Back to Home
            </Button>
          </Link>
          <Button variant="outline" className="w-full" size="lg" onClick={() => window.history.back()}>
            Try Again
          </Button>
        </div>
      </div>
    </div>
  )
}