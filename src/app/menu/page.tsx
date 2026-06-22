import Link from "next/link"
import { TimelineLine } from "@/components/timeline"

export default function Menu() {
  return (
    <main className="bg-pink min-h-screen flex flex-col justify-center items-start relative">
      <div className="flex flex-row">
        <div className="flex items-center mt-110">
          <TimelineLine
            direction="horizontal"
            length="400px"
            thickness="10px"
            color="purple"
          />
        </div>
        <div>
          <TimelineLine
            direction="vertical"
            length="450px"
            thickness="10px"
            color="purple"
          />
        </div>
        <div className="flex flex-col items-center gap-25">
          <div>
            <TimelineLine
              direction="horizontal"
              length="650px"
              thickness="10px"
              color="purple"
            />
          </div>
          <div>
            <TimelineLine
              direction="horizontal"
              length="650px"
              thickness="10px"
              color="light-purple"
            />
          </div>
          <div>
            <TimelineLine
              direction="horizontal"
              length="650px"
              thickness="10px"
              color="light-purple"
            />
          </div>
          <div>
            <TimelineLine
              direction="horizontal"
              length="650px"
              thickness="10px"
              color="light-purple"
            />
          </div>
          <div>
            <TimelineLine
              direction="horizontal"
              length="650px"
              thickness="10px"
              color="light-purple"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-10">
        <Link
          href="/"
          className="flex items-center gap-2 text-purple font-mono text-lg"
        >
          <span>←</span>
          <span>cd ~/start</span>
        </Link>
      </div>
    </main>
  )
}
