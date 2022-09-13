import Button from '@/components/ui/button';
import { useModalAction } from '@/components/ui/modal/modal.context';

export default function LoginButton() {
  const { openModal } = useModalAction();
  function handleJoin() {
    return openModal('LOGIN_VIEW');
  }
  return (
    <Button className="font-semibold" size="small" onClick={handleJoin} aria-label="Login or Join to Teton private limited">
      Login
    </Button>
  );
}
