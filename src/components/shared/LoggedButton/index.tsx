import { TalespireContext } from '@/contexts/talespire/TalespireContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DropDownButton } from './DropDownBtn'
import { StyledLoggedButton } from './StyledLoggedButton'

export function LoggedButton({}: Props) {
  const navigate = useNavigate()
  const { isLogged, handleIsLogged } = useContext<LoggedContext>(
    TalespireContext as any
  )

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    handleIsLogged(false)
    navigate('/login')
  }

  if (isLogged) {
    return <DropDownButton handleLogout={handleLogout} />
  }

  return <StyledLoggedButton onClick={handleLogout}>Login</StyledLoggedButton>
}

type Props = {}

type LoggedContext = {
  isLogged: boolean
  handleIsLogged: (isLogged: boolean) => void
}
