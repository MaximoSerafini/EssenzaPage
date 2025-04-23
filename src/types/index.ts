export interface ServiceProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  featured?: boolean;
}