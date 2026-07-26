import { credentialContent } from "@/data/credentialContent";
import { MobileHeader } from "@/sections/MobileCredentialPage/components/MobileHeader";
import { MobileCredentialDetails } from "@/sections/MobileCredentialPage/components/MobileCredentialDetails";
import { MobileRequirements } from "@/sections/MobileCredentialPage/components/MobileRequirements";
import { MobileFooter } from "@/sections/MobileCredentialPage/components/MobileFooter";

export const MobileCredentialPage = () => {
  return (
    <div className="caret-transparent block outline-[3px] no-underline font-avenir md:hidden">
      <MobileHeader
        variant="title"
        title={credentialContent.person.name}
        imageUrl=""
        backgroundImageUrl=""
        badgeImageUrl=""
        statusLabel=""
        statusText=""
      />
      <MobileHeader
        variant="default"
        title=""
        imageUrl={credentialContent.assets.mobileProfileImage}
        backgroundImageUrl={credentialContent.assets.mobileBackgroundImage}
        badgeImageUrl={credentialContent.assets.mobileBadgeImage}
        statusLabel="STATUS"
        statusText={credentialContent.status.label}
      />
      <MobileCredentialDetails />
      <div className="bg-white caret-transparent h-[3px] outline-[3px] relative no-underline z-[1]"></div>
      <MobileRequirements />
      <MobileFooter />
    </div>
  );
};
