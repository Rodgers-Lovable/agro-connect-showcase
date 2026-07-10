"use client";

import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import galleryData from "@/data/gallery.json";

type GalleryItem = {
  id: number;
  image: string;
  caption: string;
  alt: string;
};

const GalleryView = () => {
  const { sections } = galleryData;
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Page intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
            Gallery
          </h1>
          <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
            A closer look at our farms, products, quality operations, and global
            reach — from the field to the world&apos;s markets.
          </p>
        </div>
      </section>

      {/* Sections */}
      {sections.map((section, index) => (
        <section
          key={section.id}
          className={`py-20 ${index % 2 === 0 ? "bg-muted/30" : "bg-background"}`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">
                {section.title}
              </h2>
              {section.description && (
                <p className="font-lato text-lg text-muted-foreground max-w-2xl mx-auto">
                  {section.description}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {section.items.map((item) => (
                <button
                  key={`${section.id}-${item.id}`}
                  type="button"
                  onClick={() => setSelected(item)}
                  aria-label={`View larger: ${item.caption}`}
                  className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="relative h-[300px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-montserrat font-semibold text-lg">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox */}
      <Dialog
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selected && (
            <figure>
              <DialogTitle className="sr-only">{selected.caption}</DialogTitle>
              <DialogDescription className="sr-only">
                {selected.alt}
              </DialogDescription>
              <img
                src={selected.image}
                alt={selected.alt}
                className="w-full max-h-[75vh] object-contain bg-black"
              />
              <figcaption className="font-montserrat font-semibold text-base md:text-lg text-primary p-4">
                {selected.caption}
              </figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default GalleryView;
