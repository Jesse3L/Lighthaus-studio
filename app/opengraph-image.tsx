import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'Lighthaus Studio — real estate photography in Clovis NM, Lubbock TX, and the High Plains'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), 'public/images/home/modern-home-exterior-lubbock.jpg'))
  const src = `data:image/jpeg;base64,${photo.toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#0f1620' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={1200} height={630} style={{ position: 'absolute', inset: 0, objectFit: 'cover', width: '100%', height: '100%' }} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(15,22,32,0.92) 0%, rgba(15,22,32,0.6) 55%, rgba(15,22,32,0.1) 100%)',
          }}
        />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '64px 72px', width: '100%' }}>
          <div style={{ display: 'flex', fontSize: 34, fontWeight: 700, letterSpacing: 6, color: '#f5c542' }}>LIGHTHAUS STUDIO</div>
          <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, color: '#f4f6f9', lineHeight: 1.05, marginTop: 18, maxWidth: 820 }}>
            Real estate photography for the High Plains
          </div>
          <div style={{ display: 'flex', height: 2, width: 520, background: '#f5c542', marginTop: 28 }} />
          <div style={{ display: 'flex', fontSize: 28, color: '#d6dde6', marginTop: 22 }}>
            Clovis · Lubbock · Portales · Cannon AFB · Photos in 48 hours
          </div>
        </div>
      </div>
    ),
    size,
  )
}
