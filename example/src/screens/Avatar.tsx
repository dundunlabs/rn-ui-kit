import { Fragment } from 'react'
import { Avatar } from 'rn-ui-kit'

export default function AvatarScreen() {
  return (
    <Fragment>
      <Avatar
        source={{ uri: 'https://mui.com/static/images/avatar/1.jpg' }}
      />
      <Avatar
        variant='rounded'
        source={{ uri: 'https://mui.com/static/images/avatar/2.jpg' }}
      />
      <Avatar
        variant='square'
        source={{ uri: 'https://mui.com/static/images/avatar/3.jpg' }}
      />
    </Fragment>
  )
}