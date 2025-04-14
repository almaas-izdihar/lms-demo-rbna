import { NextResponse } from 'next/server';
import { Xendit, Invoice as InvoiceClient } from 'xendit-node';
import { CreateInvoiceRequest, Invoice } from 'xendit-node/invoice/models';
import { supabase } from '@/lib/supabase';

// Initialize Xendit client
const xenditClient = new Xendit({
  secretKey: process.env.XENDIT_SECRET_KEY as string
});

// Get the Invoice client
const xenditInvoiceClient = new InvoiceClient({
  secretKey: process.env.XENDIT_SECRET_KEY as string
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { courseData, customerData } = body;
    
    // Get or create user
    let userId;
    const { data: existingUser, error: userQueryError } = await supabase
      .from('users')
      .select('id')
      .eq('email', customerData.email)
      .single();
    
    if (userQueryError && userQueryError.code !== 'PGRST116') {
      throw new Error('Error checking user');
    }
    
    if (existingUser) {
      userId = existingUser.id;
    } else {
      // In a real app, you'd have proper user registration
      // This is simplified for demo purposes
      const { data: newUser, error: createUserError } = await supabase
        .from('users')
        .insert({
          name: `${customerData.firstName} ${customerData.lastName}`.trim(),
          email: customerData.email,
          password_hash: 'temporary_hash' // In a real app, use proper password hashing
        })
        .select('id')
        .single();
      
      if (createUserError) {
        throw new Error('Failed to create user');
      }
      
      userId = newUser.id;
    }
    
    // Create external ID
    const externalId = `course-${courseData.id}-${Date.now()}`;
    
    // Create invoice data
    const data: CreateInvoiceRequest = {
      amount: Math.round(courseData.price * 1.1), // Including tax, rounded to whole number
      invoiceDuration: 86400, // 24 hours in seconds
      externalId: externalId,
      description: `Payment for ${courseData.title}`,
      currency: "IDR",
      reminderTime: 1,
      customer: {
        givenNames: customerData.firstName,
        email: customerData.email,
        mobileNumber: customerData.phone
      },
      customerNotificationPreference: {
        invoiceCreated: ["email"],
        invoiceReminder: ["email"],
        invoicePaid: ["email"]
      },
      successRedirectUrl: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
      failureRedirectUrl: `${process.env.NEXT_PUBLIC_APP_URL}/payment/failure`,
      items: [
        {
          name: courseData.title,
          quantity: 1,
          price: courseData.price,
          category: "Education",
          url: `${process.env.NEXT_PUBLIC_APP_URL}/courses/${courseData.id}`
        },
        {
          name: "Tax",
          quantity: 1,
          price: Math.round(courseData.price * 0.1),
          category: "Tax"
        }
      ]
    };

    // Create invoice using the xenditInvoiceClient
    const response: Invoice = await xenditInvoiceClient.createInvoice({
      data
    });
    
    // Save payment information to database
    const { error: paymentError } = await supabase
      .from('payments')
      .insert({
        external_id: externalId,
        invoice_id: response.id,
        user_id: userId,
        course_id: courseData.id,
        amount: Math.round(courseData.price * 1.1),
        status: 'PENDING'
      });
    
    if (paymentError) {
      console.error('Error saving payment:', paymentError);
    }
    
    return NextResponse.json({ 
      success: true, 
      invoiceUrl: response.invoiceUrl,
      invoiceId: response.id
    });
  } catch (error) {
    console.error('Error creating Xendit invoice:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create invoice' },
      { status: 500 }
    );
  }
}