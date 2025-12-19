import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, phone } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Initialize ZAI SDK
    const zai = await ZAI.create();

    // Create a professional notification message
    const notificationMessage = `
🌊 NEW CONTACT INQUIRY - PT SAFARI LAUT INDO 🌊

📝 Contact Details:
• Name: ${name}
• Email: ${email}
• Phone: ${phone || 'Not provided'}
• Message: ${message}

📅 Date: ${new Date().toLocaleString('id-ID', { 
  timeZone: 'Asia/Jakarta',
  dateStyle: 'full',
  timeStyle: 'long'
 })}

🏢 Company: PT SAFARI LAUT INDO
📍 Location: Padang, Sumatera Barat
📞 Contact: 085285704297

This is an automated notification from your website contact form.
    `.trim();

    // Send notification using ZAI
    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'You are a notification assistant for PT SAFARI LAUT INDO, a marine tourism company. Process contact form submissions and acknowledge receipt.'
        },
        {
          role: 'user',
          content: notificationMessage
        }
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    // Log the notification for internal use
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
      aiResponse: completion.choices[0]?.message?.content
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We will contact you soon.',
      data: {
        name,
        email,
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process your request. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'PT SAFARI LAUT INDO Contact API',
    endpoints: {
      'POST /api/contact': 'Submit contact form',
      required_fields: ['name', 'email', 'message'],
      optional_fields: ['phone']
    }
  });
}