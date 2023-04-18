import { Image } from "react-native"
import styled from '@emotion/native'

const Avatar = styled(Image)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: 9999
}))

export default Avatar