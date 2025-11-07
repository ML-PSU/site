import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'ML@PSU'
  const description = searchParams.get('description') ?? 'Machine Learning Club at Penn State University'

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
          backgroundColor: '#FAF9F6',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          padding: '80px 100px',
          position: 'relative',
        }}
      >
        {/* Stronger background pattern for better visibility */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(220, 38, 38, 0.08) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: 0.6,
          }}
        />

        {/* Content container with better contrast */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1000px',
            zIndex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            padding: '60px',
            borderRadius: '24px',
            border: '2px solid rgba(220, 38, 38, 0.15)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
          }}
        >
          {/* Brand name with strong visibility */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                fontSize: '42px',
                fontWeight: '700',
                color: '#1a1a1a',
                letterSpacing: '-0.02em',
              }}
            >
              ML@PSU
            </div>
          </div>

          {/* Main title with strong contrast */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: '700',
              color: '#1a1a1a',
              margin: '0 0 32px 0',
              lineHeight: 1.1,
              width: '100%',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h1>

          {/* Description with better readability */}
          <p
            style={{
              fontSize: '28px',
              color: '#4a5568',
              margin: '0',
              lineHeight: 1.4,
              width: '100%',
              fontWeight: '500',
            }}
          >
            {description}
          </p>
        </div>

        {/* Bottom branding with better visibility */}
        <div
          style={{
            position: 'absolute',
            bottom: '50px',
            right: '100px',
            fontSize: '22px',
            color: '#9ca3af',
            fontWeight: '600',
            letterSpacing: '0.05em',
          }}
        >
          mlpsu.org
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
