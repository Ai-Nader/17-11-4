"use client"

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
})

export type BillingFormData = z.infer<typeof formSchema>

interface BillingFormProps {
  onSubmit: (data: BillingFormData) => void
}

export function BillingForm({ onSubmit }: BillingFormProps) {
  const form = useForm<BillingFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
    },
  })

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Billing Details</h2>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            {...form.register('fullName')}
            placeholder="John Doe"
          />
          {form.formState.errors.fullName && (
            <p className="text-sm text-destructive">
              {form.formState.errors.fullName.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            {...form.register('email')}
            placeholder="john@example.com"
          />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Continue to Payment
        </Button>
      </form>
    </Card>
  )
}