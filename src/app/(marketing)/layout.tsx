import { ReactNode } from 'react'
import { Navbar } from './_components/navbar'

type MarketingLayoutProps = {
  children: ReactNode
}

export const MarketingLayout: React.FC<MarketingLayoutProps> = ({
  children,
}) => {
  return (
    <div className="selection:bg-[hsl(320,65%,52%,20%)]">
      <Navbar />
      {children}
    </div>
  )
}

export default MarketingLayout
