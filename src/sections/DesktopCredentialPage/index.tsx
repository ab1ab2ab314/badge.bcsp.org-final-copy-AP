import { credentialContent } from "@/data/credentialContent";
import { DesktopBackground } from "@/sections/DesktopCredentialPage/components/DesktopBackground";
import { IssueLink } from "@/sections/DesktopCredentialPage/components/IssueLink";
import { DesktopHeader } from "@/sections/DesktopCredentialPage/components/DesktopHeader";
import { CredentialCard } from "@/sections/DesktopCredentialPage/components/CredentialCard";

type DesktopCredentialPageProps = {
  onOpenIssueModal: () => void;
};

export const DesktopCredentialPage = ({
  onOpenIssueModal,
}: DesktopCredentialPageProps) => {
  return (
    <div className="caret-transparent hidden outline-[3px] no-underline font-avenir md:block">
      <DesktopBackground backgroundVariant="bg-lime-600 opacity-60 fixed w-[195px] z-[2] right-0 inset-y-0" />
      <DesktopBackground
        backgroundVariant="caret-transparent opacity-15 outline-[3px] fixed no-underline w-full z-[1] left-0 bottom-0"
        imageSrc={credentialContent.assets.footerBackgroundImage}
        imageClassName="caret-transparent block outline-[3px] no-underline w-full"
      />
      <DesktopBackground backgroundVariant="bg-cyan-900 h-[173px] absolute w-full z-[3] border-b-white border-b-2 left-0 top-0" />
      <DesktopBackground
        backgroundVariant="shadow-[rgba(0,0,0,0.3)_0px_0px_30px_10px] absolute z-[4] border border-solid overflow-hidden left-[26px] top-[27px]"
        imageSrc={credentialContent.assets.desktopProfileImage}
        imageClassName="caret-transparent block h-[196px] outline-[3px] no-underline w-[196px]"
      />
      <DesktopBackground backgroundVariant="bg-slate-400 h-[7px] absolute z-[4] left-[251px] right-0 top-[39px]" />
      <IssueLink
        href={credentialContent.links.issueHub}
        onClick={onOpenIssueModal}
      />
      <DesktopHeader
        rootVariantClassName="z-[5] left-[249px] right-0 top-[46px]"
        innerVariantClassName="h-[127px] w-full"
        showProfile={true}
        name={credentialContent.person.name}
        location={credentialContent.person.location}
      />
      <DesktopHeader
        rootVariantClassName="z-50 left-[250px] top-[187px]"
        innerVariantClassName=""
        showProfile={false}
        name=""
        location=""
      />
      <CredentialCard />
    </div>
  );
};
