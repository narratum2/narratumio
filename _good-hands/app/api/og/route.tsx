import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Good Hands'
    const subtitle = searchParams.get('subtitle') || 'Beauty Concierge for Lisbon & Beyond'

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fafaf9',
            backgroundImage: 'linear-gradient(135deg, #fafaf9 0%, #f8f4f0 100%)',
            position: 'relative',
          }}
        >
          {/* Decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '8px',
              background: 'linear-gradient(90deg, #d4af37 0%, #9caf88 100%)',
            }}
          />

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '80px',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '24px',
                fontFamily: 'serif',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: '36px',
                color: '#4a5568',
                margin: 0,
                maxWidth: '900px',
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Footer accent */}
          <div
            style={{
              position: 'absolute',
              bottom: '60px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '2px',
                backgroundColor: '#d4af37',
              }}
            />
            <span
              style={{
                fontSize: '20px',
                color: '#4a5568',
                fontWeight: 600,
              }}
            >
              goodhands.com
            </span>
            <div
              style={{
                width: '40px',
                height: '2px',
                backgroundColor: '#d4af37',
              }}
            />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    // In edge runtime, only log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('OG image generation error:', e)
    }
    return new Response('Failed to generate image', { status: 500 })
  }
}

