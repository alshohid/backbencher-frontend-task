

import AutomationContent from "./AutomationContent"
import AutomationImage from "./AutomationImage"

export default function AutomationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <AutomationImage/>
          <AutomationContent  title={" Ready to automate? "} description={"Stay on top of your recurring payments with ease "}/>
        </div>
      </div>
    </section>
  )
}
