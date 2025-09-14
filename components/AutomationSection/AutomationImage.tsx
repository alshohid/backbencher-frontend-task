import Image from "next/image"

export default function AutomationImage() {
  return (
    <div>
      <div className="relative h-full rounded-2xl overflow-hidden">
        <Image
          src="/peaceful-wellness-background.jpg"
          alt="Wellness automation"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
