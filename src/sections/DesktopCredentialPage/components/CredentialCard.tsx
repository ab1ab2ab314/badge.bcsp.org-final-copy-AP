import { credentialContent } from "@/data/credentialContent";
import { CredentialStatus } from "@/sections/DesktopCredentialPage/components/CredentialStatus";
import { CredentialBadge } from "@/sections/DesktopCredentialPage/components/CredentialBadge";
import { CredentialDescription } from "@/sections/DesktopCredentialPage/components/CredentialDescription";

export const CredentialCard = () => {
  return (
    <div className="caret-transparent outline-[3px] relative no-underline z-10 pl-[58px] pr-[18px] pt-[226px]">
      <div className="caret-transparent table h-[250px] outline-[3px] no-underline w-full">
        <div className="caret-transparent table-row outline-[3px] no-underline">
          <div className="caret-transparent table-cell outline-[3px] no-underline align-middle w-full pt-[25px]">
            <CredentialStatus />
          </div>
          <CredentialBadge
            badgeImageUrl={credentialContent.assets.desktopBadgeImage}
          />
        </div>
      </div>
      <CredentialDescription />
    </div>
  );
};
