import { ServiceLanding, serviceLandingMetadata } from '@/components/shared/ServiceLanding'

const SLUG = 'matterport-3d-tours-lubbock-tx-clovis-nm'

export const metadata = serviceLandingMetadata(SLUG)

export default function Page() {
  return <ServiceLanding slug={SLUG} />
}
