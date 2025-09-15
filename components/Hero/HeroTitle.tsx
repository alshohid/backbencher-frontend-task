 export interface HeroTitleProps{
    title:string;
    subtitle:string;
 }
export function HeroTitle({title,subtitle}:HeroTitleProps) {
  return (
    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 text-center leading-tight mb-12 max-w-4xl text-balance">
    {title}
      <br />
     {subtitle}
    </h1>
  )
}
