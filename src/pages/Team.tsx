import { useState } from "react";
import { Helmet } from "react-helmet";
import { CheckCircle2 } from "lucide-react";
import { DOMAIN } from "@/lib/constants";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import TeamCard, { type TeamMember } from "@/components/TeamCard";
import teamData from "@/data/team.json";

// Static imports — Vite cannot resolve asset paths dynamically at runtime.
// Add a new import + entry in photoMap whenever a member is added to team.json.
import ceoPhoto from "@/assets/team/ceo.jpg";
import janeSmithPhoto from "@/assets/team/jane-smith.jpg";
import davidOseiPhoto from "@/assets/team/david-osei.jpg";
import sarahLeePhoto from "@/assets/team/sarah-lee.jpg";
import tomKariukiPhoto from "@/assets/team/tom-kariuki.jpg";

const photoMap: Record<string, string> = {
  "ceo.jpg": ceoPhoto,
  "jane-smith.jpg": janeSmithPhoto,
  "david-osei.jpg": davidOseiPhoto,
  "sarah-lee.jpg": sarahLeePhoto,
  "tom-kariuki.jpg": tomKariukiPhoto,
};

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const { team } = teamData;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Team - AgroInternational | The People Behind Our Mission</title>
        <meta
          name="description"
          content="Meet the AgroInternational team — the dedicated professionals driving our mission to connect premium agro-products with global markets."
        />
        <link rel="canonical" href={`${DOMAIN}/team`} />
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-4">
            Meet Our Team
          </h1>
          <p className="font-lato text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            The dedicated professionals driving our global mission
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <TeamCard
                key={member.id}
                member={member as TeamMember}
                photoSrc={photoMap[member.photo]}
                onSelect={setSelectedMember}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Member Modal */}
      <Dialog
        open={!!selectedMember}
        onOpenChange={(open) => { if (!open) setSelectedMember(null); }}
      >
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          {selectedMember && (
            <div className="flex flex-col sm:flex-row">
              {/* Photo */}
              <div className="sm:w-2/5 h-64 sm:h-auto overflow-hidden flex-shrink-0">
                <img
                  src={photoMap[selectedMember.photo]}
                  alt={`${selectedMember.name}, ${selectedMember.title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="sm:w-3/5 p-6 overflow-y-auto max-h-[70vh]">
                <h2 className="font-montserrat font-bold text-2xl text-primary mb-1">
                  {selectedMember.name}
                </h2>
                <p className="font-lato text-lg text-accent mb-4">
                  {selectedMember.title}
                </p>
                <p className="font-lato text-foreground/80 leading-relaxed mb-6">
                  {selectedMember.description}
                </p>

                <h3 className="font-montserrat font-semibold text-base text-primary mb-3">
                  Key Responsibilities
                </h3>
                <ul className="space-y-2">
                  {selectedMember.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-lato text-foreground/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Team;
