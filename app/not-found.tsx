import { Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-start space-y-4">
      <h2>Ops, hai mancato il bersaglio!</h2>
      <Image src="/miss.svg" alt="Bersaglio mancato" width={512} height={512} />
      <p>Controlla il link e riprova</p>
      <Button asChild variant="outline">
        <Link href="/">
          <Home />
          Torna alla Home
        </Link>
      </Button>
    </div>
  );
}
