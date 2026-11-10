import { NextResponse } from 'next/server';

function getCorsOrigin(request) {
  const origin = request?.headers?.get('origin');
  if (!origin) return '*';
  const vmcPattern = /^https?:\/\/([a-zA-Z0-9-]+\.)?vmcmedia\.in$/;
  const localPattern = /^http:\/\/localhost(:\d+)?$/;
  if (vmcPattern.test(origin) || localPattern.test(origin)) {
    return origin;
  }
  return '*';
}

function getCorsHeaders(request) {
  const allowOrigin = getCorsOrigin(request);
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE, PATCH',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, Accept, Origin, X-Api-Key',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Max-Age': '86400',
  };
}

export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 204,
    headers: getCorsHeaders(request),
  });
}

export async function POST(request) {
  const corsHeaders = getCorsHeaders(request);

  try {
    const body = await request.json();
    const { name, fullName, phone, email, company, leadSource, landingPageUrl } = body;

    const rawDigits = (phone || '').replace(/\D/g, '');
    const tenDigits = rawDigits.length >= 10 ? rawDigits.slice(-10) : rawDigits;
    const formattedPhone = tenDigits ? `+91${tenDigits}` : '';

    const payload = {
      name: name || fullName || '',
      phone: formattedPhone,
      email: email || '',
      company: company || '',
      leadSource: leadSource || 'Next.js Website',
      landingPageUrl: landingPageUrl || '',
    };

    // Forward to AIWA CRM (https://aiwa.vmcmedia.in/api/leads)
    const aiwaRes = await fetch('https://aiwa.vmcmedia.in/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const aiwaData = await aiwaRes.json().catch(() => null);

    return NextResponse.json(
      {
        success: aiwaRes.ok,
        status: aiwaRes.status,
        data: aiwaData,
      },
      {
        status: aiwaRes.status || 200,
        headers: corsHeaders,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        error: err.message || 'Failed to proxy lead',
      },
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}
