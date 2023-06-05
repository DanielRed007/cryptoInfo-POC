import { Link as LinkIcon, BarChart as BarChartIcon, Forum as ForumIcon } from '@mui/icons-material';

export interface LinkItem {
  icon: JSX.Element;
  text: string;
  url: string;
}

export const cryptoLinks: LinkItem[] = [
  { icon: <LinkIcon />, text: 'Link 1', url: '#' },
  { icon: <BarChartIcon />, text: 'Link 2', url: '#' },
  { icon: <ForumIcon />, text: 'Link 3', url: '#' },
  { icon: <LinkIcon />, text: 'Link 1', url: '#' },
  { icon: <BarChartIcon />, text: 'Link 2', url: '#' },
  { icon: <ForumIcon />, text: 'Link 3', url: '#' }
];
