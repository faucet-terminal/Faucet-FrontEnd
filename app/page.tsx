import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/theme/theme-toggler'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button>
          Hello Builder
        </Button>
      </div>

      <div>
      <ModeToggle/>
      </div>
    </main>
  )
}
