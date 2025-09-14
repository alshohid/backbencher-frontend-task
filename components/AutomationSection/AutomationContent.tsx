import ImageTicker from "@/components/AutomationSection/ImageTicker";

export interface AutomationContentProps{
  title:string;
  description:string;
}
export default function AutomationContent({title,description}:AutomationContentProps) {
  return (
    <div className="space-y-3 flex flex-col relative">
      <div className="p-3 md:p-10 h-full bg-[#edf0f2] rounded-3xl mb-3">
        <div className="inline-block px-4 py-2 bg-[#e0e3e5] text-green-800 rounded-full text-sm font-medium mb-6">
         {title}
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-600 mb-6">
          {description}
        </h2>
      </div>

      <ImageTicker/>
    </div>
  )
}
