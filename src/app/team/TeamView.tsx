"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import TeamCard, { type TeamMember } from "@/components/TeamCard";
import teamData from "@/data/team.json";

const photoSrc = (photo: string) => `/assets/team/${photo}`;

const TeamView = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [founder, ...members] = teamData.team as TeamMember[];

  return (
    <div className="min-h-screen flex flex-col">
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

      {/* Team Hierarchy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Founder — centered, prominent */}
          <div className="flex justify-center mb-4">
            <div className="w-64">
              <TeamCard
                member={founder}
                photoSrc={photoSrc(founder.photo)}
                onSelect={setSelectedMember}
              />
            </div>
          </div>

          {/* Connecting line */}
          <div className="flex justify-center mb-4">
            <div className="w-px h-8 bg-border" />
          </div>
          <div className="flex justify-center mb-8">
            <div className="w-1/2 h-px bg-border" />
          </div>

          {/* Team members — 4-col grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                photoSrc={photoSrc(member.photo)}
                onSelect={setSelectedMember}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Member Modal */}
      <Dialog
        open={!!selectedMember}
        onOpenChange={(open) => {
          if (!open) setSelectedMember(null);
        }}
      >
        <DialogContent className="max-w-[70vw] p-0 overflow-hidden">
          {selectedMember && (
            <div className="p-8 overflow-y-auto max-h-[85vh]">
              {/* Avatar + name/title */}
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-accent/20">
                  <img
                    src={photoSrc(selectedMember.photo)}
                    alt={`${selectedMember.name}, ${selectedMember.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-montserrat font-bold text-2xl text-primary mb-1">
                    {selectedMember.name}
                  </h2>
                  <p className="font-lato text-base text-accent">
                    {selectedMember.title}
                  </p>
                </div>
              </div>

              <hr className="border-border/40 mb-6" />

              {/* Description */}
              <p className="font-lato text-foreground/80 leading-relaxed mb-8">
                {selectedMember.description}
              </p>

              {/* Expertise + Responsibilities side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {selectedMember.expertise.length > 0 && (
                  <div>
                    <h3 className="font-montserrat font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                      Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.expertise.map((item, i) => (
                        <span
                          key={i}
                          className="font-lato text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedMember.responsibilities.length > 0 && (
                  <div>
                    <h3 className="font-montserrat font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                      Responsibilities
                    </h3>
                    <ul className="space-y-2">
                      {selectedMember.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="font-lato text-foreground/80 text-sm">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default TeamView;
