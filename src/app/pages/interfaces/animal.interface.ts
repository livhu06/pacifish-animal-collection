export interface Animal
    {
      id: string,
      imageUrl: string,
      title: string,
      diet: string,
      habitat: string,
      family: string,
      sizeRange: string,
      lifespan: string,
      audioUrl?: string,
      videoUrl?: string,
      locations?: string[];
      barcode: string;
    }
