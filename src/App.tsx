import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { DesktopCredentialPage } from "@/sections/DesktopCredentialPage";
import { MobileCredentialPage } from "@/sections/MobileCredentialPage";
import { IssueModal } from "@/components/IssueModal";
import { IssueTabs } from "@/components/IssueTabs";
import { IssueForm } from "@/components/IssueForm";
import { EmailModal } from "@/components/EmailModal";
import { TermsPage } from "@/sections/TermsPage";

export const App = () => {
  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="accent-auto bg-white caret-transparent text-black block text-base not-italic normal-nums font-normal tracking-[normal] leading-[normal] list-outside list-disc outline-[3px] pointer-events-auto text-start no-underline indent-[0px] normal-case visible border-separate font-times_new_roman">
            <DesktopCredentialPage
              onOpenIssueModal={() => setIsIssueModalOpen(true)}
            />
            <MobileCredentialPage />
            <IssueModal
              isOpen={isIssueModalOpen}
              onClose={() => setIsIssueModalOpen(false)}
              issueTabs={<IssueTabs />}
              issueForm={<IssueForm />}
            />
            <EmailModal />
          </div>
        }
      />
      <Route path="/Terms" element={<TermsPage />} />
    </Routes>
  );
};
