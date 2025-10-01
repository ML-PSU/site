import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? 'ML@PSU'
  const description = searchParams.get('description') ?? 'Machine Learning Club at Penn State University'
  const type = searchParams.get('type') ?? 'default'

  // Fetch the logo
  const logoResponse = await fetch(new URL('/logo.svg', request.url))
  const logoBuffer = await logoResponse.arrayBuffer()

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
          backgroundColor: 'white',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          padding: '80px 100px',
          position: 'relative',
        }}
      >
        {/* Subtle background pattern like Notion */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20px 20px, #f8f9fa 1px, transparent 0)',
            backgroundSize: '40px 40px',
            opacity: 0.5,
          }}
        />
        
        {/* Content container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '1000px',
            zIndex: 1,
          }}
        >
          {/* Header with logo */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              marginBottom: '60px',
            }}
          >
            {/* Logo */}
            <img
              src={`data:image/png;base64,${Buffer.from(logoBuffer).toString('base64')}`}
              alt="ML@PSU Logo"
              style={{
                width: '80px',
                height: '80px',
              }}
            />
            {/* Brand name */}
            <div
              style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#000',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              }}
            >
              ML@PSU
            </div>
          </div>
          
          {/* Main title */}
          <h1
            style={{
              fontSize: type === 'blog' ? '56px' : '64px',
              fontWeight: '700',
              color: '#000',
              margin: '0 0 32px 0',
              lineHeight: 1.1,
              width: '100%',
            }}
          >
            {title}
          </h1>
          
          {/* Description */}
          <p
            style={{
              fontSize: '28px',
              color: '#64748b',
              margin: '0',
              lineHeight: 1.4,
              width: '100%',
              fontWeight: '400',
            }}
          >
            {description}
          </p>
          
          {/* Bottom subtle branding */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '100px',
              fontSize: '20px',
              color: '#cbd5e1',
              fontWeight: '500',
            }}
          >
            mlpsu.org
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}