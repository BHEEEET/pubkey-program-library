import { PubKeyIdentityProvider } from '@pubkey-program-library/anchor'
import {
  IconBrandDiscordFilled,
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
  IconBrandTwitterFilled,
  IconCurrencySolana,
} from '@tabler/icons-react'

export function PubkeyProfileUiIdentityProviderIcon({
  provider,
  size = 24,
}: {
  provider: PubKeyIdentityProvider
  size?: number
}) {
  switch (provider) {
    case PubKeyIdentityProvider.Discord:
      return <IconBrandDiscordFilled size={size} />
    case PubKeyIdentityProvider.Github:
      return <IconBrandGithubFilled size={size} />
    case PubKeyIdentityProvider.Google:
      return <IconBrandGoogleFilled size={size} />
    case PubKeyIdentityProvider.Solana:
      return <IconCurrencySolana size={size} />
    case PubKeyIdentityProvider.Twitter:
      return <IconBrandTwitterFilled size={size} />
    default:
      return null
  }
}
