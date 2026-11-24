import { ServiceLanding, serviceLandingMetadata } from '@/components/shared/ServiceLanding'

const SLUG = 'rental-property-photography-lubbock-tx-clovis-nm'

export const metadata = serviceLandingMetadata(SLUG)

export default function Page() {
  return <ServiceLanding slug={SLUG} />
}
