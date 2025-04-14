import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Xendit webhook handler
export async function POST(request: Request) {
  try {
    // Verify webhook signature (in production, you should validate the signature)
    // const signature = request.headers.get('x-callback-token');

    const payload = await request.json();

    // Handle different event types
    if (payload.event === 'invoice.paid') {
      await handleInvoicePaid(payload);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process webhook' },
      { status: 500 },
    );
  }
}

async function handleInvoicePaid(payload: any) {
  const {
    external_id: externalId,
    id: invoiceId,
    status,
    paid_amount: paidAmount,
    payment_method,
    payment_channel,
    paid_at,
  } = payload;

  // Extract course ID and user info from external_id (format: course-{courseId}-{timestamp})
  const courseIdMatch = externalId.match(/course-(\d+)-\d+/);
  if (!courseIdMatch) return;

  const courseId = parseInt(courseIdMatch[1]);

  // Update payment status
  const { data: paymentData, error: paymentError } = await supabase
    .from('payments')
    .update({
      invoice_id: invoiceId,
      status: status,
      payment_method: payment_method,
      payment_channel: payment_channel,
      paid_at: paid_at,
      updated_at: new Date().toISOString(),
    })
    .eq('external_id', externalId)
    .select('user_id')
    .single();

  if (paymentError) {
    console.error('Error updating payment:', paymentError);
    return;
  }

  // If payment is successful, create enrollment
  if (status === 'PAID' && paymentData?.user_id) {
    const { error: enrollmentError } = await supabase
      .from('enrollments')
      .upsert(
        {
          user_id: paymentData.user_id,
          course_id: courseId,
          enrolled_at: new Date().toISOString(),
        },
        {
          onConflict: 'user_id,course_id',
        },
      );

    if (enrollmentError) {
      console.error('Error creating enrollment:', enrollmentError);
    }
  }
}
