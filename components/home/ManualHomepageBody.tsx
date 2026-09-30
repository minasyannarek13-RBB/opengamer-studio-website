import { HomepageClosingSection } from "@/components/home/HomepageClosingSection";
import { HomepageEngagementSection } from "@/components/home/HomepageEngagementSection";
import { HomepageGamesSection } from "@/components/home/HomepageGamesSection";
import { HomepageProcessSection } from "@/components/home/HomepageProcessSection";
import { HomepageProductDirectionsSection } from "@/components/home/HomepageProductDirectionsSection";

export function ManualHomepageBody() {
  return (
    <div className="bg-[#05070a] text-white">
      <HomepageEngagementSection />
      <HomepageGamesSection />
      <HomepageProductDirectionsSection />
      <HomepageProcessSection />
      <HomepageClosingSection />
    </div>
  );
}
