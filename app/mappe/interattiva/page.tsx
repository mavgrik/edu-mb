import { Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

//TODO: Make the page

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-start space-y-4">
      <h2>Ops, questa pagina non è ancora pronta</h2>
      <Image src="/miss.svg" alt="Bersaglio mancato" width={512} height={512} />
      <p>Torna un altra volta</p>
      <Button asChild variant="outline">
        <Link href="/">
          <Home />
          Torna alla Home
        </Link>
      </Button>
    </div>
  );
}
