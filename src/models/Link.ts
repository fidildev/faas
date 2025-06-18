export interface GeneratedLink {
  id: string;
  memeUrl: string;
  createdAt: Date;
  expiresAt?: Date;
  viewCount: number;
}

export class LinkStore {
  private static links: Map<string, GeneratedLink> = new Map();

  static addLink(link: GeneratedLink): void {
    this.links.set(link.id, link);
  }

  static getLink(id: string): GeneratedLink | undefined {
    const link = this.links.get(id);
    if (link) {
      // Check if link has expired
      if (link.expiresAt && link.expiresAt < new Date()) {
        this.links.delete(id);
        return undefined;
      }
      // Increment view count
      link.viewCount++;
    }
    return link;
  }

  static getAllLinks(): GeneratedLink[] {
    return Array.from(this.links.values());
  }

  static deleteLink(id: string): boolean {
    return this.links.delete(id);
  }

  static cleanup(): void {
    const now = new Date();
    for (const [id, link] of this.links.entries()) {
      if (link.expiresAt && link.expiresAt < now) {
        this.links.delete(id);
      }
    }
  }
}
