import { Button } from 'rebass'
import { IconButton } from 'theme-ui';
import more from '../../public/images/more.svg';
export default function MoreButton({children, ...props}){
  return (
    <Button variant="primary" {...props}>
      {more}
    </Button>
  )
}