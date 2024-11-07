import Link from 'next/link'

type FooterLinkGroupProps = {
  title: string
  links: { label: string; href: string }[]
}

export const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({
  title,
  links,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
