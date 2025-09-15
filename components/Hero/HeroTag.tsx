
export interface HeroTextProps{
    heroText:string;
}
export function HeroTag({heroText}:HeroTextProps) {
  return (
    <div className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-12">
      <span className="text-sm font-medium text-gray-700">{heroText}</span>
    </div>
  )
}
