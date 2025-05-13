import { SiGithub } from '@icons-pack/react-simple-icons';
import { Code, Database, FileText, GitBranch, Globe, Mail, Package, Server, Workflow } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function ResourcesPage() {
  return (
    <div className="flex flex-col items-start justify-start space-y-6">
      <div className="ftl:flex-row ftl:space-x-6 ftl:space-y-0 flex w-full flex-col items-start justify-between space-y-6 space-x-0">
        <div className="ftl:w-2/3 flex flex-col items-start justify-start">
          <h1 className="mb-4 text-3xl">Risorse</h1>
          <p className="text-muted-foreground">
            Trova informazioni sulle nostre licenze, fonti di dati, tecnologie e processo di sviluppo.
          </p>
          {/* TODO: Aggiungere bottoni */}
        </div>

        <div className="ftl:max-w-1/3 ftl:w-auto bg-muted flex w-full flex-col items-start justify-between rounded-lg p-6">
          <div className="mb-4 flex flex-row items-center space-x-2">
            <Mail className="h-5 w-5" />
            <h2 className="text-lg">Contatti</h2>
          </div>
          <Separator className="mb-4" />
          <p className="mb-4">Scopri il nostro team e contattaci.</p>
          <Button asChild>
            <Link href="/contatti">Contattaci</Link>
          </Button>
        </div>
      </div>

      <div className="flex w-full flex-col items-start justify-start">
        <div className="mb-4 flex items-center space-x-2">
          <FileText className="h-5 w-5" />
          <h2 className="text-2xl">Informazioni sulle Licenze</h2>
        </div>
        <Separator className="mb-4" />
        <div className="bg-muted flex w-full flex-col items-start justify-start rounded-lg p-6">
          <h3 className="text-xl">Licenza Generale</h3>
          <p className="text-muted-foreground text-sm">Termini di utilizzo per il nostro sito web</p>
          <p className="my-4">
            Tutti i contenuti di questo sito web sono concessi in licenza sotto la Licenza MIT, salvo diversa
            indicazione. Questo significa che sei libero di utilizzare, copiare, modificare e distribuire i contenuti, a
            condizione che includa l&apos;avviso di copyright originale e la dichiarazione di esclusione di
            responsabilità.
          </p>
          <div className="bg-card rounded-lg p-4">
            <h4 className="mb-2 text-lg">Licenze dei Dati</h4>
            <p className="text-sm">
              I dati satellitari visualizzati su questo sito web provengono dal Copernicus Browser e sono soggetti alla
              politica sui dati di Copernicus, che generalmente consente un accesso libero e aperto per la maggior parte
              degli utilizzi. Quando utilizzi questi dati, fornisci un&apos;appropriata attribuzione a Copernicus.
            </p>
          </div>
        </div>
      </div>

      {/*TODO: Da qui in poi */}
      <section className="mb-12">
        <div className="mb-4 flex items-center gap-2">
          <Database className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">Data Sources</h2>
        </div>
        <Separator className="mb-6" />
        <Card>
          <CardHeader>
            <CardTitle>Copernicus Browser</CardTitle>
            <CardDescription>Our primary source for satellite data</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              We utilize the Copernicus Browser as our primary dataset source. Copernicus provides high-quality Earth
              observation data through its Sentinel satellites.
            </p>
            <p>
              The Copernicus program offers comprehensive, free, and open access to Earth observation data, enabling us
              to provide accurate and up-to-date information for our users.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Technologies Used */}
      <section className="mb-12">
        <div className="mb-4 flex items-center gap-2">
          <Code className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">Technologies Used</h2>
        </div>
        <Separator className="mb-6" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <Package className="text-muted-foreground h-5 w-5" />
              <CardTitle className="text-lg">pnpm</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Fast, disk space efficient package manager that powers our development workflow.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <Code className="text-muted-foreground h-5 w-5" />
              <CardTitle className="text-lg">Next.js</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                React framework that enables server-side rendering and static site generation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <Server className="text-muted-foreground h-5 w-5" />
              <CardTitle className="text-lg">Vercel</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Platform for frontend frameworks and static sites, providing seamless deployment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <SiGithub className="text-muted-foreground h-5 w-5" />
              <CardTitle className="text-lg">GitHub</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Version control platform that hosts our codebase and facilitates collaboration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <Globe className="text-muted-foreground h-5 w-5" />
              <CardTitle className="text-lg">Tailwind CSS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Utility-first CSS framework for rapidly building custom user interfaces.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-2 pb-2">
              <GitBranch className="text-muted-foreground h-5 w-5" />
              <CardTitle className="text-lg">TypeScript</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Strongly typed programming language that builds on JavaScript for better code quality.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CI/CD Explanation */}
      <section className="mb-12">
        <div className="mb-4 flex items-center gap-2">
          <Workflow className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">CI/CD Pipeline</h2>
        </div>
        <Separator className="mb-6" />
        <Card>
          <CardHeader>
            <CardTitle>Continuous Integration & Deployment</CardTitle>
            <CardDescription>Our automated development workflow</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-medium">GitHub Integration</h4>
                <p className="text-muted-foreground">
                  Our development process begins with GitHub, where all code changes are tracked and reviewed. We use
                  pull requests for code reviews and branch protection rules to ensure code quality.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-medium">Automated Testing</h4>
                <p className="text-muted-foreground">
                  Every code change triggers automated tests through GitHub Actions. This includes unit tests,
                  integration tests, and linting to maintain code quality and prevent regressions.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-medium">Build Process</h4>
                <p className="text-muted-foreground">
                  Upon successful testing, our build process compiles the TypeScript code, optimizes assets, and
                  prepares the application for deployment using Next.js build optimizations.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-medium">Vercel Deployment</h4>
                <p className="text-muted-foreground">
                  We use Vercel for automatic deployments. Each pull request generates a preview deployment, while
                  merges to the main branch trigger production deployments. This ensures continuous delivery of new
                  features and bug fixes.
                </p>
              </div>

              <div className="bg-muted rounded-md p-4">
                <h4 className="mb-2 font-medium">Workflow Automation</h4>
                <p>
                  Our CI/CD pipeline automates the entire process from code commit to production deployment, reducing
                  manual intervention and ensuring consistent, reliable releases. This approach allows us to deliver
                  updates quickly while maintaining high quality standards.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
