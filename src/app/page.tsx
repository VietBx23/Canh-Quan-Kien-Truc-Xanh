import { redirect } from 'next/navigation';
import { i18n } from '../../i18n-config';

export default function Home() {
  // TODO: detect browser language
  redirect(`/${i18n.defaultLocale}/dashboard`);
}
