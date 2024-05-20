
import { Progress } from "@nextui-org/progress";

export default function PageLoadingBar() {
  return <div className="fixed top-0 left-0 w-full z-[1000]">
    <Progress
      size="sm"
      isIndeterminate
      aria-label="Loading..."
      className="w-full"
      color="success"
    />
  </div>
}
