// app/providers.tsx
import { HeroUIProvider } from '@heroui/react';
export function ProvidersHero({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
