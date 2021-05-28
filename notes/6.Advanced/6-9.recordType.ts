type PageInfo = {
  title: string;
};
type Page = 'home' | 'about' | 'contact';

const nav: Record<Page, PageInfo> = {
  home: { title: 'hie'},
  about: { title: 'about'},
  contact: {title: 'contact'},
};