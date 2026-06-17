interface TeamMember {
  id: string;
  name: string;
  title: string;
  photo: string;
  description: string;
  responsibilities: string[];
  expertise: string[];
}

interface TeamCardProps {
  member: TeamMember;
  photoSrc: string;
  onSelect: (member: TeamMember) => void;
}

const TeamCard = ({ member, photoSrc, onSelect }: TeamCardProps) => {
  return (
    <button
      onClick={() => onSelect(member)}
      className="group w-full text-left rounded-xl overflow-hidden border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all bg-background"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={photoSrc}
          alt={`${member.name}, ${member.title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5 text-center">
        <h3 className="font-montserrat font-bold text-lg text-primary mb-1">
          {member.name}
        </h3>
        <p className="font-lato text-sm text-accent mb-3">{member.title}</p>
        <p className="font-lato text-xs text-muted-foreground">
          View Profile →
        </p>
      </div>
    </button>
  );
};

export type { TeamMember };
export default TeamCard;
