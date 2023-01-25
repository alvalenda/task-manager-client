import { LoggedButton } from '../shared/LoggedButton'
import { ThemeButton } from '../shared/ThemeButton'
import { HeaderSection } from './StyledHeader'

type Props = {}

export function Header({}: Props) {
  return (
    <HeaderSection>
      <div className="title">
        <h1>Task Manager</h1>
      </div>
      <div className="theme">
        <ThemeButton />
      </div>
      <LoggedButton />
    </HeaderSection>
  )
}
