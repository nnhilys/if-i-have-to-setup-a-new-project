import type { ReactElement } from 'react'
import { useTheme } from '../theme/use'
import { AppToolList } from './list'

export function AppBox(): ReactElement {
  useTheme()

  return (
    <div className="w-screen h-screen flex justify-center p-32">
      <AppToolList />
    </div>
  )
}
