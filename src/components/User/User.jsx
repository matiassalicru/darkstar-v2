import { SCList, SCItem } from './styles'

import { ReactComponent as BagIcon } from '../../assets/bag2.svg'
import { ReactComponent as UserIcon } from '../../assets/user.svg'
import { ReactComponent as SearchIcon } from '../../assets/search.svg'

export const User = () => {
  return (
    <SCList>
      <SCItem>
        <SearchIcon />
      </SCItem>
      <SCItem>
        <UserIcon />
      </SCItem>
      <SCItem>
        <BagIcon />
      </SCItem>
    </SCList>
  )
}
