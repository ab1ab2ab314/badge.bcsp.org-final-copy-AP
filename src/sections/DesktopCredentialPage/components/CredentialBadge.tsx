export type CredentialBadgeProps = {
  badgeImageUrl: string;
};

export const CredentialBadge = ({ badgeImageUrl }: CredentialBadgeProps) => {
  return (
    <div className="caret-transparent table-cell min-w-[100px] outline-[3px] no-underline align-top">
      <div className="caret-transparent outline-[3px] relative no-underline">
        <div className="caret-transparent outline-[3px] absolute no-underline right-0 top-0">
          <div className="caret-transparent h-[250px] outline-[3px] relative no-underline w-[250px]">
            <div
              style={{ backgroundImage: `url('${badgeImageUrl}')` }}
              className="caret-transparent h-[250px] outline-[3px] absolute no-underline w-[250px] left-0 top-0"
            >
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
