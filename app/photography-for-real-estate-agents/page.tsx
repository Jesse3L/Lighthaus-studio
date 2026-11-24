import { ServiceLanding, serviceLandingMetadata } from '@/components/shared/ServiceLanding'

const SLUG = 'photography-for-real-estate-agents'

export const metadata = serviceLandingMetadata(SLUG)

export default function Page() {
  return <ServiceLanding slug={SLUG} />
}
