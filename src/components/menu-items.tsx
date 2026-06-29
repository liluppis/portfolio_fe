import Link from "next/link"

interface MenuItemProps {
  number: string
  comment: string
  title: string
  meta: string
  href: string
}

export function MenuItem({
  number,
  comment,
  title,
  meta,
  href,
}: MenuItemProps) {
  return (
    <Link href={href} className="group block">
      <div className="flex flex-row justify-items-center items-center gap-15 pl-5 py-8 transition-colors group-hover:bg-background border-b-10 border-light-purple">
        <p className="text-light-purple group-hover:text-orange transition-colors">
          {number}
        </p>
        <div className="flex flex-row gap-30">
          <div className="flex flex-col justify-center">
            <p className="text-comment group-hover:text-orange font-mono text-sm transition-colors">
              {comment}
            </p>
            <h2 className="text-purple font-heading text-3xl group-hover:text-purple transition-colors">
              {title}
            </h2>
          </div>
          <p className="mt-10 text-light-purple group-hover:text-orange font-mono text-xs transition-colors">
            {meta}
          </p>
        </div>
      </div>
    </Link>
  )
}
