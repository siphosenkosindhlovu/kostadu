import {Image} from 'rebass'

export default function Avatar(props){
  return (
    <Image
      {...props}
      sx={{
        width: [52, null, null, null, 80],
        height: [52, null, null, null, 80],
        borderRadius: '9999px'
      }}
    />
  )
}