import { PubKeyIdentityProvider } from '@pubkey-program-library/anchor'
import { useQuery } from '@tanstack/react-query'
import { usePubKeyProfile } from './pubkey-profile-provider'

export function useGetProfileByProviderNullable({
  provider,
  providerId,
}: {
  provider: PubKeyIdentityProvider
  providerId: string
}) {
  const { cluster, sdk } = usePubKeyProfile()

  return useQuery({
    queryKey: ['pubkey-profile', 'getProfileByProviderNullable', { cluster, provider, providerId }],
    queryFn: () => sdk.getProfileByProviderNullable({ provider, providerId }),
    retry: false,
  })
}
