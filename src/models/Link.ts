/*
 * MIT License
 *
 * Copyright (c) 2025 FIDIL
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

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
